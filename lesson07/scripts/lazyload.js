document.addEventListener("DOMContentLoaded", function () {
    // Get the last modified timestamp
    var lastModifiedTimestamp = new Date(document.lastModified);
    
    // Format the date as desired
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var formattedDate = lastModifiedTimestamp.toLocaleDateString('en-US', options);
    
    // Update the element with the formatted date
    document.getElementById("lastModified").innerHTML = "Last Modified: " + formattedDate;
});
