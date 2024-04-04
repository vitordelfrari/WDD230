// Define the URL of the JSON data
const rentalsDataUrl = "data/rent.json";

// Function to fetch scooter data and populate the select element
async function getScootersSelectData() {
    try {
        const response = await fetch(rentalsDataUrl);
        if (response.ok) {
            const data = await response.json();
            loadSelectInput(data);
        } else {
            throw Error(await response.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to populate the select element with scooter options
function loadSelectInput(data) {
    const scooterSelect = document.querySelector('#scooter');
    data.scooters.forEach((rental) => {
        const option = document.createElement('option');
        option.value = rental.id;
        option.textContent = rental.description;
        scooterSelect.appendChild(option);
    });
}

// Call the function to fetch and populate scooter data when the page loads
document.addEventListener("DOMContentLoaded", getScootersSelectData);
