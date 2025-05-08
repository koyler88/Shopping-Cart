import clothes from "../../assets/clothes.jpg";
import mens from "../../assets/mens.jpg";
import womens from "../../assets/womens.jpg";
import jewelery from "../../assets/jewelery.jpg";
import laptop from "../../assets/laptop.jpg";
import "./home.css";
import CategoryCard from "../card/category-card";

function Home({ onClick }) {
  return (
    <>
      <div className="image-container">
        <img className="trending-img" src={clothes} alt="Trending" />
        <div className="overlay-content">
          <h1 className="title">Autumn Collection</h1>
          <p className="overlay-text">
            Discover our latest collection with styles for every occasion
          </p>
          <button onClick={onClick} className="overlay-btn">
            Shop Now
          </button>
        </div>
      </div>

      <h2 className="category-title">Shop by Category</h2>
      <hr />
      <div className="card-container">
        <CategoryCard
          src={womens}
          category="Women's Clothing"
          onClick={onClick}
          value="womens"
        />
        <CategoryCard
          src={mens}
          category="Men's Clothing"
          onClick={onClick}
          value="mens"
        />
        <CategoryCard
          src={jewelery}
          category="Jewelery"
          onClick={onClick}
          value="jewelery"
        />
        <CategoryCard
          src={laptop}
          category="Electronics"
          onClick={onClick}
          value="electronics"
        />
      </div>
    </>
  );
}

export default Home;
