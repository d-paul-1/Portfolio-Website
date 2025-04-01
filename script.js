// Get canvas and context
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*~+=?".split("");
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Draw Matrix Rain
function drawMatrixRain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Faint trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00"; // Green color
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Reset to top randomly
        }
        drops[i]++;
    }
}

// Resize the canvas when window size changes
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Run Matrix Effect
setInterval(drawMatrixRain, 40);
window.addEventListener("resize", resizeCanvas);
