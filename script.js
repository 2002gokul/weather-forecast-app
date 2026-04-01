async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "1c815bea2e8ce5a095f6ce2790db1b25";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

console.log(data);

if(data.cod != 200){
alert("City not found or API error");
return;
}

let temp = data.main.temp;

let condition = data.weather[0].main;

document.getElementById("cityName").innerHTML = city;

document.getElementById("temp").innerHTML = "Temperature: " + temp + " °C";

document.getElementById("condition").innerHTML = "Weather: " + condition;

changeBackground(condition);

}

