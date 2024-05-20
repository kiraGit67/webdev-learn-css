"use strict";

const toggleElement = document.querySelector("#toggle-element");
const selectElement = document.querySelector("#select-writing-mode");

const sample = document.querySelector(".sample");

toggleElement.addEventListener("change", (event) => {
  sample.style.writingMode = event.target.checked ? "vertical-rl" : "initial";
});

selectElement.addEventListener("change", (event) => {
  sample.style.writingMode = event.target.value;
});
