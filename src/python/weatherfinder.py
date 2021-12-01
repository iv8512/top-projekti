# Weatherfinder IV8512

import os, time
try:
    import requests, json
except ModuleNotFoundError:
    os.system('cmd /c "pip install requests"')

key_path = "../data/key.txt"

def save_key():
    key = ""
    while len(key) != 32:
        key = input("Input API key: ")
    with open(key_path, "w") as file:
        file.write(key)

if not os.path.exists(key_path):
    print("Key not found")
    save_key()

def get_key():
    with open(key_path) as file:
        key = file.read()
    return key

with open("../data/info.json") as file:
    info = json.loads(file.read())
v = info["Versions"]["Weatherfinder"]

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

def convert_time(epoch_time):
    converted_date = time.strftime('%Y-%d-%m', time.localtime(epoch_time))
    converted_time = time.strftime('%H:%M:%S', time.localtime(epoch_time))
    converted_datetime = [
        get_sec(converted_time),
        converted_date,
        converted_time
        ]
    return converted_datetime

def get_sec(time_str):
    h, m, s = time_str.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)

def deg_to_compass(num):
    val = int((num/22.5)+.5)
    arr = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
        ]
    return arr[(val % 16)]

def speed_to_name(speed):
    speed = round(speed, 1)
    if speed < 0.5: return "Calm"
    if 0.5 <= speed <= 1.5: return "Light air"
    if 1.6 <= speed <= 3.3: return "Light breeze"
    if 3.4 <= speed <= 5.5: return "Gentle breeze"
    if 5.5 <= speed <= 7.9: return "Moderate breeze"
    if 8.0 <= speed <= 10.7: return "Fresh breeze"
    if 10.8 <= speed <= 13.8: return "Strong breeze"
    if 17.2 <= speed <= 20.7: return "Strong wind"
    if 20.8 <= speed <= 24.4: return "Severe wind"
    if 24.5 <= speed <= 28.4: return "Storm"
    if 28.5 <= speed <= 32.6: return "Violent storm"
    if 32.7 <= speed: return "Hurricane"

def clean_data(weather_index):
    clean_data = {
        "city": weather_index["name"],
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
                "min": [
                    round(weather_index["main"]["temp_min"]),
                    weather_index["main"]["temp_min"]
                    ],
                "max": [
                    round(weather_index["main"]["temp_max"]),
                    weather_index["main"]["temp_max"]
                    ],
                "feels_like": [
                    round(weather_index["main"]["feels_like"]),
                    weather_index["main"]["feels_like"]
                    ]
                },
            "wind": {
                "speed": [
                    weather_index["wind"]["speed"],
                    speed_to_name(weather_index["wind"]["speed"])
                    ],
                "deg": [
                    weather_index["wind"]["deg"],
                    deg_to_compass(weather_index["wind"]["deg"])
                    ],
                "gust": weather_index["wind"].get("gust")
                },
            "clouds": weather_index["clouds"],
            "other": {
                "pressure": str(weather_index["main"]["pressure"]) + "hPa",
                "humidity": str(weather_index["main"]["humidity"]) + "%",
                "visibility": str(weather_index["visibility"] / 1000) + "km"
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
                "timezone": weather_index["timezone"]
                },
            "coord": weather_index["coord"],
            "id": weather_index["id"],
            "base": weather_index["base"],
            "cod": weather_index["cod"]
            }
        }
    return clean_data

cities_path = "../data/cities.json"
if os.path.exists(cities_path):
    with open(cities_path) as file:
        cities = json.loads(file.read())
else:
    cities = "Sauvo"

final_data = []
for city in cities:
    final_data.append(clean_data(get_data(city)))
    print(f"Getting data: {city}")
    time.sleep(1)

file_path = "../data/weather_data.json"
with open(file_path, "w") as file:
    json.dump(final_data, file, indent=4)

print("Done \n")
seconds = (2, 1)
for number in seconds:
    print(f"Exiting in {number}.. ")
    time.sleep(1)
