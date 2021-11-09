import os, json
try:
    import vdf, requests
except ModuleNotFoundError:
    os.system('cmd /c "pip install vdf"')
    os.system('cmd /c "pip install requests"')

def temp():
    os.system('cmd /k "pip uninstall vdf"')

game_index = requests.get("http://api.steampowered.com/ISteamApps/GetAppList/v2")
game_index = json.loads(game_index.text)

path2 = r"E:\Steam\steamapps\libraryfolders.vdf"
path1 = r"C:\Program Files (x86)\Steam\steamapps\libraryfolders.vdf"

with open(path1) as f:
    data = vdf.loads(f.read())

installed_games = []

drive = len(data["libraryfolders"])
drive -= 1

for number in range(drive):
    print(data['libraryfolders'][str(number)]['path'])
    for app_id in data["libraryfolders"][str(number)]["apps"]:
        installed_games.append(app_id)
    for game in range(len(installed_games)):
        for app in game_index["applist"]["apps"]:
            if app["appid"] == int(installed_games[game]):
                print(f"{app['appid']:<7} {app['name']}")
                break
    installed_games.clear()
