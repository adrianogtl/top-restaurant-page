export function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
    <div class="component">
      <h2>Where every slice tells a story</h2>
      <p>
        Each pizza is crafted with passion, using fresh ingredients that reflect the rich traditions of Italian cuisine. Join us for a meal that not only satisfies your hunger but also weaves together the tales of family, friendship, and unforgettable moments shared over a delicious slice.
      </p>
      <p>
        Follow us: <a href="#" class="link">@bellapizza</a>
      </p>
    </div>
  `;
}
