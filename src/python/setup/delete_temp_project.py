import os, shutil, stat, time

print("Starting")

path = "..\\..\\..\\temp"

def del_rw(action, name, exc):
    os.chmod(name, stat.S_IWRITE)
    os.remove(name)

shutil.rmtree(path, onerror=del_rw)

print("All items removed")
#os.system('pause')
time.sleep(3)
