const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastTemp = document.querySelector('#forecast-temp');
const banner = document.querySelector('#banner');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-20.54675028265824&lon=-47.404482441551586&appid=9764c87cf255c860a4c4713be4f4dc97&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-20.54675028265824&lon=-47.404482441551586&appid=9764c87cf255c860a4c4713be4f4dc97&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl);
        if (response.ok && forecastResponse.ok) {
            const data = await response.json();
            const forecastData = await forecastResponse.json();
            console.log(data, forecastData); //Testing only
            displayResults(data, forecastData);
        } else {
            throw Error(await response.text(), await forecastResponse.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data, forecastData) {
    // Display current weather information
    currentTemp.innerHTML = `${data.main.temp}°F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;

    // Display 3-day forecast with dates
    let forecastHTML = '';
    for (let i = 0; i < 24; i += 8) { // 3 days, 8*3 hours apart
        const date = new Date(forecastData.list[i].dt * 1000); // Convert timestamp to date object
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`; // Format date as MM/DD
        const temperature = forecastData.list[i].main.temp;
        forecastHTML += `<span>${formattedDate}: ${temperature}°F</span>`;
    }
    forecastTemp.innerHTML = forecastHTML;

    // Display banner on Monday, Tuesday, Wednesday
    const today = new Date().getDay();
    if (today >= 1 && today <= 3) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }

    // Enable user to close the banner
    banner.querySelector('.close').addEventListener('click', () => {
        banner.style.display = 'none';
    });
}


// Display banner on Monday, Tuesday, Wednesday
const today = new Date().getDay();
if (today >= 1 && today <= 3) { // Day 1 is Monday, 3 is Wednesday
    banner.style.display = 'block';
} else {
    banner.style.display = 'none';
}

// This part should ideally be outside the displayResults function to ensure it's set up immediately and not dependent on the fetch response
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector('#banner .close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            banner.style.display = 'none';
        });
    }
});


apiFetch();
