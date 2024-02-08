const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const mainSections = main.querySelectorAll("section");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        // Dark mode
        main.style.background = "#000";
        main.style.color = "#fff";
        mainSections.forEach(section => {
            section.style.background = "#111"; // Change background color of each section
            section.style.color = "#fff"; // Change text color of each section
            const h2 = section.querySelector("h2");
            if (h2) h2.style.color = "#fff"; // Change text color of h2
        });
        modeButton.textContent = "🔆";
    } else {
        // Light mode
        main.style.background = "#eee";
        main.style.color = "#000";
        mainSections.forEach(section => {
            section.style.background = "#f2f2f2"; // Reset background color of each section
            section.style.color = "#000"; // Reset text color of each section
            const h2 = section.querySelector("h2");
            if (h2) h2.style.color = "#2A2F41"; // Reset text color of h2
        });
        modeButton.textContent = "🕶️";
    }
});
