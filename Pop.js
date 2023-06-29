// get all reveal elements
const fadeOutElements = document.querySelectorAll('.reveal');

function fadeOut() {
  fadeOutElements.forEach((el) => {
    // Get the element's top and bottom position relative to the viewport
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    // If the element is in the viewport, fade it in
    if (elementTop < window.innerHeight && elementBottom > 0) {
      const opacity = 1 - (elementTop / el.offsetHeight);
      el.style.opacity = opacity;
    } else {
      // If the element is outside the viewport, reset its opacity
      el.style.opacity = 1;
    }
  });
}

// Call the fadeOut function on scroll
window.addEventListener('scroll', fadeOut);
const fadeInOut = document.querySelectorAll('.reveal');

function checkFadeInOut() {
  fadeInOut.forEach((paragraph) => {
    const paragraphTop = paragraph.getBoundingClientRect().top;
    const windowBottom = window.innerHeight;
    if (paragraphTop < windowBottom) {
      paragraph.style.opacity = '1';
    } else {
      paragraph.style.opacity = '0';
    }
  });
}

window.addEventListener('scroll', checkFadeInOut);

// Retrieve form fields from localStorage and populate the form
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("name").value = localStorage.getItem("name");
  document.getElementById("phone").value = localStorage.getItem("phone");
  document.getElementById("email").value = localStorage.getItem("email");
  document.getElementById("subject").value = localStorage.getItem("subject");
  document.getElementById("message").value = localStorage.getItem("message");
});

// Store form field values in localStorage when the form is submitted
document.querySelector("form").addEventListener("submit", function() {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("phone", document.getElementById("phone").value);
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("subject", document.getElementById("subject").value);
  localStorage.setItem("message", document.getElementById("message").value);
});
