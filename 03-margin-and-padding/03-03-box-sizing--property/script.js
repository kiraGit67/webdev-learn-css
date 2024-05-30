const sizeSwitcher = document.querySelector("#size-switcher");
const myElement = document.querySelector(".my-element");
const root = document.documentElement;

sizeSwitcher.addEventListener("change", () => {
  root.style.setProperty(
    "--data-sizing",
    sizeSwitcher.checked ? "content-box" : "border-box"
  );
});
