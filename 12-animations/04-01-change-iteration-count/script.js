/* constants for .grower and button */
const growerElement = document.querySelector(".grower");
const restartButton = document.querySelector("button");

/* constants for #change-iteration-count and :root element */
const changeIterationCount = document.querySelector("#change-iteration-count");
const rootElement = document.documentElement;

/* eventListener for button to restart .grower.animate animation */
restartButton.addEventListener("click", () => {
  growerElement.classList.remove("animate");
  void growerElement.offsetWidth;
  growerElement.classList.add("animate");
});
