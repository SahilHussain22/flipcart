import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {

  return (
    <section className="products-section">

      <h2>
        Best Deals
      </h2>

      <div className="products">

        {products.length === 0 ? (

          <h3>
            No products found
          </h3>

        ) : (

          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />

          ))

        )}

      </div>

    </section>
  );
}

export default ProductList;