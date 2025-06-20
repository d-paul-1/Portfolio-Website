document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");
  const typingContainer = document.getElementById("typing-container");

  // Full text for typing animation
  const typingText = "I'm Dev Paul.\nWelcome to my Website.";
  let typingIndex = 0; // Tracks the current character
  const totalCharacters = typingText.length;
  const isMobile = window.innerWidth <= 768;
  const typingSpeed = isMobile ? 150 : 100;

  function typeAndUpdateProgress() {
    if (typingIndex < totalCharacters) {
      const currentChar = typingText[typingIndex];
      if (currentChar === "\n") {
        typingContainer.innerHTML += "<br>";
      } else {
        typingContainer.innerHTML += `<span>${currentChar}</span>`;
      }
      typingIndex++;

      const progress = Math.floor((typingIndex / totalCharacters) * 100);
      loadingText.textContent = progress; // Update progress text
      loadingBar.style.width = `${progress}%`; // Update progress bar width

      setTimeout(typeAndUpdateProgress, typingSpeed);
    } else {
      // Typing and progress complete
      clearInterval(typeAndUpdateProgress);

      // Smoothly fade out loading elements
      loadingBar.classList.add("fade-out");
      loadingText.classList.add("fade-out");
      loadingScreen.classList.add("fade-out");

      // Start the matrix effect after a short delay
      setTimeout(() => {
        loadingScreen.style.display = "none";
        startMatrixEffect();
      }, 1000);
    }
  }

  typeAndUpdateProgress(); // Start typing and progress updates
});
