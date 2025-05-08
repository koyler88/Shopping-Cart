import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Shop from "./components/shop/shop";
import Cart from "./components/cart/cart";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  function HandleClick(e) {
    setPage(e.target.dataset.value);
  }

  function handleCartAdd(e) {
    const itemId = Number(e.target.parentElement.dataset.id);
    const product = products.find((item) => item.id === itemId);

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Update quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item
        return [...prevCart, { id: product.id, product, quantity: 1 }];
      }
    });
  }

  function handleQuantityChange(productId, delta) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  }

  function handleRemoveItem(id) {
    if (window.confirm("Remove this item from your cart?")) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    }
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let category = page || "all";
  if (category === "mens") {
    category = "men's clothing";
  } else if (category === "womens") {
    category = "women's clothing";
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data = await response.json();
        const filteredData =
          category !== "all"
            ? data.filter((item) => item.category === category)
            : data;
        setProducts(filteredData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  function capitalizeWords(str) {
    if (!str || typeof str !== "string") return "";
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const shopTitle = capitalizeWords(category);

  return (
    <div className="page-container">
      <Nav onClick={HandleClick} cartCount={cartItemCount} />
      {page === "home" && <Home onClick={HandleClick} />}
      {page === "cart" && (
        <Cart
          cart={cart}
          onQuantityChange={handleQuantityChange}
          removeItem={handleRemoveItem}
        />
      )}
      {page !== "home" && page !== "cart" && (
        <Shop
          products={products}
          loading={loading}
          error={error}
          title={shopTitle}
          page={page}
          onClick={handleCartAdd}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
