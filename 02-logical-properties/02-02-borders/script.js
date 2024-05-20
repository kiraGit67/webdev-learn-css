"use strict";

const toggleElement = document.querySelector("#toggle-element");
const myElements = document.querySelectorAll(".my-element");

toggleElement.addEventListener("change", (event) => {
  myElements.forEach((myElement) => {
    myElement.style.direction = event.target.checked ? "rtl" : "ltr";
  });
});
