const googleReviewLink = "https://search.google.com/local/writereview?placeid=YOURPLACEID";

const stars = document.querySelectorAll('#starContainer span');
const form = document.getElementById('raffleForm');
let formSubmitted = false;

form.addEventListener('submit', function(e){
e.preventDefault();
formSubmitted = true;
alert("You're entered! Scroll down and leave your review.");
});

stars.forEach(star => {
star.addEventListener('click', () => {
if(!formSubmitted){
alert("Please submit your entry first.");
return;
}
window.open(googleReviewLink, "_blank");
});
});