from datetime import datetime
import requests, json, time

with open("info.json") as file:
    info = json.loads(file.read())
v = info["Versions"]["Weatherfinder"]

#user_input = input("City: ")
city = "sauvo"

def get_data(user_input):
    key = "b307815b6413828f9862092e5d4add4b"
    city = f"weather?q={user_input}"
    units = "&units=metric"
    lang = "&lang=fi"
    appid = f"&appid={key}"
    url = f"https://api.openweathermap.org/data/2.5/{city}{units}{lang}{appid}"
    weather_index = requests.get(url)
    weather_index = json.loads(weather_index.text)
    return weather_index

"https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/03d.png"
"https://www.weatherapi.com/"

def convert_time(epoch_time):
    converted_date = time.strftime('%Y-%d-%m', time.localtime(epoch_time))
    converted_time = time.strftime('%H:%M:%S', time.localtime(epoch_time))
    converted_datetime = [converted_date, converted_time]
    return converted_datetime

def clean_data(weather_index):
    city = weather_index["name"]
    data = {
        "weather": {
            "description": weather_index["weather"][0]["description"],
            "icon": weather_index["weather"][0]["icon"]
            },
        "air": {
            "temperature": {
                "current": weather_index["main"]["temp"],
                "min": weather_index["main"]["temp_min"],
                "max": weather_index["main"]["temp_max"],
                "feels_like": weather_index["main"]["feels_like"]
                },
            "wind": weather_index["wind"],
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
                "timezone": weather_index["timezone"]
                }
            }
        }
    clean_data = {city: data}
    return clean_data

clean_data = clean_data(get_data(city))
#final_data = {city_name: weather_data}
#final_data[city_name].pop("name")

#converted_date = time.strftime('%Y-%d-%m', time.localtime(weather_data["dt"]))
#converted_time = time.strftime('%H:%M:%S', time.localtime(weather_data["dt"]))
#final_data[city_name]["dt"] = {"date": converted_date, "time": converted_time}

#sunrise = time.strftime('%H:%M:%S', time.localtime(weather_data["sys"]["sunrise"]))
#sunset = time.strftime('%H:%M:%S', time.localtime(weather_data["sys"]["sunset"]))
#final_data[city_name]["sys"]["sunrise"] = sunrise
#final_data[city_name]["sys"]["sunset"] = sunset

file_path = "../data/weather_data.json"
with open(file_path, "w") as file:
    json.dump(clean_data, file, indent=4)
    #json.dump(get_data(city), file, indent=4)

print("done")
