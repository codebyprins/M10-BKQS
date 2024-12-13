import React from 'react';
import './ProductCard.css';


function ProductCard() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row g-0 align-items-center">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Titel</h5>
              <p className="card-text">Text...</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center align-items-start p-3">
            <p className="card-text mb-2"><strong>Prijs</strong></p>
            <p className="card-text mb-2">levertijd</p>
            <button className="btn btn-outline-primary">Kopen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;