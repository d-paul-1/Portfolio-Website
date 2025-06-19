document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const loadingBar = document.getElementById("loading-bar");
    const loadingText = document.getElementById("loading-text");
    const typingContainer = document.getElementById("typing-container");

    // Full typing text
    const typingText = "I'm Dev Paul, Welcome to my Website.";
    let currentText = ""; // To track the typed text
    let typingIndex = 0; // Current typing position
    let progress = 0;

    // Function to type text and update progress
    const typeAndProgress = () => {
        if (typingIndex < typingText.length) {
            // Add next character to the text
            currentText += typingText[typingIndex];
            typingContainer.textContent = currentText;
            typingIndex++;

            // Update progress to match typing percentage
            progress = Math.floor((typingIndex / typingText.length) * 100);
            loadingText.textContent = progress; // Update progress text
            loadingBar.style.width = `${progress}%`; // Update progress bar width

            // Continue typing
            setTimeout(typeAndProgress, 100); // Typing speed (adjust as needed)
        } else {
            // Typing complete, fade out and start matrix
            loadingBar.classList.add("fade-out");
            loadingText.classList.add("fade-out");
            loadingScreen.classList.add("fade-out");

            setTimeout(() => {
                loadingScreen.style.display = "none";
                startMatrixEffect(); // Call the matrix effect function
            }, 1000);
        }
    };

    // Start typing and progress update
    typeAndProgress();
});
