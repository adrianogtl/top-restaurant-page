import { contactPage } from "./contact-page.js";
import { homePage } from "./home-page.js";
import { menuPage } from "./menu-page.js";

const content = document.querySelector("#content");
function clearContent() {
  content.innerHTML = "";
}

function clickHandler(event) {
  const button = event.target.textContent;
  clearContent();

  if (button === "Home") {
    homePage();
  }

  if (button === "Menu") {
    menuPage();
  }

  if (button === "Contact") {
    contactPage();
  }
}

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});

homePage();
