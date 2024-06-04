/** Set constants for select and .border-element */
const borderImageRepeat = document.querySelector("#border-image-repeat");
const borderElement = document.querySelector(".border-element");
const borderImageElement = document.querySelector(".border-image-element");
const rootElement = document.documentElement;

borderImageRepeat.addEventListener("change", () => {
  borderElement.style.borderImageRepeat = `${borderImageRepeat.value} ${borderImageRepeat.value}`;
  borderImageElement.style.borderImageRepeat = borderImageRepeat.value;
});
