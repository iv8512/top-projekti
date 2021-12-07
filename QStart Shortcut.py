import os
try:
    import vdf, requests
except ModuleNotFoundError:
    os.system('cmd /c "pip install vdf"')
    os.system('cmd /c "pip install requests"')

os.system('cmd /c "cd src & cd python & jump_point.pyw"')

#os.system('pause')
