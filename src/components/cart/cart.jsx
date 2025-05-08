import "./cart.css";

function Cart({ cart, onQuantityChange, removeItem }) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 7.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Bag</h2>
      {cart.length === 0 ? (
        <h3 className="empty-cart">Your shopping bag is empty.</h3>
      ) : (
        cart.map(({ id, product, quantity }) => (
          <div key={id} className="cart-item">
            <img src={product.image} alt="" />
            <div className="cart-item-info">
              <h4 className="cart-item-title">{product.title}</h4>
              <p>${product.price.toFixed(2)}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => onQuantityChange(id, -1)}
                  className="quantity-btn"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  min="1"
                  className="quantity-input"
                  aria-label="Quantity"
                  type="number"
                  value={quantity}
                />
                <button
                  onClick={() => onQuantityChange(id, 1)}
                  className="quantity-btn"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button onClick={() => removeItem(id)} className="remove-item">
                Remove Item
              </button>
            </div>
            <div className="item-total">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))
      )}
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <div className="summary-container">
          <h3 className="summary-title">Order Summary</h3>
          <hr className="summary-hr" />
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span className="total-text">Total</span>
            <span className="total-text">${total.toFixed(2)}</span>
          </div>
          <hr className="summary-hr" />
          <div className="summary-buttons">
            <button
              className="clear-bag"
              onClick={() =>
                cart.length && cart.forEach((item) => removeItem(item.id))
              }
            >
              Clear Bag
            </button>
            <button onClick={() => alert("Demo site cannot submit order")}className="checkout">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
