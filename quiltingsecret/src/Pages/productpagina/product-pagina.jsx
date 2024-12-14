import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To access the `id` from the URL

function ProductPage() {
  const { id } = useParams(); // Get the product `id` from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product data
    fetch("/shop.json")
      .then((res) => res.json())
      .then((data) => {
        const product = data.products[id]; // Get the product with the matching id
        if (product) {
          setProduct(product);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, [id]); // Re-run the effect when the `id` changes

  if (!product) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }

  return (
    <div className="product-page-container">
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <p>{product.price}</p>
      <p>{product.measurments}</p>
      
      <button>Add to Cart</button> {/* Add an "Add to Cart" button */}
    </div>
  );
}

export default ProductPage;
