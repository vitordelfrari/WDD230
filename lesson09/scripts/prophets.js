// Declare constants for URL and the cards container
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Async function to fetch prophet data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

// Function to display each prophet's card
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthInfo = document.createElement('p'); // Paragraph element for birth info
        let portrait = document.createElement('img');

        // Full name and image setup
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); // Adjusted for better responsiveness
        portrait.setAttribute('height', '300'); // Adjusted for better responsiveness

        // Birth info setup
        birthInfo.textContent = `Born: ${prophet.birthdate} in ${prophet.birthplace}`;

        // Appending children
        card.appendChild(fullName);
        card.appendChild(birthInfo); // Add birth info to the card
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

// Call the function to get and display prophet data
getProphetData();
