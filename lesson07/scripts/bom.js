// Define getChapterList function to get the localStorage item
function getChapterList() {
  const storedChapters = localStorage.getItem('chapters');
  return storedChapters ? JSON.parse(storedChapters) : [];
}

// Define setChapterList function to set the localStorage item
function setChapterList(chapters) {
  localStorage.setItem('chapters', JSON.stringify(chapters));
}

// Define deleteChapter function to remove a chapter from the array and localStorage
function deleteChapter(chapter) {
  // Remove the ❌ character from the end of the chapter string
  chapter = chapter.slice(0, chapter.length - 1);

  // Redefine chaptersArray to exclude the chapter to be removed
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // Update localStorage
  setChapterList(chaptersArray);
}

// Define displayList function to display chapters on the list
function displayList(item) {
  const liElement = document.createElement("li");
  const deleteButton = document.createElement("button");
  liElement.innerHTML = item;
  deleteButton.textContent = "❌";
  liElement.appendChild(deleteButton);
  list.appendChild(liElement);
  deleteButton.addEventListener("click", () => {
    list.removeChild(liElement);
    deleteChapter(item); // Call deleteChapter to remove the chapter
    input.focus();
  });
}

// Define chaptersArray and initialize it with stored chapters or an empty array
let chaptersArray = getChapterList() || [];

// Get DOM elements
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

// Display stored chapters on page load
chaptersArray.forEach(chapter => displayList(chapter));

// Add event listener to the button
button.addEventListener("click", (e) => {
  if (input.value.length === 0) {
    alert("Please enter a chapter");
    return;
  }

  const chapter = input.value;
  displayList(chapter);
  chaptersArray.push(chapter);
  setChapterList(chaptersArray);
  input.value = "";
  input.focus();
});
