# Weatherfinder IV8512

def imports():
    import os, time
    try:
        import requests, json
    except ModuleNotFoundError:
        os.system('cmd /c "pip install requests"')
        time.sleep(3)
        imports()

def key():
    key_path = "key.txt"
    if os.path.exists(key_path):
        pass
    else:
        with open(key_path, "w") as file:

imports()

