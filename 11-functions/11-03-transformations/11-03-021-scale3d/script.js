/* constants for .boxes>* and input:range */
const scaleInput = document.querySelector("input[type='range']");
const boxes = document.querySelectorAll("[data-transform]");

/* eventListener for scaleInput to scale the boxes */
scaleInput.addEventListener("input", () => {
  boxes.forEach((box) => {
    box.setAttribute(
      "style",
      box.getAttribute("data-transform") === "3d"
        ? `transform: scale${box.getAttribute("data-transform")}(${
            scaleInput.value
          }, ${scaleInput.value}, ${scaleInput.value})`
        : `transform: scale${box.getAttribute("data-transform")}(${
            scaleInput.value
          })`
    );
  });
});
