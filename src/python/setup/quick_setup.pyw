from tkinter import *
import os

root = Tk()

left = Frame(root)
left.pack(side="left", fill="both", expand=True)
left.config(bg="#1B1B1B")
right = Frame(root)
right.pack(side="right", fill="both", expand=True)
right.config(bg="#252526")

def start(item):
    os.startfile(item)
    if "quick_start" in item: quit()

def create_button(text, item, side="top", expand=True, state=NORMAL, frame=right):
    button = Button(
        frame, text=text, state=state,
        bg="#252526", fg="white",
        activebackground="#1B1B1B", activeforeground="white",
        command=lambda: start(item)
        )
    button.pack(
        side=side,
        fill="both",
        expand=expand
        )

create_button("Install react-router", "react_router.py", "top", True, DISABLED)
create_button("Install global yarn", "yarn_install.py", "top", True, DISABLED)
create_button("Add node modules", "node_modules.py", "top", True, DISABLED)
create_button("Return to QStart", "quick_start.pyw", "bottom", False)

def create_label(text, frame=left):
    label = Label(frame, text=text, bg="#1B1B1B", fg="white")
    label.pack()

create_label("test")

root.iconbitmap("blume.ico")
root.title("Quick Setup")
root.geometry("350x185")
root.mainloop()
