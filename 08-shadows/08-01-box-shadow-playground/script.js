/* Variables for inputs */
const offsetX = document.querySelector("#offsetX");
const offsetY = document.querySelector("#offsetY");
const blur = document.querySelector("#blur");
const spread = document.querySelector("#spread");
const color = document.querySelector("#color");
const inset = document.querySelector("#inset");

/* Variables for #result and .box-shadow-element */
const resultElement = document.querySelector("#result");
const boxShadowElement = document.querySelector(".box-shadow-element");

/* render function to create the result */
const rendering = () => {
  const result = `box-shadow: ${inset.checked ? "inset " : ""}${
    offsetX.value
  }px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value}`;
  resultElement.innerHTML = `<code>${result}</code>`;
  boxShadowElement.setAttribute("style", result);
};

/* addEventListener to offsetX, offsetY, blur, spread and color */
[offsetX, offsetY, blur, spread, color].forEach((input) => {
  input.addEventListener("input", rendering);
});

/* addEventListener to inset */
inset.addEventListener("change", rendering);
