/* constants for .expander and select */
const expander = document.querySelector(".expander");
const timingChoice = document.querySelector("#timing-choice");

timingChoice.addEventListener("change", ({ target }) => {
  expander.style.animationTimingFunction = target.value;
});
