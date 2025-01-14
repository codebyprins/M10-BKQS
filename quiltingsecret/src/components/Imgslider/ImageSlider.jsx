import React, { useState } from "react";
import "./ImageSlider.css"; 

const placeholderImage = "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleError = () => {
    setImageError(true); 
  };

  return (
    <div className="image-slider-container">
      <div className="carousel">
        <button className="carousel-control-prev" onClick={prevImage}>
          &#8592; {/* Left arrow */}
        </button>
        <div className="carousel-item">
          <img
            src={imageError ? placeholderImage : images[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            className="carousel-image"
            onError={handleError} 
          />
        </div>
        <button className="carousel-control-next" onClick={nextImage}>
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
