/* constants for toggle and demo element */
const stepDemo = document.querySelector(".demo");
const stepToggler = document.querySelector("#toggle-element");
const stepCounter = document.querySelector("#step-count");
const callout = document.querySelector(".callout");

/* eventListener for stepCounter to change count of steps */
stepCounter.addEventListener("input", ({ target }) => {
  let calloutText = `<p>Switch the toggle on to enable the <code>steps</code> timing
function.<br />Notice how even though there are only two keyframes, ${target.value} steps are created which
results in staggered effect.</p>`;

  callout.innerHTML = calloutText;
});

/* eventListener for stepToggler to turn on step timing function */
stepToggler.addEventListener("change", ({ target }) => {
  stepCounter.disabled = target.checked ? true : false;

  stepDemo.style.animationTimingFunction = target.checked
    ? `steps(${stepCounter.value}, end)`
    : "linear";
});
