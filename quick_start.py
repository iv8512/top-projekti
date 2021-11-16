from tkinter import *
import os

root = Tk()

v = 0.2
path = ".\\src\\python\\start\\"

def start(item):
    path = f".\\src\\python\\start\\{item}"
    os.startfile(path)
    if "start" in item: quit()

def create_button(text, item, expand=False):
    button = Button(
        root, text=text, bg="#252526", fg="white",
        activebackground="#1B1B1B", activeforeground="white",
        command=lambda: start(item))
    button.pack(fill="both", expand=expand)

create_button("Start", "yarn_start.py", True)
create_button("Install react-router", "react_router.py")
create_button("Install global yarn", "yarn_install.py")

root.iconbitmap("./src/python/start/blume.ico")
root.title("QStart")
root.geometry("300x170")
root.config(bg="#1B1B1B")
root.mainloop()

