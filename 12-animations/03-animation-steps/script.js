/* constants for toggle and demo element */
const stepDemo = document.querySelector(".demo");
const stepToggler = document.querySelector("#toggle-element");

/* eventListener for stepToggler to turn on step timing function */
stepToggler.addEventListener("change", ({ target }) => {
  stepDemo.style.animationTimingFunction = target.checked
    ? "steps(10, end)"
    : "linear";
});
