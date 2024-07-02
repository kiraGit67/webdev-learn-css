/* constants for .grower and button */
const growerElement = document.querySelector(".grower");
const restartButton = document.querySelector("button");

/* eventListener for button to restart .grower.animate animation */
restartButton.addEventListener("click", () => {
  growerElement.classList.remove("animate");
  void growerElement.offsetWidth;
  growerElement.classList.add("animate");
});
