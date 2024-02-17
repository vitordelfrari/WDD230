// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
    if (typeof temperature !== 'number' || typeof windSpeed !== 'number') {
        console.error('Temperature and wind speed must be numbers.');
        return;
    }

    let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    windChill = Math.round(windChill * 100) / 100;

    return windChill;
}

// Get the current temperature and wind speed from the page
const currentTemperature = parseFloat(document.getElementById('current-temperature').innerText);
const currentWindSpeed = parseFloat(document.getElementById('current-windspeed').innerText);

// Calculate the wind chill factor
const windChill = calculateWindChill(currentTemperature, currentWindSpeed);

// Display the wind chill value on the page
document.getElementById('wind-chill').innerText = `${windChill}°F`;
