/* adds constants for #toggle-element and .demo > img */
const toggleElement = document.querySelector("input[type='checkbox']");
const demoImg = document.querySelector(".demo>img");
const rangeElement = document.querySelector("input[type='range']");

toggleElement.addEventListener("change", ({ target }) => {
  demoImg.style.mixBlendMode = target.checked ? "multiply" : "normal";
});
