from tkinter import *
from os import walk
import os, json

root = Tk()

with open("./src/python/info.json") as file:
    info = json.loads(file.read())

v = info["Versions"]["QStart"]
path = ".\\src\\python\\start\\"

left = Frame(root)
left.pack(side="left", fill="both", expand=True)
right = Frame(root)
right.pack(side="right", fill="both", expand=True)
right.config(bg="#1B1B1B")

def start(item):
    path = f".\\src\\python\\start\\{item}"
    os.startfile(path)
    if "start" in item: quit()

def create_button(text, item, expand=False):
    button = Button(
        left, text=text, bg="#252526", fg="white",
        activebackground="#1B1B1B", activeforeground="white",
        command=lambda: start(item))
    button.pack(fill="both", expand=expand)

create_button("Start", "yarn_start.py", True)
create_button("Install react-router", "react_router.py")
create_button("Install global yarn", "yarn_install.py")

def count_items():
    count = {"py": 0, "json": 0, "js": 0}
    for (dirpath, folders, files) in walk("./"):
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

def create_label(text, side="top"):
    label = Label(right, text=text, bg="#1B1B1B", fg="white")
    label.pack(side=side)

create_label(f"QStart v{v}")
create_label(f"Gamefinder v{info['Versions']['Gamefinder']}")
create_label(f"Itemfinder v{info['Versions']['Itemfinder']}")
item_count = count_items()
create_label("", "bottom")
create_label(f"{item_count['js']} Javascript files", "bottom")
create_label(f"{item_count['json']} Json files", "bottom")
create_label(f"{item_count['py']} Python files", "bottom")

root.iconbitmap("./src/python/start/blume.ico")
root.title("Quick Start")
root.geometry("300x170")
root.mainloop()

