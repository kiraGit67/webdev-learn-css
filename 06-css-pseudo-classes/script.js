"use strict";

const checkboxes = document.querySelectorAll("input[type='checkbox']");
const all = document.querySelector("#all");
const notAll = [...checkboxes].filter(
  (checkbox) => checkbox.getAttribute("id") !== "all"
);
