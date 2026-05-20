import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Milk", category: "Dairy" },
    { id: 2, name: "Bread", category: "Bakery" },
    { id: 3, name: "Cheese", category: "Dairy" },
    { id: 4, name: "Apple", category: "Fruits" },
  ];

  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  function handleToggle() {
    setDarkMode(!darkMode);
  }

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      {/* Toggle Button */}
      <button onClick={handleToggle}>
        Toggle {darkMode ? "Light" : "Dark"}
      </button>

      {/* Filter Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      {/* Product List */}
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name}

              <button
                data-testid={`product-${product.id}`}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>

      {/* Cart */}
      <h2>Shopping Cart</h2>

      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;;