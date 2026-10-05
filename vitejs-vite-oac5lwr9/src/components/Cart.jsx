function Cart({ cart, onRemove }) {

  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="cart-container">

      <h2>
        Shopping Cart
      </h2>

      {cart.length === 0 ? (

        <p>
          Your cart is empty.
        </p>

      ) : (

        <>
          {cart.map((product) => (

            <div className="cart-item" key={product.id}>

              <img
                src={product.image}
                alt={product.title}
              />

              <div>

                <h3>
                  {product.title}
                </h3>

                <p>
                  ₹{product.price.toLocaleString()}
                </p>

                <button
                  onClick={() => onRemove(product.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

          <h2>
            Total: ₹{total.toLocaleString()}
          </h2>

        </>
      )}

    </div>
  );
}

export default Cart;