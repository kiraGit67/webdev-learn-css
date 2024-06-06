/* Variables for inputs */
const offsetX = document.querySelector("#offsetX");
const offsetY = document.querySelector("#offsetY");
const blur = document.querySelector("#blur");
const color = document.querySelector("#color");

/* Variables for #result .text-shadow-element */
const resultElement = document.querySelector("#result");
const textShadowElement = document.querySelector(".text-shadow-element");

/* adds function to change the inputs' values and text shadow stylings */
const rendering = () => {
  const result = `text-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${color.value}`;
  resultElement.innerHTML = `<code>${result}</code>`;
  textShadowElement.setAttribute("style", result);
};

/* Variable for all inputs */
const inputElements = document.querySelectorAll("input");

/* EventListener for inputElements */
inputElements.forEach((inputElement) =>
  inputElement.addEventListener("input", rendering)
);

rendering();
