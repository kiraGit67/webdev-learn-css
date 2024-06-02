"use strict";

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const all = document.getElementById("all");
const notAll = [...checkboxes].filter(
  (item) => item.getAttribute("id") !== "all"
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", ({ target }) => {
    if (target.getAttribute("id") === "all") {
      checkboxes.forEach((checkbox) => (checkbox.checked = target.checked));
    } else if (
      notAll.filter((checkbox) => checkbox.checked).length !== notAll.length
    ) {
      all.indeterminate = true;
    }
  });
});

const button = document.querySelector("button");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");

button.disabled = true;

const inputs = document.querySelectorAll("input:not(#all, #done, #open)");
console.log(inputs);

console.log(button.disabled);
console.log(emailInput.validity.valid);
console.log(ageInput.validity.rangeUnderflow);
console.log(ageInput.validity.rangeOverflow);

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (
      emailInput.validity.valid &&
      !ageInput.validity.rangeUnderflow &&
      !ageInput.validity.rangeOverflow
    ) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});
