import React from 'react';
import '../App.css';
import Shop from '../Components/shop/shop';
import Herosection from '../Components/herosection/herosection';

function Home({ addToCart, removeFromCart }) {
  return (
    <div>
        <Herosection title='Shop'/>
        <Shop addToCart={addToCart} removeFromCart={removeFromCart} />
    </div>
  )
}

import DefaultLayout from '@/Layouts/DefaultLayout';
Home.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home
