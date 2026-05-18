import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Cheese", category: "Dairy" },
    { id: 4, name: "Apple", category: "Fruit" },
  ];

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Category state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Cart state
  const [cart, setCart] = useState([]);

  // Toggle dark mode
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  // Add item to cart
  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      {/* Dark Mode Button */}
      <button onClick={handleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Category Filter */}
      <div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Fruit">Fruit</option>
        </select>
      </div>

      {/* Product List */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name}

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Cart */}
      <h2>Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;