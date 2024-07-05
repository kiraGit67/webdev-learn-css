/* constants for .container.reduced-motion and checkbox */
const animationCheckbox = document.querySelector("input[type='checkbox']");
const containerElement = document.querySelector(".container");

/* eventListener to checkbox to reduce-motion of containerElement */
animationCheckbox.addEventListener("change", () => {
  if (animationCheckbox.checked) {
    containerElement.classList.add("reduced-motion");
  } else {
    containerElement.classList.remove("reduced-motion");
  }
});
