import React, { useState, useEffect } from 'react';
import '../App.css';
import './shop.css';
import { AddToCart, More } from '../Buttons/Buttons';

function Shop() {
    const [filters, setFilters] = useState([]); // State for filters
    const [products, setProducts] = useState([]); // State for products

    useEffect(() => {
        fetch("/shop.json")
            .then((res) => res.json())
            .then((data) => {
                // Extract filters as an array
                const extractedFilters = Object.values(data.filters);
                setFilters(extractedFilters);

                // Extract products as an array
                const extractedProducts = Object.values(data.products);
                setProducts(extractedProducts);
            })
            .catch((error) => console.error("Error fetching the data:", error));
    }, []);

    return (
        <div className='shop-container'>
            {/* Filters Section */}
            <section className='filter-container'>
                <h2 className='filter-h2'>Filter items:</h2>
                <ul className='filter-list'>
                    {filters.map((filter, index) => (
                        <li key={index} className={filter.class}>
                            {filter.name}
                        </li>
                    ))}
                </ul>
            </section>

            <section className='products-container'>
                <h2 className='products-h2'>Producten</h2>
                <ul className='products-list'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id} className='product'>
                                <img src={product.img} alt={product.name} className='product-img' />
                                <div className='product-info'>
                                    <h3 className='product-name'>{product.name}</h3>
                                    <p className='product-price'>{product.price}</p>
                                    <div className='buttons'>
                                        <More />
                                        <AddToCart />
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className='product'>Loading products...</li>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default Shop;
