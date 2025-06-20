document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default jump behavior
  
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust for header height
            behavior: "smooth"
          });
        }
      });
    });
  });
  