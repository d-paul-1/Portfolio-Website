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

// Resize the canvas to match the window size and initialize columns and drops
function resizeCanvas() {
  canvas.width = window.innerWidth; // Canvas width matches window width
  canvas.height = window.innerHeight; // Canvas height matches window height
  columns = Math.floor(canvas.width / fontSize); // Calculate the number of columns
  drops = new Array(columns).fill(1); // Initialize drops to the top of the canvas
}

// Draw the "Matrix Rain" animation
function drawMatrixRain() {
  // Create a fading background effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set the style for the matrix characters
  ctx.fillStyle = '#00FF00'; // Bright green
  ctx.font = `${fontSize}px monospace`; // Monospace font for matrix characters

  // Loop through each column to draw characters
  for (let i = 0; i < drops.length; i++) {
    const text = matrixLetters[Math.floor(Math.random() * matrixLetters.length)]; // Random character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize); // Draw character at the column position

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
