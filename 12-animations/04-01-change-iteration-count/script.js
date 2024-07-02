/* constants for .grower and button */
const growerElement = document.querySelector(".grower");
const restartButton = document.querySelector("button");

/* constants for #change-iteration-count and :root element */
const changeIterationCount = document.querySelector("#change-iteration-count");
const rootElement = document.documentElement;
const callout = document.querySelector("figure.callout");

/* eventListener for changeIterationCount to change animation-iteration-count */
changeIterationCount.addEventListener("input", ({ target }) => {
  let calloutText = `<p>Press the <code>RESTART button</code> to restart the Animation after running within
<code>animation-iteration-count: ${target.value}</code>.
</p>`;
  callout.innerHTML = calloutText;

  rootElement.style.setProperty("--iteration-count", target.value);
});

/* eventListener for button to restart .grower.animate animation */
restartButton.addEventListener("click", () => {
  growerElement.classList.remove("animate");
  void growerElement.offsetWidth;
  growerElement.classList.add("animate");
});
