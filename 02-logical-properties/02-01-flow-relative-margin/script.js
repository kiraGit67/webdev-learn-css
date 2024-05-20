"use strict";

const toggleElement = document.querySelector("#toggle-element");
const sample = document.querySelector(".sample");

toggleElement.addEventListener("change", (event) => {
  sample.style.writingMode = event.target.checked ? "vertical-rl" : "initial";
});
