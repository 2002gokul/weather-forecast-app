# 🌦️ Weather Forecast App

A simple and responsive Weather Forecast Web Application built using HTML, CSS, and JavaScript.  
It fetches real-time weather data using the OpenWeatherMap API and displays temperature and weather conditions dynamically.

---

## 🚀 Features

- 🔍 Search weather by city name  
- 🌡️ Displays real-time temperature (°C)  
- ☁️ Shows weather condition (Clear, Rain, Clouds, etc.)  
- 🎨 Dynamic background based on weather  

---

## 🛠️ Technologies Used

- HTML  
- CSS  
- JavaScript  
- OpenWeatherMap API  

---

## 📂 Project Structure
```
weather-forecast-app/
│
├── index.html
├── style.css
├── script.js
├── background.js
└── README.md
```
---

## ⚙️ How It Works

1. User enters a city name  
2. App sends request to OpenWeatherMap API  
3. Receives weather data in JSON format  

**Displays:**
- City Name  
- Temperature  
- Weather Condition  

Background changes based on weather  

---

## 🔑 API Setup

1. Go to: https://openweathermap.org/api  
2. Create an account and get your API key  
3. Replace the API key in your `script.js`:

```javascript
let apiKey = "YOUR_API_KEY";
