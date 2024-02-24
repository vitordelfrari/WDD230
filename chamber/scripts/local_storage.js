let lastVisit = localStorage.getItem('lastVisit');
let today = new Date();

if (lastVisit === null) {
  // This is the user's first visit.
  alert("Welcome! Let us know if you have any questions.");
} else {
  lastVisit = new Date(lastVisit);
  let diffInDays = Math.round((today - lastVisit) / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    // The user visited less than a day ago.
    alert("Back so soon! Awesome!");
  } else {
    // The user visited more than a day ago.
    alert(`You last visited ${diffInDays} days ago.`);
  }
}

// Store the date of the current visit.
localStorage.setItem('lastVisit', today.toString());

