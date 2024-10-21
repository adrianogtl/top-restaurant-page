export function menuPage() {
  const content = document.querySelector("#content");
  const p = document.createElement("p");
  content.appendChild(p);
  p.textContent = "menu page";
}
