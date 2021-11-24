from datetime import datetime
import requests, json, time, os

def save_key():
    key = ""
    while len(key) != 32:
        key = input("Input API key: ")
    with open("key.txt", "w") as file:
        file.write(key)

if not os.path.exists("key.txt"):
    print("Key not found")
    save_key()
    #os.system("pause")

def get_key():
    with open("key.txt") as file:
        key = file.read()
    return key

with open("info.json") as file:
    info = json.loads(file.read())
v = info["Versions"]["Weatherfinder"]

#user_input = input("City: ")
cities = ["Sauvo", "Turku", "Muurla"]

def get_data(input_city):
    key = get_key()
    city = f"weather?q={input_city}"
    units = "&units=metric"
    lang = "&lang=fi"
    appid = f"&appid={key}"
    url = f"https://api.openweathermap.org/data/2.5/{city}{units}{lang}{appid}"
    weather_index = requests.get(url)
    weather_index = json.loads(weather_index.text)
    if weather_index.get("cod") == 401:
        save_key()
        weather_index = get_data(input_city)
    return weather_index

temp = "https://www.weatherapi.com/"

def convert_time(epoch_time):
    converted_date = time.strftime('%Y-%d-%m', time.localtime(epoch_time))
    converted_time = time.strftime('%H:%M:%S', time.localtime(epoch_time))
    converted_datetime = [converted_date, converted_time]
    return converted_datetime

def deg_to_compass(num):
    val = int((num/22.5)+.5)
    arr = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
        ]
    return arr[(val % 16)]

def clean_data(weather_index):
    city = weather_index["name"]
    clean_data = {
        "city": city,
        "weather": {
            "description": weather_index["weather"][0]["description"],
            "icon": weather_index["weather"][0]["icon"]
            },
        "air": {
            "temperature": {
                "current": [
                    round(weather_index["main"]["temp"]),
                    weather_index["main"]["temp"]
                    ],
                "min": weather_index["main"]["temp_min"],
                "max": weather_index["main"]["temp_max"],
                "feels_like": weather_index["main"]["feels_like"]
                },
            "wind": {
                "speed": weather_index["wind"]["speed"],
                "deg": [
                    weather_index["wind"]["deg"],
                    deg_to_compass(weather_index["wind"]["deg"])
                    ],
                "gust": weather_index["wind"].get("gust")
                },
            "clouds": weather_index["clouds"],
            "other": {
                "pressure": weather_index["main"]["pressure"],
                "humidity": weather_index["main"]["humidity"],
                "visibility": weather_index["visibility"]
                }
            },
        "dt": {
            "current": convert_time(weather_index["dt"]),
            "sunrise": convert_time(weather_index["sys"]["sunrise"]),
            "sunset": convert_time(weather_index["sys"]["sunset"])
            },
        "other": {
            "country": {
                "name": weather_index["sys"]["country"],
                "id": weather_index["sys"]["id"],
                "timezone": weather_index["timezone"],
                "base": weather_index["base"]
                }
            }
        }
    return clean_data

final_data = []
for city in cities:
    final_data.append(clean_data(get_data(city)))
    print(f"Getting data: {city}")
    time.sleep(1)

file_path = "../data/weather_data.json"
with open(file_path, "w") as file:
    json.dump(final_data, file, indent=4)
    #json.dump(get_data(city), file, indent=4)

print("Done \n")
seconds = (2, 1)
for number in seconds:
    print(f"Exiting in {number}.. ")
    time.sleep(1)
