// Simple form submission alert
document.getElementById("giveawayForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload
  alert("Thank you! Your entry has been received.");
  this.reset(); // clear form
});
