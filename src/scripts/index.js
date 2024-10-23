import "../styles/normalize.css";
import "../styles/style.css";

import { aboutPage } from "./about.js";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

const content = document.querySelector("#content");
function clearContent() {
  content.innerHTML = "";
}

function clickHandler(event) {
  const button = event.target;
  clearContent();

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

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});

homePage();
