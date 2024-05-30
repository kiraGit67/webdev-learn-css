const sizeSwitcher = document.querySelector("#size-switcher");
const myElement = document.querySelector(".my-element");

sizeSwitcher.addEventListener("change", () => {
  myElement.setAttribute(
    "data-size",
    sizeSwitcher.checked ? "content-box" : "border-box"
  );
});
