/* adds constants for toggle element and lists */
const toggleElement = document.querySelector("#toggle-element");
const lists = [...document.querySelectorAll("ul")];

/* eventListener for toggleElement to toggle .inside class */
toggleElement.addEventListener("change", () => {
  lists.forEach((list) => list.classList.toggle("inside"));
});
