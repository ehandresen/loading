document.getElementById("continue-btn").addEventListener("click", function () {
  document.getElementById("feedback-modal").style.display = "block"; // Show feedback modal
});

document
  .querySelector(".modal-content button")
  .addEventListener("click", function () {
    document.getElementById("feedback-modal").style.display = "none"; // Hide feedback modal after sending feedback
  });

document.querySelectorAll(".emoji-ratings span").forEach(function (emoji) {
  emoji.addEventListener("click", function () {
    alert("You rated: " + emoji.textContent); // Alert showing which emoji was clicked
  });
});
