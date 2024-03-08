document.addEventListener("DOMContentLoaded", function () {
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data.members));

    document.getElementById('gridViewButton').addEventListener('click', () => toggleView('grid'));
    document.getElementById('listViewButton').addEventListener('click', () => toggleView('list'));
});

function displayMembers(members) {
    const container = document.getElementById('membersContainer');
    container.innerHTML = ''; // Clear existing members

    members.forEach(member => {
        const div = document.createElement('div');
        div.className = 'member-card'; // Default to grid view
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
            <p>${member.description}</p>
        `;
        container.appendChild(div);
    });
}

function toggleView(view) {
    const container = document.getElementById('membersContainer');
    const members = container.querySelectorAll('.member-card, .member-list-item');

    if (view === 'list') {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
        members.forEach(member => {
            member.classList.remove('member-card');
            member.classList.add('member-list-item');
        });
    } else { // Default to grid
        container.classList.remove('list-view');
        container.classList.add('grid-view');
        members.forEach(member => {
            member.classList.remove('member-list-item');
            member.classList.add('member-card');
        });
    }
}
