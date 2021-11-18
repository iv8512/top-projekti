from datetime import datetime
import requests, json

v = ""

user_input = input("City: ")

key = "b307815b6413828f9862092e5d4add4b"
city = f"weather?q={user_input}"
units = "&units=metric"
lang = "&lang=fi"
url = f"https://api.openweathermap.org/data/2.5/{city}{units}{lang}&appid={key}"

temp1 = "https://api.openweathermap.org/data/2.5/weather?q=Muurla&units=metric&lang=fi&appid={key}"
temp3 = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/03d.png"
temp3 = "https://www.weatherapi.com/"

weather_data = requests.get(url)
weather_data = json.loads(weather_data.text)

print("\n", weather_data, "\n") 
print(weather_data["weather"][0]["description"])
print(datetime.fromtimestamp(weather_data["dt"]))
print(datetime.fromtimestamp(weather_data["sys"]["sunrise"]))
print(datetime.fromtimestamp(weather_data["sys"]["sunset"]))

data_template = """
{'coord':
    {'lon': 23.2833, 'lat': 60.35},
    'weather': [
        {'id': 500,
        'main': 'Rain',
        'description': 'pieni sade',
        'icon': '10n'}],
    'base': 'stations',
    'main': {'temp': 5.54,
    'feels_like': 2.28,
    'temp_min': 4.64,
    'temp_max': 6.41,
    'pressure': 1002,
    'humidity': 97,
    'sea_level': 1002,
    'grnd_level': 997},
    'visibility': 10000,
    'wind': {
        'speed': 4.46,
        'deg': 189,
        'gust': 9.49},
    'rain': {'1h': 0.12},
    'clouds': {'all': 100},
    'dt': 1637196301,
    'sys': {
        'type': 2,
        'id': 2022765,
        'country': 'FI',
        'sunrise': 1637217284,
        'sunset': 1637243379},
    'timezone': 7200,
    'id': 645370,
    'name': 'Muurla',
    'cod': 200}
"""
