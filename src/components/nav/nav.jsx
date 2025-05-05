import { useEffect } from "react";
import "./nav.css";

function Nav({cartCount}) {
  cartCount = 3;
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => data.forEach(element => {
        console.log(element.category)
      }));
  });

  return (
    <div className="nav-container">
      <div className="head-nav">
        <h1>X-Cite Apparel</h1>
        <div className="links">
          <button>Home</button>
          <button>Shop</button>
          <button className="flex">Cart<p className="count">{cartCount}</p></button>
        </div>
      </div>
      <div className="category links">
        <button>All</button>
        <button>Mens</button>
        <button>Womens</button>
        <button>Jewelery</button>
        <button>Electronics</button>
      </div>
    </div>
  );
}

export default Nav;
