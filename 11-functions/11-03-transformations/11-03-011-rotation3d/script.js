/* constants for input:range and .boxes > * */
const rangeInput = document.querySelector("input[type='range']");
const boxes = document.querySelectorAll("[data-transform]");

/* EventListener for rangeInput to rotate the boxes */
rangeInput.addEventListener("input", () => {
  boxes.forEach((box) => {
    box.setAttribute(
      "style",
      `transform: rotate${box.getAttribute("data-transform")}(${
        box.getAttribute("data-transform") === "3d" ? "1, 1, 1, " : ""
      }${rangeInput.value}deg)`
    );
  });
});
