import React from 'react';
import '../../App.css';
import Shop from '../../components/shop/shop';
import Herosection from '../../components/herosection/herosection';

function Home() {
  return (
    <div>
        <Herosection />
        <Shop/>
    </div>
  )
}

export default Home
