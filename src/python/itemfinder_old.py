from os import walk
import os.path, json, time

visual = True
path = "C:\\"
backslash = "\\"
item_index = {}

def available_drives():
    drives = "ABCDEFGHIJKLMN"
    available_drives = []
    for drive in drives:
        drive = f"{drive}:"
        if os.path.exists(drive):
            available_drives.append(drive)
    return available_drives

def scan(*item):
    count = 0
    found_items = {}
    if "." in item[0]:
        for (dirpath, folders, files) in walk(path):
            for file in files:
                count += 1
                for amount in range(len(item)):
                    if file == item[amount]:
                         found_items[count] = dirpath+"\\"+file
                else:
                    if count % 3000 == 0:
                        print(".", end="")
        scan_end(found_items, item, count)
    else:
        pass

def scan_end(found_items, item, count):
    item_index[item[0]] = found_items
    item_amount = len(item_index[item[0]])
    text = f" Searched {count} items, found {item_amount} matching"
    for letter in text:
        print(letter, end="")

if visual:
    print(available_drives())
    scan("steam.exe", "UbisoftConnect.exe")
    scan("Update.exe")
else:
    pass

file_path = "../data/item_database.json"
with open(file_path, "w") as file:
    json.dump(item_index, file, indent=4)













