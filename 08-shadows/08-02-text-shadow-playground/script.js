/* Variables for inputs */
const offsetX = document.querySelector("#offsetX");
const offsetY = document.querySelector("#offsetY");
const blur = document.querySelector("#blur");
const color = document.querySelector("#color");
const invert = document.querySelector("#invert");

/* Variables for #result .text-shadow-element */
const resultElement = document.querySelector("#result");
const textShadowElement = document.querySelector(".text-shadow-element");

/* adds function to change the inputs' values and text shadow stylings */
const rendering = () => {
  const minus = invert.checked ? "-" : "";
  const result = `text-shadow: ${minus}${offsetX.value}px ${minus}${offsetY.value}px ${blur.value}px ${color.value}`;
  resultElement.innerHTML = `<code>${result}</code>`;
  textShadowElement.setAttribute("style", result);
};

/* Variable for all inputs */
//const inputElements = document.querySelectorAll("input");
const inputElements = [offsetX, offsetY, blur, color];

/* EventListener for inputElements */
inputElements.forEach((inputElement) =>
  inputElement.addEventListener("input", rendering)
);

/* eventListener for invert */
invert.addEventListener("change", rendering);

rendering();
