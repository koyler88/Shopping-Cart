import "./product-card.css";
function ProductCard({ url, price, title, onClick, id }) {
  return (
    <>
      <div className="product-card" data-id={id}>
        <img className="product-img" src={url} alt="" />
        <p className="product-title">{title}</p>
        <p className="price-tag">${price.toFixed(2)}</p>
        <button onClick={onClick} className="add-to-cart">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
