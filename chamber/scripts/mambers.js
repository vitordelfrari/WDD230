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
    const members = container.children;

    if (view === 'list') {
        container.classList.remove('grid');
        container.classList.add('list');
        for (let i = 0; i < members.length; i++) {
            members[i].classList.remove('member-card');
            members[i].classList.add('member-list-item');
        }
    } else { // Default to grid
        container.classList.remove('list');
        container.classList.add('grid');
        for (let i = 0; i < members.length; i++) {
            members[i].classList.remove('member-list-item');
            members[i].classList.add('member-card');
        }
    }
}
