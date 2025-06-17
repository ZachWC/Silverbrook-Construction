// Get elements
const hamburger = document.getElementById("hamburger");
const menuLinks = document.getElementById("menuLinks");

// Toggle the "active" class when the hamburger icon is clicked
hamburger.addEventListener("click", function() {
    menuLinks.classList.toggle("active");
});
  
  