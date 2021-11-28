import os

#os.system('cmd /c "npx create-react-app temp"')

print("Starting")
main_dir = "cd.. & cd.. & cd.."
command = f"{main_dir} & npx create-react-app temp"
os.system(f'cmd /k "{command}"')
