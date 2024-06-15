/* constants for input#margin, .calc-element */
const marginInput = document.querySelector("#margin");
const calcElement = document.querySelector(".calc-element");

/* Function to change the inline margin of calcElement */
marginInput.addEventListener("input", () => {
  calcElement.style.width = `calc(100% - ${marginInput.value}rem)`;
  calcElement.innerHTML = `I have a width of <code>calc(100% - ${marginInput.value}rem)</code>. I will fill all of my parent space except for <code>${marginInput.value}rem</code>.`;
});
