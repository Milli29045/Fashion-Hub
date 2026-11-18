
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("fashionHubUser") === "true"
  );

  function addToCart(product) {
    setCartItems((previousItems) => [...previousItems, product]);
  }

  function handleLogin() {
    localStorage.setItem("fashionHubUser", "true");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    localStorage.removeItem("fashionHubUser");
    setIsLoggedIn(false);
  }

  const cartCount = cartItems.length;

  return (
    <BrowserRouter>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />

      {cartOpen ? (
        <Cart
          cartItems={cartItems}
          onBack={() => setCartOpen(false)}
        />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Collections />
                <Products
                  searchTerm={searchTerm}
                  addToCart={addToCart}
                />
                <WhyChooseUs />
                <Testimonials />
                <Footer />
              </>
            }
          />

          <Route path="/women" element={<Women addToCart={addToCart} />} />
          <Route path="/men" element={<Men addToCart={addToCart} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />

          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />

          <Route path="/register" element={<Register />} />
<Route path="/contact" element={<Contact />} />

          <Route
            path="*"
            element={
              <h1 className="text-center py-20 text-3xl">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
