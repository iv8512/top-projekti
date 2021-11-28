from os import walk
import os, shutil

source = "../../../temp/node_modules"
destination = "../../node_modules"

folder_count = 0
file_count = 0

for (dirpath, folders, files) in walk(source):
    for folder in folders:
        folder_count += 1
    for file in files:
        file_count += 1
    
print("Starting copy of:")
print(f"{folder_count} Folders and {file_count} files.")

shutil.copytree(source, destination)

print("All items copied to destination")

os.system('pause')
