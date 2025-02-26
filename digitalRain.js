// Set up the canvas element
const canvas = document.getElementById("digitalRain");
const ctx = canvas.getContext("2d");

// Set canvas size to cover the whole screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Set up the rain properties
const columns = canvas.width / 20; // Number of columns
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%+-/~{[|`]}'; // Characters to display
const fontSize = 20; // Size of each "rain" character
const rainDrops = [];

// Create an array of "rain drops" for each column
for (let i = 0; i < columns; i++) {
    rainDrops[i] = 1; // Start at the top of the screen
}

// Function to draw the rain
function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Set background color (slightly transparent)
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    ctx.fillStyle = 'green'; // Set rain color (green for digital rain)
    ctx.font = `${fontSize}px monospace`; // Set font and size

    // Loop through each column and draw a character
    for (let i = 0; i < rainDrops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        // Reset the rain drop to the top of the screen when it reaches the bottom
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }

        // Move the rain drop down
        rainDrops[i]++;
    }
}

// Animate the digital rain
setInterval(draw, 35);

// Infinite Scroll functionality
const contentContainer = document.getElementById("scrollable-content");
let contentPage = 1;  // Track the page number for content loading

function loadMoreContent() {
    // Create a new section of content
    const newContent = document.createElement('div');
    newContent.classList.add('content-section');
    newContent.innerHTML = `
        <h2>Section ${contentPage}</h2>
        <p>This is dynamically loaded content for section ${contentPage}. Keep scrolling for more!</p>
    `;
    contentContainer.appendChild(newContent);
    contentPage++;
}

// Detect when the user has scrolled to the bottom
function checkScrollPosition() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreContent();  // Load more content when scrolled to the bottom
    }
}

// Event listener for scrolling
window.addEventListener('scroll', checkScrollPosition);

// Initial content load
loadMoreContent();
