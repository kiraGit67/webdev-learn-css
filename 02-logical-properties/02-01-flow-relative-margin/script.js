"use strict";

const toggleElement = document.querySelector("#toggle-element");
const selectElement = document.querySelector("#select-writing-mode");

const sample = document.querySelector(".sample");
const sampleMarginBlockStart = document.querySelector(
  "#sample--margin-block-start > p"
);

toggleElement.addEventListener("change", (event) => {
  sample.style.writingMode = event.target.checked ? "vertical-rl" : "initial";
});

selectElement.addEventListener("change", (event) => {
  sample.style.writingMode = event.target.value;

  if (event.target.value === "vertical-lr") {
    sampleMarginBlockStart.style.setProperty("margin-block-end", "1rem");
    sampleMarginBlockStart.style.setProperty("margin-block-start", "0");
  } else {
    sampleMarginBlockStart.style.setProperty("margin-block-start", "1rem");
    sampleMarginBlockStart.style.setProperty("margin-block-end", "0");
  }
});
