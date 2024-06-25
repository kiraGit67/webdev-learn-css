/* constants for .demo and skewInputs */
const demoBox = document.querySelector(".demo");
const sliders = [...document.querySelectorAll("input[type='range']")];
const inverse = document.querySelector("input[type='checkbox']");

/* update function for each slider */
function update() {
  let skewing = sliders
    .map((slider) => {
      if (inverse.checked) {
        return `skew${slider.getAttribute(
          "data-transform"
        )}(${-slider.value}deg)`;
      } else {
        return `skew${slider.getAttribute("data-transform")}(${
          slider.value
        }deg)`;
      }
    })
    .join(" ");

  demoBox.setAttribute("style", `transform: ${skewing}`);
}

/* eventListener for sliders */
sliders.forEach((slider) =>
  slider.addEventListener("input", () => {
    update();
  })
);
