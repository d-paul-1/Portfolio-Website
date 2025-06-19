document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const loadingBar = document.getElementById("loading-bar");
  const loadingText = document.getElementById("loading-text");
  const typingContainer = document.getElementById("typing-container");

  // Full text for typing animation
  const typingText = "I'm Dev Paul, Welcome to my Website.";
  let typingIndex = 0; // To track the current character being typed
  const totalCharacters = typingText.length; // Total characters in the text

  // Adjust typing speed based on device
  const isMobile = window.innerWidth <= 768; // Detect mobile devices
  const typingSpeed = isMobile ? 150 : 100; // Slower typing speed for mobile

  // Function to handle typing and progress
  function typeAndUpdateProgress() {
      if (typingIndex < totalCharacters) {
          // Update the typed text
          typingContainer.textContent = typingText.substring(0, typingIndex + 1);
          typingIndex++;

          // Calculate progress percentage based on typing progress
          const progress = Math.floor((typingIndex / totalCharacters) * 100);
          loadingText.textContent = progress; // Update progress text
          loadingBar.style.width = `${progress}%`; // Update progress bar width

          // Continue typing
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
              startMatrixEffect(); // Call the matrix effect function
          }, 1000);
      }
  }

  typeAndUpdateProgress(); // Start the typing and progress updates
});
