import React from 'react';
import ImageSlider from './components/Imgslider/ImageSlider'; 
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div>
    
      <div className="container mt-5">
        <h1>Quiltsname</h1>
        <ImageSlider />
      </div>
      <div>
      <ProductCard />
      </div>
    
    </div>
  );
}

export default App;
