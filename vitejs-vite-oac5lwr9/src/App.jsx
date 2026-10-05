import { useState } from "react";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import products from "./data/products";

import "./App.css";

function App() {

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [showCart, setShowCart] = useState(false);


  // Add product to cart
  const addToCart = (product) => {

    setCart((prevCart) => [
      ...prevCart,
      product
    ]);

  };


  // Remove product from cart
  const removeFromCart = (id) => {

    setCart((prevCart) =>
      prevCart.filter(
        (product) => product.id !== id
      )
    );

  };


  // Search products
  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );


  return (
    <>

      <Navbar
        cartCount={cart.length}
        onSearch={setSearch}
      />


      <Categories />


      <Banner />


      <div className="cart-button-container">

        <button
          onClick={() => setShowCart(!showCart)}
        >
          🛒 View Cart ({cart.length})
        </button>

      </div>


      {showCart && (

        <Cart
          cart={cart}
          onRemove={removeFromCart}
        />

      )}


      <ProductList
        products={filteredProducts}
        onAddToCart={addToCart}
      />


      <Footer />

    </>
  );
}

export default App;