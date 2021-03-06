from os import walk
import os.path, json, time

with open("./src/python/info.json") as file:
    info = json.loads(file.read())

visual = True
v = info["Versions"]["Itemfinder"]
path = "C:\\"
file_path = "..\\data\\item_database.json"
item_index_test = {
        "Discord": {},
        "Steam": ["steam.exe"],
        "UbisoftConnect": {},
        "EpicGamesLauncher": {}}

def create_file(item_index):
    with open(file_path, "w") as file:
        json.dump(item_index, file, indent=4)
    if visual: print("File created")

#if not os.path.exists(file_path):
#    create_file()

def file_scan(names):
    searched_files = 0
    found_items = {}
    for (dirpath, folders, files) in walk(path):
        for file in files:
            searched_files += 1
            for position in range(len(names)):
                if file == names[position]:
                    if file in found_items:
                        found_items[file].append(dirpath)
                    else:
                        found_items[file] = [dirpath]
            if searched_files % 10000 == 0:
                print(".", end="")
    return found_items

def input_collector():
    collector = []
    while True:
        user_input = input(": ")
        if user_input != "":
            collector.append(user_input)
        else:
            break
    return collector

def cmd_main():
    text = "Please write the name of the file(s) you want to find \n"
    print(text + "When ready press enter")
    collector = input_collector()
    print(collector)
    found_items = file_scan(collector)
    print(found_items)
    for item in found_items:
        print(item)
    #game_index = {user_input: found_items}
    #create_file(game_index)
    create_file(found_items)


cmd_main()
