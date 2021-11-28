from tkinter import *
import os

root = Tk()

left = Frame(root)
left.pack(side="left", fill="both", expand=True)
left.config(bg="#1B1B1B")
middle = Frame(root)
middle.pack(side="left", fill="both", expand=True)
right = Frame(root)
right.pack(side="right", fill="both")

def start(item):
    match item:
        case "":
            test()
        case "refresh":
            refresh()
        case _:
            os.startfile(item)
    if "quick_start" in item:
        quit()

def refresh():
    buttons = right.pack_slaves()
    if os.path.exists("../../../temp"):
        buttons[1]["state"] = "disabled"
    else:
        buttons[1]["state"] = "normal"
    path1 = os.path.exists("../../../temp/node_modules")
    path2 = not os.path.exists("../../node_modules")
    if path1 and path2:
        buttons[2]["state"] = "normal"
    else:
        buttons[2]["state"] = "disabled"
    if os.path.exists("../../../temp"):
        buttons[3]["state"] = "normal"
    else:
        buttons[3]["state"] = "disabled"

def refresh_test(self):
    print(self)
    self.destroy()
    self.__init__()

def test():
    buttons = right.pack_slaves()
    print(buttons)
    buttons[1]["state"] = "disabled"
    #buttons[0].destroy()

def create_button(text, item, side="top", expand=True, state=NORMAL, frame=middle):
    button = Button(
        frame, text=text, state=state,
        bg="#252526", fg="white",
        activebackground="#1B1B1B",
        activeforeground="white",
        command=lambda: start(item)
        )
    button.after(3000, refresh)
    button.pack(
        side=side,
        fill="both",
        expand=expand
        )

create_button("Refresh", "refresh", "bottom", False, frame=right)

create_button("Create temp project", "setup\\create_temp_project.py", frame=right)
create_button("Copy modules folder", "setup\\copy_modules.py", frame=right)
create_button("Delete temp project", "setup\\delete_temp_project.py", frame=right)

create_button("Install react-router", "setup\\react_router.py")
create_button("Install global yarn", "setup\\yarn_install.py")
create_button("Return to QStart", "quick_start.pyw", "bottom", False)
create_button("Test", "", "bottom", False, frame=middle)

def create_label(text, frame=left):
    label = Label(frame, text=text, bg="#1B1B1B", fg="white")
    label.pack()

create_label("test")

try: root.iconbitmap("blume.ico")
except TclError: root.iconbitmap("../blume.ico")
root.title("Quick Setup")
root.geometry("350x185")
root.after(500, refresh)
root.mainloop()
