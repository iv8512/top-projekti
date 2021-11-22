from tkinter import *
from os import walk
import os, json, time

root = Tk()

with open("info.json") as file:
    info = json.loads(file.read())
v = info["Versions"]["QStart"]

left = Frame(root)
left.pack(side="left", fill="both")
middle = Frame(root)
middle.pack(side="left", fill="both", expand=True)
right = Frame(root)
right.pack(side="right", fill="both", expand=True)
right.config(bg="#1B1B1B")

def start(text, item):
    os.startfile(item)
    root.title(f"Quick Start - Running {text}")
    time.sleep(2)
    root.title(f"Quick Start")
    #if "start" in item: quit()
    if "quick_setup" in item: quit()

def create_button(text, item, state=NORMAL, frame=middle, expand=False):
    button = Button(
        frame, text=text, state=state,
        bg="#252526", fg="white",
        activebackground="#1B1B1B", activeforeground="white",
        command=lambda: start(text, item))
    button.pack(fill="both", expand=expand)

create_button("Start", "start\\yarn_start.py", NORMAL, middle, True)
create_button("Weatherfinder", "weatherfinder.py", NORMAL, left, True)
create_button("Gamefinder", "gamefinder.py", NORMAL, left, True)
create_button("Itemfinder", "itemfinder.py", DISABLED, left, True)
if os.path.exists("setup/quick_setup.pyw"):
    create_button("Open QSetup", "..\\setup\\quick_setup.pyw", NORMAL)
else:
    create_button("Open QSetup", "..\\setup\\quick_setup.pyw", DISABLED)

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

def create_label(text, side="top"):
    label = Label(right, text=text, bg="#1B1B1B", fg="white")
    label.pack(side=side)

for name in info["Versions"]:
    create_label(f"{name} v{info['Versions'][name]}")
item_count = count_items()
create_label(f"{item_count['js']} Javascript files", "bottom")
create_label(f"{item_count['json']} Json files", "bottom")
create_label(f"{item_count['py']} Python files", "bottom")

root.iconbitmap("blume.ico")
root.title("Quick Start")
root.geometry("450x185")
root.resizable(False, False)
root.mainloop()
