import React, { useState } from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/Footer/footer';
import Shoppingcart from '@/Components/shoppingcart/shoppingcart';

const DefaultLayout = ({ children }) => {
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
    <div>
      <Header />
      <Shoppingcart cartItems={cartItems} removeFromCart={removeFromCart} />
      <main>{React.cloneElement(children, { addToCart })}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
