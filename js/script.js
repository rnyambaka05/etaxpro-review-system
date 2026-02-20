// Google review Place ID link
const googleReviewLink = "https://search.google.com/local/writereview?placeid=ChIJUbsHysOjJoYRIxypZb6q0X8";

// Elements
const stars = document.querySelectorAll('#starContainer span');
const form = document.getElementById('raffleForm');
const confirmation = document.getElementById('confirmation');
const userName = document.getElementById('userName');

let formSubmitted = false;
let selectedRating = 0;

// Star hover effect
stars.forEach(star => {
  star.addEventListener('mouseover', () => highlightStars(star.dataset.value, "hover"));
  star.addEventListener('mouseout', () => highlightStars(selectedRating, "selected"));
});

// Star click
stars.forEach(star => {
  star.addEventListener('click', () => {
    if (!formSubmitted) {
      alert("Please submit your info first before leaving a review.");
      return;
    }
    selectedRating = star.dataset.value;
    highlightStars(selectedRating, "selected");

    // Open Google review page in new tab
    window.open(googleReviewLink, "_blank");
  });
});

// Highlight stars function
function highlightStars(rating, className) {
  stars.forEach(star => {
    star.classList.remove('hover', 'selected');
    if (star.dataset.value <= rating) {
      star.classList.add(className);
    }
  });
}

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || phoneInput.value.trim() === "") {
    alert("Please fill out all fields.");
    return;
  }

  formSubmitted = true;
  userName.textContent = `Thanks ${nameInput.value}!`;
  form.classList.add('hidden');
  confirmation.classList.remove('hidden');
});