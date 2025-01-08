import React from 'react';
import '../App.css';
import Shop from '../Components/shop/shop';
import Herosection from '../Components/herosection/herosection';

function Home({ addToCart, removeFromCart }) {
  return (
    <div>
        <Herosection />
        <Shop addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  )
}

export default Home
