import os, shutil

print("Starting copy")
source = "../../../temp/node_modules"
destination = "../../node_modules"
shutil.copytree(source, destination)
os.system('pause')
