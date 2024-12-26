// Headlines for the Home Section
const headlines = [
  "Welcome to the GTA 5 Treasure Hunt!",
  "Solve clues, win amazing prizes!",
  "Are you ready to find the GTA 5 treasure?",
  "Your adventure begins now!",
];

// Background images for the Home Section
const backgrounds = [
  "gta5-bg1.jpg",  // Replace with actual GTA 5 image paths
  "gta5-bg2.jpg",  // Replace with actual GTA 5 image paths
  "gta5-bg3.jpg",
  "gta5-bg4.jpg",  // Replace with actual GTA 5 image paths
];

// Function to change headline and background
let index = 0;
const headlineElement = document.getElementById("headline");
const bgImageElement = document.querySelector(".bg-image");

function changeContent() {
  // Change the headline text
  headlineElement.textContent = headlines[index];
  
  // Change the background image
  bgImageElement.style.backgroundImage = `url('${backgrounds[index]}')`;

  // Move to the next headline and background
  index = (index + 1) % headlines.length; // Loop back to the first headline and image
}

// Change headline and background every 5 seconds (5000 ms)
setInterval(changeContent, 5000);

// Initial call to set the first headline and background
changeContent();

// Detect click events to toggle the visibility of the navigation bar
const nav = document.querySelector('nav');
const body = document.querySelector('body');

// When the body is clicked, toggle the nav visibility
body.addEventListener('click', function() {
  nav.classList.toggle('show');  // Toggle the 'show' class
});

// Prevent click on nav from hiding it (so the user can interact with the navbar)
nav.addEventListener('click', function(event) {
  event.stopPropagation();  // Prevent the event from propagating to the body
});
