import os, json
try:
    import vdf, requests
except ModuleNotFoundError:
    os.system('cmd /c "pip install vdf"')
    os.system('cmd /c "pip install requests"')
    print("Run again to fix")

def temp():
    os.system('cmd /k "pip uninstall vdf"')

visual_output = False
v = 0.4

game_index = requests.get("http://api.steampowered.com/ISteamApps/GetAppList/v1")
game_index = json.loads(game_index.text)

if os.getlogin() == "iivar":
    path = r"E:\Steam\steamapps\libraryfolders.vdf"
else:
    path = r"C:\Program Files (x86)\Steam\steamapps\libraryfolders.vdf"

with open(path) as f:
    data = vdf.loads(f.read())

drive = len(data["libraryfolders"])
drive -= 1

installed_games = []
soundtracks = []

if visual_output:
    for number in range(drive):
        print(data['libraryfolders'][str(number)]['path'])
        for app_id in data["libraryfolders"][str(number)]["apps"]:
            installed_games.append(app_id)
        for game in range(len(installed_games)):
            for app in game_index["applist"]["apps"]["app"]:
                if app["appid"] == int(installed_games[game]):
                    print(f"{game+1:<2} {app['appid']:<7} {app['name']}")
                    installed_games.append(app["name"])
                    break
        installed_games.clear()
else:
    for number in range(drive):
        for app_id in data["libraryfolders"][str(number)]["apps"]:
            for app in game_index["applist"]["apps"]["app"]:
                if app["appid"] == int(app_id):
                    #installed_games.append(app["name"])
                    group = {"name": app["name"], "id": app_id}
                    installed_games.append(group)
                    break
    #for item in installed_games:
    #    if "Soundtrack" in item["name"]:
    #        soundtracks.append(item)
    #        installed_games.remove(item)
    #    if "Redistributables" in item["name"]:
    #        installed_games.remove(item)
    info = {"games": len(installed_games), "soundtracks": len(soundtracks)}
    steam = {"info": info, "games": installed_games, "soundtracks": soundtracks}
    text = {"file": v, "steam": steam}
    with open("../data/installed_games.json", "w") as file:
        file.write(json.dumps(text, indent=4))







