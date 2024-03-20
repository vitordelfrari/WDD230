document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data containing member information
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Filter members with silver or gold membershipLevel
            const silverGoldMembers = data.members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');

            // Randomly select 2 to 3 companies from the filtered list
            const selectedMembers = getRandomMembers(silverGoldMembers, 2, 3);

            // Display the selected members on the home page
            const spotlightsContainer = document.getElementById('spotlightsContainer');
            selectedMembers.forEach(member => {
                const spotlightItem = createSpotlightItem(member);
                spotlightsContainer.appendChild(spotlightItem);
            });
        })
        .catch(error => console.error('Error fetching directory data:', error));

    // Function to randomly select members
    function getRandomMembers(members, min, max) {
        const shuffled = members.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
    }

    // Function to create spotlight item HTML
    function createSpotlightItem(member) {
        const spotlightItem = document.createElement('div');
        spotlightItem.classList.add('member-spotlight');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const description = document.createElement('p');
        description.textContent = member.description;

        spotlightItem.appendChild(name);
        spotlightItem.appendChild(description);

        return spotlightItem;
    }
});
