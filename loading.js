document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const loadingBar = document.getElementById("loading-bar");
    const loadingText = document.getElementById("loading-text");
    const typingContainer = document.getElementById("typing-container");
  
    // Set the text for the typing animation
    const typingText = "I'm Dev Paul, Welcome to my Website.";
    typingContainer.textContent = typingText;
  
    let progress = 0;
    const interval = setInterval(() => {
      progress = Math.min(progress + 1, 100);
      loadingText.textContent = progress; // Update text content
      loadingBar.style.width = `${progress}%`; // Dynamically update the width
  
      if (progress === 100) {
        clearInterval(interval);
  
        // Smoothly fade out loading elements
        loadingBar.classList.add("fade-out");
        loadingText.classList.add("fade-out");
        loadingScreen.classList.add("fade-out");
  
        // Start the matrix effect after the transition
        setTimeout(() => {
          loadingScreen.style.display = "none";
          startMatrixEffect(); // Call the matrix effect function
        }, 1000);
      }
    }, 30); // Update progress every 20ms
  });
  
 
  
  