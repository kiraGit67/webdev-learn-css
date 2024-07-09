/* adds constants for #toggle-element and .demo > img */
const toggleElement = document.querySelector("input[type='checkbox']");
const selectBlendMode = document.querySelector("select");
const demoImg = document.querySelector(".demo>img");
const rangeElement = document.querySelector("input[type='range']");

toggleElement.addEventListener("change", ({ target }) => {
  demoImg.style.mixBlendMode = target.checked
    ? selectBlendMode.value
    : "normal";
});

selectBlendMode.addEventListener("input", ({ target }) => {
  if (toggleElement.checked === true) {
    demoImg.style.mixBlendMode = target.value;
  }
});

rangeElement.addEventListener("input", ({ target }) => {
  demoImg.style.filter = `brightness(${target.value}%)`;
});
