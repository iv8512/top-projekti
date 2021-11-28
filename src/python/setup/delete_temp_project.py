from os import walk
import os, shutil, stat

print("Starting")

path = "..\\..\\..\\temp"

def del_rw(action, name, exc):
    os.chmod(name, stat.S_IWRITE)
    os.remove(name)

shutil.rmtree(path, onerror=del_rw)

os.system('pause')
