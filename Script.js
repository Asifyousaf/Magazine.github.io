// Script.js
function scrollToSection() {
    // Get the target element
    var targetElement = document.getElementById("scroll-section");

    // Scroll to the target element without smooth behavior
    targetElement.scrollIntoView();
}

//Adding  this script tag after the splash screen content 
  // Hide the splash screen after 3 seconds 
  setTimeout(function() {
    document.getElementById('Splash').style.display = 'none';
  }, 3000);
// 3 sec timer

