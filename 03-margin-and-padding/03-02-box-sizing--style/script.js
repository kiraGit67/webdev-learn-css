const sizeSwitcher = document.querySelector("#size-switcher");
const myElement = document.querySelector(".my-element");

sizeSwitcher.addEventListener("change", () => {
  myElement.style.boxSizing = sizeSwitcher.checked
    ? "content-box"
    : "border-box";
});
