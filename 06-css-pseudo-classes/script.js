"use strict";

const checkboxes = document.querySelectorAll("input");
const all = document.getElementById("all");
const notAll = [...checkboxes].filter(
  (item) => item.getAttribute("id") !== "all"
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", ({ target }) => {
    if (target.getAttribute("id") === "all") {
      checkboxes.forEach((checkbox) => (checkbox.checked = target.checked));
    } else if (
      notAll.filter((checkbox) => checkbox.checked).length !== notAll.length
    ) {
      all.indeterminate = true;
    }
  });
});
