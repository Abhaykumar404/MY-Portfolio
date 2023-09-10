var typed = new Typed(".text", {
   strings: ["Frontend Developer", "Web Developer", "C++ Programmer"], // An array of strings
   typeSpeed:20,
   backSpeed:20,
   backDelay:1000,
   loop: true
});

// Get references to the button and the navigation menu
const toggleButton = document.getElementById("toggleButton");
const navMenu = document.getElementById("navMenu");

// Function to hide the navigation menu
function hideNavMenu() {
   navMenu.classList.remove("active");
}

// Add a click event listener to the button
toggleButton.addEventListener("click", function (event) {
   // Toggle the "active" class on the navigation menu to show/hide it
   navMenu.classList.toggle("active");
   event.stopPropagation(); // Prevent the click event from propagating to document
});

// Add a click event listener to the document to hide the menu when clicking outside
document.addEventListener("click", function (event) {
   const target = event.target;

   // Check if the click target is not the navigation menu or the toggle button
   if (!navMenu.contains(target) && target !== toggleButton) {
      hideNavMenu();
   }
});

// Add click event listeners to each link to hide the menu when a link is clicked
const links = navMenu.querySelectorAll("div a");
links.forEach(function (link) {
   link.addEventListener("click", hideNavMenu);
});