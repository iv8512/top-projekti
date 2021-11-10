import os, json

path_start = os.path.expanduser("~")
path_middle = r"AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Steam"
path = os.path.join(path_start, path_middle)

games = []

for item in os.listdir(path):
    games.append(item[:-4])

with open("./data/installed_games.json", "w") as file:
    file.write(json.dumps(games, indent=4))
