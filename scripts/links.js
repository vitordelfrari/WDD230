const baseURL = "https://vitordelfrari.github.io/wdd230/";
const linksURL = "https://vitordelfrari.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons); // Assuming your JSON structure has a root key "lessons"
    } catch (error) {
        console.error("Error fetching links data:", error);
    }
}

function displayLinks(lessons) {
    const container = document.getElementById('linksList'); // Adjust selector as needed
    container.innerHTML = ''; // Clear existing content

    lessons.forEach(lesson => {
        const lessonTitle = lesson.lesson;
        const activities = lesson.activities.map(activity => `<a href="${activity.url}">${activity.title}</a>`).join(' | ');
        const li = document.createElement('li');
        li.innerHTML = `${lessonTitle}: ${activities}`;
        container.appendChild(li);
    });
}

getLinks();
