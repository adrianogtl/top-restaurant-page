export function aboutPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
    <div class="component">
      <h2>About us</h2>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur facilis inventore eos ipsa eveniet fugit iusto quaerat unde incidunt accusamus, cum ratione excepturi eum repudiandae perspiciatis quod vero saepe.
      </p>
      <div class="grid">
        <div class="item">
          <h3>Contact</h3>
          <span class="list">(555) 555-1234</span>
          <span class="list">bellapizza@email.com</span>
        </div>
        <div class="item">
          <h3>Address</h3>
          <span class="list">123 Pizza Street</span>
          <span class="list">Bella City, PZ</span>
          <span class="list">United States</span>
        </div>
      </div>
      
    </div>
  `;
}
