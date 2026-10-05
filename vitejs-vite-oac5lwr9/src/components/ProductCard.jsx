function ProductCard({ product, onAddToCart }) {

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
      />

      <h3>
        {product.title}
      </h3>

      <p className="price">
        ₹{product.price.toLocaleString()}
      </p>

      <p className="category">
        {product.category}
      </p>

      <button
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;