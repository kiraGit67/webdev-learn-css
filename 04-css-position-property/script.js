const selectPosition = document.querySelector("#select-position");
const boxElement = document.querySelector(".box");
const rootElement = document.documentElement;

selectPosition.addEventListener("change", () => {
  boxElement.style.position = selectPosition.value;
});
