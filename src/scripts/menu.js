import "../styles/menu.css";

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export function menuPage() {
  const drinks = [
    new Product(
      "Sparkling Water",
      "Crisp and refreshing, served with a slice of lemon.",
      2
    ),
    new Product(
      "House-Made Lemonade",
      "Freshly squeezed lemons mixed with sugar and water, served over ice.",
      2.5
    ),
    new Product(
      "Classic Italian Soda",
      "Refreshing and fizzy, available in flavors like lemon, cherry, and orange.",
      3
    ),
    new Product(
      "Craft Beer Selection",
      "A rotating selection of local craft beers on tap.",
      5
    ),
  ];

  const pizzas = [
    new Product(
      "Margherita Pizza",
      "Classic tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
      12
    ),
    new Product(
      "Pepperoni Delight",
      "Loaded with spicy pepperoni, mozzarella cheese, and a zesty tomato sauce.",
      14
    ),
    new Product(
      "Veggie Supreme",
      "A medley of bell peppers, onions, mushrooms, olives, and spinach on a bed of marinara and mozzarella.",
      13
    ),
    new Product(
      "BBQ Chicken Pizza",
      "Grilled chicken, tangy BBQ sauce, red onions, and cilantro topped with mozzarella.",
      15
    ),
    new Product(
      "Meat Lovers",
      "A hearty combination of pepperoni, sausage, ham, and bacon over a rich tomato sauce and mozzarella.",
      16
    ),
    new Product(
      "Pesto Veggie",
      "A flavorful blend of pesto sauce, artichokes, sun-dried tomatoes, and goat cheese, finished with arugula.",
      14
    ),
  ];

  const content = document.querySelector("#content");
  content.innerHTML = `
    <div class="component">
      <h2>Drinks</h2>
      <div class="grid"></div>
      <h2>Pizzas</h2>
      <div class="grid"></div>
    </div>
  `;

  const drinkGrid = document.querySelectorAll(".grid")[0];
  for (let i = 0; i < drinks.length; i++) {
    drinkGrid.innerHTML += `
     <div class="item">
      <div class="title">
        <h3 class="name">${drinks[i].name}</h3>
        <span class="price">$${drinks[i].price.toFixed(2)}</span>
      </div>
        <p class="description">${drinks[i].description}</p>
      </div>
    `;
  }

  const pizzaGrid = document.querySelectorAll(".grid")[1];
  for (let i = 0; i < pizzas.length; i++) {
    pizzaGrid.innerHTML += `
     <div class="item">
      <div class="title">
        <h3 class="name">${pizzas[i].name}</h3>
        <span class="price">$${pizzas[i].price.toFixed(2)}</span>
      </div>
        <p class="description">${pizzas[i].description}</p>
      </div>
    `;
  }
}
