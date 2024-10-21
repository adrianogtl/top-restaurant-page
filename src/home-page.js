export function homePage() {
  const content = document.querySelector("#content");
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent = "home page";
}
