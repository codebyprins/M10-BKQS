import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product-pagina.css";

function ProductPage() {
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

  return (
    <div className="product-page">
      {/* Image Section */}
      <div className="image-section">
        <img src={product.img} alt={product.name} className="product-image" />
      </div>

      {/* Product Details Section */}
      <div className="details-section">
        <div className="text-container">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-category">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="product-measurements">
            <strong>Measurements:</strong> {product.measurments}
          </p>
          <p className="product-price">
            <strong>Price:</strong> {product.price}
          </p>
        </div>

        {/* Product Information Section */}
        <div className="product-info-section">
          <h3 className="product-info-title">Product Information</h3>
          <ul className="product-info">
            {product.info.map((item, index) => (
              <li key={index} className="product-info-item">{item}</li>
            ))}
          </ul>
        </div>

        <div className="purchase-container">
          <p className="product-price">{product.price}</p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
