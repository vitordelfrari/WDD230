document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Get the element where the visit count will be displayed
const visitCountElement = document.getElementById('visitCount');

// Get the current visit count from localStorage or initialize it to 0 if it doesn't exist
let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

// Increment the visit count for this visit
visitCount++;

// Update the display with the new visit count
visitCountElement.textContent = visitCount;

// Store the updated visit count back into localStorage
localStorage.setItem('visitCount', visitCount.toString());
