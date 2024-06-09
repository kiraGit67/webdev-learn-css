const toggleElement = document.querySelector("#toggle-element");
const demoBoxes = document.querySelectorAll(".demo-box");

toggleElement.addEventListener("change", ({ target }) => {
  demoBoxes.forEach(
    (demoBox) =>
      (demoBox.style.position = target.checked ? "relative" : "static")
  );
});
