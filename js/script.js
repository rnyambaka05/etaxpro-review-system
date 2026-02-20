$(document).foundation();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Basic form confirmation
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Entry submitted! Winners will be contacted soon.");
});