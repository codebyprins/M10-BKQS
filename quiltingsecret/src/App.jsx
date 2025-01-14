import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Shoppingcart from './components/shoppingcart/shoppingcart.jsx';
import Home from './Pages/home/home.jsx';
import Productpagina from './Pages/productpagina/product-pagina.jsx';

import { useState } from 'react';
import Checkout from './Pages/checkout/checkout.jsx';

function App() {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <Header />
      <Shoppingcart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/productpagina/:id" element={<Productpagina addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </Router>   
  );
}

export default App;
