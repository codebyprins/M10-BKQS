import React from 'react';
import './ProductCard.css';
import products from './quiltingsecret/public/shop.json';

function ProductCard() {
  return (
    <div className="container mt-5">
      <div className="row">
        {Object.values(products).map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.measurments ? `Afmetingen: ${product.measurments}` : 'Geen afmetingen beschikbaar'}
                </p>
                <p className="card-text">
                  <strong>Prijs:</strong> {product.price}
                </p>
                {product.category && (
                  <p className="card-text">
                    <strong>Categorie:</strong> {product.category}
                  </p>
                )}
                {product.info && (
                  <ul>
                    {product.info.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
                <button className="btn btn-outline-primary">Kopen</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
