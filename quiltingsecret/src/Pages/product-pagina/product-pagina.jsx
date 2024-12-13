import React from 'react';
import Navbar from './components/Header/navbar';
import ImageSlider from './components/Imgslider/ImageSlider'; 
import ProductCard from './components/ProductCard/ProductCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h1>Quiltsname</h1>
        <ImageSlider />
      </div>
      <div>
      <ProductCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
