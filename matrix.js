// ===========================
// Matrix Rain Animation Setup
// ===========================

const canvas = document.getElementById('matrix'); // Canvas element for animation
const ctx = canvas.getContext('2d'); // 2D rendering context for the canvas
let fontSize = 24; // Font size for matrix characters
let columns, drops; // Columns for characters and their positions

// Characters used in the matrix rain animation
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*~+=?';
const matrixLetters = letters.split(''); // Convert the string into an array of characters

// Colors for the matrix rain
const colors = ['#00FF00', '#9400D3']; // Bright green and neon purple

// Resize the canvas to match the window size and initialize columns and drops
function resizeCanvas() {
  canvas.width = window.innerWidth; // Canvas width matches window width
  canvas.height = window.innerHeight; // Canvas height matches window height
  columns = Math.floor(canvas.width / fontSize) + 1; // Calculate the number of columns
  drops = new Array(columns).fill(1); // Initialize drops to the top of the canvas
}

// Draw the "Matrix Rain" animation
function drawMatrixRain() {
  // Create a fading background effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Slightly transparent black for trailing effect
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the font style for matrix characters
  ctx.font = `${fontSize}px monospace`; // Monospace font for matrix characters

  // Loop through each column to draw characters
  for (let i = 0; i < drops.length; i++) {
    // Randomly select a character and color
    const text = matrixLetters[Math.floor(Math.random() * matrixLetters.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = color; // Set the fill style to the chosen color

    // Debugging: Check the color being applied
    console.log(`Column ${i}: ${color}`);

    // Draw the character at the column position
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset the drop to the top with some randomness if it goes off-screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Move the drop one position down
    drops[i]++;
  }
}

// Initialize the canvas and start the matrix rain animation
resizeCanvas();
setInterval(drawMatrixRain, 40); // Draw animation every 40ms

// Adjust canvas size on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout); // Avoid frequent resizing
  resizeTimeout = setTimeout(resizeCanvas, 100); // Resize after 100ms
});
