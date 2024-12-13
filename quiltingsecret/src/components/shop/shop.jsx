import React, { useState, useEffect } from 'react';
import '../../App.css';
import './shop.css';
import { AddToCart, More } from '../../Buttons/Buttons';

function Shop() {
    const [filters, setFilters] = useState([]); // State for filters
    const [products, setProducts] = useState([]); // State for products
    const [activeFilter, setActiveFilter] = useState("Alle producten"); // State for the active filter
    const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products

    useEffect(() => {
        fetch("/shop.json")
            .then((res) => res.json())
            .then((data) => {
                // Extract filters and products
                const extractedFilters = Object.values(data.filters);
                setFilters(extractedFilters);

                const extractedProducts = Object.values(data.products);
                setProducts(extractedProducts);
                setFilteredProducts(extractedProducts); // Default to showing all products
            })
            .catch((error) => console.error("Error fetching the data:", error));
    }, []);

    // Handle filter change
    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);

        if (filterName === "Alle producten") {
            setFilteredProducts(products); // Show all products
        } else {
            // Filter products based on the `category` field
            const filtered = products.filter((product) => product.category === filterName);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="shop-container">
            {/* Filters Section */}
            <section className="filter-container">
                <h2 className="filter-h2">Filter items:</h2>
                <ul className="filter-list">
                    {filters.map((filter, index) => (
                        <li
                            key={index}
                            className={`filter-listItem ${filter.class} ${activeFilter === filter.name ? "filter-active" : ""
                                }`}
                            onClick={() => handleFilterClick(filter.name)}
                        >
                            {filter.name}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Products Section */}
            <section className="products-container">
                <h2 className="products-h2">Producten</h2>
                <ul className="products-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <li key={product.id} className="product">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="product-img"
                                />
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className='product-category'>{product.category}</p>
                                    <p className="product-price">{product.price}</p>
                                    <p className='product-size'>{product.measurments}</p>
                                    <p className="product-material">
                                        {Array.isArray(product.info) && product.info[3]
                                            ? product.info[3]
                                            : ""}
                                    </p>
                                    <div className="buttons">
                                        <More />
                                        <AddToCart />
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="product">No products found for the selected filter.</li>
                    )}
                </ul>
            </section>
        </div>
    );
}

export default Shop;
