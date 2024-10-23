import "../styles/normalize.css";
import "../styles/style.css";

import { aboutPage } from "./about.js";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

const content = document.querySelector("#content");
let lastPage = document.querySelector(".button");
let currentPage = document.querySelector(".button");

function clickHandler(event) {
  const button = event.target;
  content.innerHTML = "";
  changeButtonStyle(button);

  if (button.textContent === "Home") {
    homePage();
  }

  if (button.textContent === "Menu") {
    menuPage();
  }

  if (button.textContent === "About") {
    aboutPage();
  }
}

function changeButtonStyle(button) {
  lastPage = currentPage;
  currentPage = button;
  lastPage.classList.remove("button-active");
  currentPage.classList.add("button-active");
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});

// Start
homePage();
currentPage.classList.add("button-active");
