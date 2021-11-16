import os
try: import vdf, json, requests, winreg
except ModuleNotFoundError:
    os.system('cmd /c "pip install vdf"')
    os.system('cmd /c "pip install requests"')

# info
with open("./src/python/info.json") as file:
    info = json.loads(file.read())
gamefinder_v = info["Versions"]["Gamefinder"]
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

# find epic games
epic_games = []
try:
    dat_path = r"C:\ProgramData\Epic\UnrealEngineLauncher\LauncherInstalled.dat"
    with open(dat_path) as file:
        dat_data = json.loads(file.read())

    for game in dat_data["InstallationList"]:
        if len(game["AppName"]) < 30:
            game_name = os.path.basename(game["InstallLocation"])
            game_id = game["AppName"]
            game_v = game["AppVersion"]
            library_path = game["InstallLocation"]
            library_drive = os.path.splitdrive(library_path)[0]
            epic_game = {"name": game_name, "id": game_id,
                         "version": game_v, "drive": library_drive}
            epic_games.append(epic_game)
except FileNotFoundError:
    pass

# find ubisoft games
ubisoft_games = []
try:
    import winreg
    base_reg = winreg.ConnectRegistry(None, winreg.HKEY_LOCAL_MACHINE)
    sub_key = winreg.OpenKey(base_reg, "SOFTWARE\\WOW6432Node\\Ubisoft\\Launcher\\Installs\\")
    for i in range(50) :
        try :
            game_id = winreg.EnumKey(sub_key,i)
            game_name_key = winreg.OpenKey(base_reg, "SOFTWARE\\WOW6432Node\\Ubisoft\\Launcher\\Installs\\" + game_id + "\\")
            name = winreg.EnumValue(game_name_key, 1)
            path = name[1]
            path = os.path.dirname(path)
            game_name = os.path.basename(path)
            ubisoft_game = {"name": game_name, "id": game_id}
            ubisoft_games.append(ubisoft_game)
        except :
            pass
except FileNotFoundError:
    pass
winreg.CloseKey(base_reg)

# origin games
origin_games = []
try:
    origin_path = r"C:\ProgramData\Origin\LocalContent"
    for game_name in os.listdir(origin_path):
        origin_game = {"name": game_name, "id": ""}
        origin_games.append(origin_game)
except FileNotFoundError:
    pass

# compile file contents
versions = {"gamefinder": gamefinder_v, "file": file_v}
file_info = {"versions": versions}
steam_info = {"games": len(steam_games), "soundtracks": len(steam_soundtracks)}
steam = {"info": steam_info, "games": steam_games, "soundtracks": steam_soundtracks}
epic_info = {"games": len(epic_games)}
epic = {"info": epic_info, "games": epic_games}
ubisoft_info = {"games": len(ubisoft_games)}
ubisoft = {"info": ubisoft_info, "games": ubisoft_games}
origin_info = {"games": len(origin_games)}
origin = {"info": origin_info, "games": origin_games}
main_list = {"info": file_info, "steam": steam, "epic": epic, "ubisoft": ubisoft, "origin": origin}

# create file
file_path = "../data/installed_games.json"
with open(file_path, "w") as file:
    json.dump(main_list, file, indent=4)







