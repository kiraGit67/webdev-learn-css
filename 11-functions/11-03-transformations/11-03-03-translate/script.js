/* constants for .demo and input:range */
const demoBox = document.querySelector(".demo");
const translators = [...document.querySelectorAll("input[type='range']")];

console.log(translators);

/* eventListener for translators to translate the demoBox */
function update() {
  let transform = translators
    .map((translator) => {
      return `translate${translator.getAttribute("data-transform")}(${
        translator.value
      }px)`;
    })
    .join(" ");

  demoBox.setAttribute("style", `transform: ${transform}`);
}
