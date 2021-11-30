from tkinter import *
import time, json, os

#with open("../data/installed_games.json") as file:
#    data = json.loads(file.read())

#sorted_data = sorted(steam_data, key=lambda game: game["name"])

root = Tk()

def test(item):
    os.startfile(item)

#test("gamefinder.py")

button = Button(
    text="test",
    command=lambda: test("weatherfinder.py"))
button.pack(fill="both")

#input("press enter to quit")
#os.system('pause')

root.mainloop()

"""
import requests

res = requests.get('https://ipinfo.io/')
data = res.json()

city = data['city']

location = data['loc'].split(',')
latitude = location[0]
longitude = location[1]

print("Latitude : ", latitude)
print("Longitude : ", longitude)
print("City : ", city)
"""
