const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5077&lon=-86.9458&units=imperial&appid=9764c87cf255c860a4c4713be4f4dc97";

fetch(weatherURL)
  .then((response) => response.json())
  .then((weatherData) => {
    document.getElementById('currentTemp').textContent = Math.round(weatherData.main.temp);
    document.getElementById('condition').textContent = weatherData.weather[0].description;
    document.getElementById('humidity').textContent = weatherData.main.humidity;
  });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5077&lon=-86.9458&units=imperial&appid=9764c87cf255c860a4c4713be4f4dc97";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastData) => {
    const fivedayForecast = forecastData.list.filter(entry => entry.dt_txt.includes('12:00:00'));
    document.getElementById('forecastTemp').textContent = Math.round(fivedayForecast[0].main.temp);
    document.getElementById('forecastCondition').textContent = fivedayForecast[0].weather[0].description;
    document.getElementById('forecastHumidity').textContent = fivedayForecast[0].main.humidity;
  });
