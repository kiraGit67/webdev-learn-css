/** Set constants for select and .border-element */
const borderImageRepeat = document.querySelector("#border-image-repeat");
const borderElement = document.querySelector(".border-element");

borderImageRepeat.addEventListener("change", () => {
  borderElement.style.borderImageRepeat = `${borderImageRepeat.value} ${borderImageRepeat.value}`;
});
