from tkinter import *
from os import walk
import os, json, time

root = Tk()

info_path = "../data/info.json"
with open(info_path) as file:
    info = json.loads(file.read())

left = Frame(root)
left.pack(side="left", fill="both")
middle = Frame(root)
middle.pack(side="left", fill="both", expand=True)
right = Frame(root)
right.pack(side="right", fill="both", expand=True)
right.config(bg="#1B1B1B")

def reset_title():
    root.title(f"Quick Start")

def save_current_time():
    current_time = time.localtime()
    current_date = time.strftime('%Y-%d-%m', current_time)
    current_time = time.strftime('%H:%M:%S', current_time)
    with open(info_path) as file:
        data = json.loads(file.read())
    data["Website"]["Started"] = [current_date, current_time]
    with open(info_path, "w") as file:
        json.dump(data, file, indent=4)

def start(text, item, close=True):
    os.startfile(item)
    if close: root.title(f"Quick Start - Running {text}.")
    else: root.title(f"Quick Start - Running {text}")
    root.after(3000, reset_title)
    if text == "Start":
        save_current_time()
    if close:
        root.after(4000, quit)

def title_info(text):
    match text:
        case "Start":
            root.title(f"Quick Start - Start the website")
        case "Weatherfinder":
            root.title(f"Quick Start - Get weather for selected cities")
        case "Gamefinder":
            root.title(f"Quick Start - Search for currently installed games")
        case "QSetup":
            root.title(f"Quick Start - Open Quick Setup")
    root.after(5000, reset_title)

def create_button(text, item, frame=middle, expand=False):
    if os.path.exists(item): state=NORMAL
    else: state=DISABLED
    button = Button(
        frame, text=text, state=state,
        bg="#252526", fg="white",
        activebackground="#1B1B1B", activeforeground="white")
    button.pack(fill="both", expand=expand)
    button.bind('<Button-1>', lambda event: start(text, item))
    button.bind('<Button-2>', lambda event: title_info(text))
    button.bind('<Button-3>', lambda event: start(text, item, False))

create_button("Start", "start\\yarn_start.py", middle, True)
create_button("Weatherfinder", "weatherfinder.py", left, True)
create_button("Gamefinder", "gamefinder.py", left, True)
create_button("Itemfinder", "itemfinder.py", left, True)
create_button("QSetup", "setup\\quick_setup.pyw")

def create_label(text, side="top"):
    label = Label(right, text=text, bg="#1B1B1B", fg="white")
    label.pack(side=side)

def count_items():
    count = {"py": 0, "json": 0, "js": 0}
    for (dirpath, folders, files) in walk("../../"):
        if "node_modules" not in dirpath:
            for file in files:
                if ".py" in file:
                    count["py"] += 1
                elif ".json" in file:
                    count["json"] += 1
                elif ".js" in file[-3:]:
                    count["js"] += 1
                else:
                    pass
    return count

for name in info["Versions"]:
    create_label(f"{name} v{info['Versions'][name]}")
create_label("-- Javascript files", "bottom")
create_label("-- Json files", "bottom")
create_label("-- Python files", "bottom")

def update_info():
    item_count = count_items()
    labels = right.pack_slaves()
    labels[5]["text"] = f"{item_count['js']} Javascript files"
    labels[6]["text"] = f"{item_count['json']} Json files"
    labels[7]["text"] = f"{item_count['py']} Python files"

root.iconbitmap("blume.ico")
root.title("Quick Start")
root.geometry("450x185")
root.resizable(False, False)
root.after(100, update_info)
root.mainloop()
