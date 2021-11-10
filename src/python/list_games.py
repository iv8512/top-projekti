try: import vdf, json, requests, os
except ModuleNotFoundError:
    os.system('cmd /c "pip install vdf"')
    os.system('cmd /c "pip install requests"')

# info
list_games_v = 0.6
file_v = 0.3
visual = False

if os.getlogin() == "iivar":
    vdf_path = r"E:\Steam\steamapps\libraryfolders.vdf"
else:
    vdf_path = r"C:\Program Files (x86)\Steam\steamapps\libraryfolders.vdf"
with open(vdf_path) as file:
    vdf_data = vdf.loads(file.read())

url = "http://api.steampowered.com/ISteamApps/GetAppList/v2"
game_index = requests.get(url)
game_index = json.loads(game_index.text)

# steam game id to name
steam_games = []
count = 1
drives = len(vdf_data["libraryfolders"]) - 1
for folder in range(drives):
    library_path = vdf_data["libraryfolders"][str(folder)]["path"]
    library_drive = os.path.splitdrive(library_path)[0]
    if visual: print(library_path)
    for app_id in vdf_data["libraryfolders"][str(folder)]["apps"]:
        app_name = ""
        for item in game_index["applist"]["apps"]:
            if item["appid"] == int(app_id):
                app_name = item["name"]
                break
        steam_game = {"name": app_name, "id": app_id, "drive": library_drive}
        steam_games.append(steam_game)
        if visual: print(f"{count:<2} {app_id:<7} {app_name}")
        count += 1

# separate soundtracks
steam_soundtracks = []
steam_other = []
for item in steam_games:
    if "Soundtrack" in item["name"]:
        steam_soundtracks.append(item)
        steam_games.remove(item)
    if "Redistributables" in item["name"]:
        steam_games.remove(item)

# compile file contents
steam_info = {"games": len(steam_games), "soundtracks": len(steam_soundtracks)}
steam = {"info": steam_info, "games": steam_games, "soundtracks": steam_soundtracks}
versions = {"list games": list_games_v, "file": file_v}
file_info = {"versions": versions}
main_list = {"info": file_info, "steam": steam}

# create file
file_path = "../data/installed_games.json"
with open(file_path, "w") as file:
    json.dump(main_list, file, indent=4)