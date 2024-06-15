/* constants for input#margin, .calc-element */
const marginInput = document.querySelector("#margin");
const calcElement = document.querySelector(".calc-element");
const unitSelect = document.querySelector("#unit");

/* Function to change the inline margin of calcElement */
marginInput.addEventListener("input", () => {
  calcElement.style.width = `calc(100% - ${marginInput.value}${unitSelect.value})`;
  calcElement.innerHTML = `I have a width of <code>calc(100% - ${marginInput.value}${unitSelect.value})</code>. I will fill all of my parent space except for <code>${marginInput.value}${unitSelect.value}</code>.`;
});

/* Function to change the unit for inline margin of calcElement */
unitSelect.addEventListener("input", () => {
  calcElement.style.width = `calc(100% - ${marginInput.value}${unitSelect.value})`;
  calcElement.innerHTML = `I have a width of <code>calc(100% - ${marginInput.value}${unitSelect.value})</code>. I will fill all of my parent space except for <code>${marginInput.value}${unitSelect.value}</code>.`;
});
