const toggleElement = document.querySelector("#toggle-element");
const myElement = document.querySelector(".my-element");
const childElement = document.querySelector(".my-element>.child");

toggleElement.addEventListener("change", ({ target }) => {
  myElement.style.position = target.checked ? "relative" : "static";
  myElement.style.zIndex = target.checked ? 0 : "auto";
  childElement.innerHTML = target.checked
    ? "I am on top of my parent."
    : "I am behind my parent.";
});
