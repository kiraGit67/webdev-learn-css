const toggleShadowElement = document.querySelector("#toggle-shadow");
const figureImg = document.querySelector("figure img");

toggleShadowElement.addEventListener("change", () => {
  figureImg.setAttribute(
    "style",
    toggleShadowElement.checked
      ? "filter: drop-shadow(0px 0px 10px rgba(0 0 0 / 30%))"
      : "box-shadow : 0px 0px 10px rgba(0 0 0 / 30%)"
  );
});
