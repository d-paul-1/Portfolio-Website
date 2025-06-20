document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");
  const typingContainer = document.getElementById("typing-container");

  // Full text for typing animation
  const typingText = "I'm Dev Paul, Welcome to my Website.";
  let typingIndex = 0;
  const totalCharacters = typingText.length;

  // Device-specific adjustments
  const isMobile = window.innerWidth <= 768;
  const typingSpeed = isMobile ? 150 : 100;
  const delayAfterTyping = isMobile ? 1500 : 1000; // Longer delay for mobile

  function typeAndUpdateProgress() {
    if (typingIndex < totalCharacters) {
      typingContainer.textContent = typingText.substring(0, typingIndex + 1);
      typingIndex++;

      const progress = Math.floor((typingIndex / totalCharacters) * 100);
      loadingText.textContent = progress;
      loadingBar.style.width = `${progress}%`;

      setTimeout(typeAndUpdateProgress, typingSpeed);
    } else {
      clearInterval(typeAndUpdateProgress);

      loadingBar.classList.add("fade-out");
      loadingText.classList.add("fade-out");
      loadingScreen.classList.add("fade-out");

      setTimeout(() => {
        loadingScreen.style.display = "none";
        startMatrixEffect();
      }, delayAfterTyping);
    }
  }

  typeAndUpdateProgress();
});
