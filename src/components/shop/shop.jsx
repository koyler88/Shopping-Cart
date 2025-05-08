import ProductCard from "../card/product-card";
import "./shop.css";

function Shop({ onClick, title, error, loading, products }) {

  return (
    <div className="shop-container">
      <p className="shop-title">{title}</p>
      {loading ? (
        <div className="loading">Loading Products...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <div className="shop-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              url={product.image}
              price={product.price}
              title={product.title}
              id={product.id}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;
