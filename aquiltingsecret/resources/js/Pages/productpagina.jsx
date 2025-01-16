import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom"; // Ensure correct library for useParams
import "./product-pagina.css";
import ImageSlider from "@/Components/Imgslider/ImageSlider"; 

const placeholderImage = "/path/to/placeholder.jpg"; // Replace with your actual placeholder path

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/shop.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data.products && data.products[id]) {
          setProduct(data.products[id]);
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
              <strong>Measurements:</strong> {product.measurements}
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
            id="addToCart"
            title="Toevoegen aan winkelwagen"
            className="addToCart"
            onClick={() => addToCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

ProductPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductPage;
