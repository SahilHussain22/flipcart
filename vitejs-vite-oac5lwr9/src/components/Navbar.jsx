import { useState } from "react";

function Navbar({ cartCount, onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Flipkart
        <span>Explore Plus</span>
      </div>

      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        value={search}
        onChange={handleSearch}
        className="search"
      />

      <button className="login-btn">
        Login
      </button>

      <div className="nav-item">
        Become a Seller
      </div>

      <div className="nav-item">
        More
      </div>

      <div className="cart">
        🛒 Cart ({cartCount})
      </div>

    </nav>
  );
}

export default Navbar;