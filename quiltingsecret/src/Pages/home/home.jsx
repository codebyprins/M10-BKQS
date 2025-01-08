import React from 'react';
import '../../App.css';
import Shop from '../../components/shop/shop';
import Herosection from '../../components/herosection/herosection';

function Home({ addToCart, removeFromCart }) {
  return (
    <div>
        <Herosection />
        <Shop addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  )
}

export default Home
