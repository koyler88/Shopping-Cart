import "./nav.css";

function Nav({cartCount, onClick}) {

  return (
    <div className="nav-container">
      <div className="head-nav">
        <h1>Calm Apparel</h1>
        <div className="links">
          <button onClick={onClick} data-value="home">Home</button>
          <button onClick={onClick} data-value="all">Shop</button>
          <button onClick={onClick} data-value="cart" className="flex">Cart<p className="count">{cartCount}</p></button>
        </div>
      </div>
      <div className="category links">
        <button onClick={onClick} data-value="all">All</button>
        <button onClick={onClick} data-value="mens">Mens</button>
        <button onClick={onClick} data-value="womens">Womens</button>
        <button onClick={onClick} data-value="jewelery">Jewelery</button>
        <button onClick={onClick} data-value="electronics">Electronics</button>
      </div>
    </div>
  );
}

export default Nav;
