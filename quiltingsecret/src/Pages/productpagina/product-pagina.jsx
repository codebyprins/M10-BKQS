import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product-pagina.css";
import ImageSlider from '../../components/Imgslider/ImageSlider'; 

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/shop.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.products[id];
        if (product) {
          setProduct(product);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, [id]);

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

 
  const productImages = product.img || [placeholderImage]; 

  return (
    <div className="product-page">
      <div className="image-section">
        <ImageSlider images={productImages} />
      </div>

      <div className="details-section">
        <div className="text-container">
          <h1 className="product-title">{product.name}</h1>
        </div>

        <div className="product-info-section">
          <h3 className="product-info-title">Product Information</h3>
          <ul className="product-info1">
            <li className="product-info-item">
              <strong>Category:</strong> {product.category}
            </li>
            <li className="product-info-item">
              <strong>Measurements:</strong> {product.measurments}
            </li>
            <li className="product-info-item">
              <strong>Price:</strong> {product.price}
            </li>
            {product.info && product.info.map((item, index) => (
              <li key={index} className="product-info-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="purchase-container">
          <button
            id='addToCart'
            title='Toevoegen aan winkelwagen'
            className='addToCart'
            onClick={() => addToCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
