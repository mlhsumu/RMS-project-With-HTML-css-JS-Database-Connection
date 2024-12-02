// Select all elements with the class "trends"
let trends = document.querySelectorAll(".trends");

// Loop through each trend element
trends.forEach((curElem, index) => {
    // Set the horizontal position of the current element
    // Each element is positioned horizontally next to each other
    curElem.style.left = `${index * 100}%`;
});

// Function to move the trends horizontally
function moveTrends() {
    // Loop through each trend element
    trends.forEach((curImg) => {
        // Translate each element horizontally based on the count
        curImg.style.transform = `translateX(-${count * 100}%)`;
    });
}

// Initialize a variable to keep track of the current position of the trends
let count = 0;

// Set an interval to automatically change the trends position every 4 seconds
setInterval(() => {
    // Increment the count variable
    count++;
    // Reset the count if it reaches the total number of trends
    if (count == trends.length) {
        count = 0;
    }
    // Call the function to move the trends
    moveTrends();
}, 4000);