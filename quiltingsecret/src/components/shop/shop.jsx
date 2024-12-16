import React, { useState, useEffect } from 'react';
import '../../App.css';
import './shop.css';
import { AddToCart } from '../../Buttons/Buttons';
import { Link } from 'react-router-dom'; // Ensure Link is imported

function Shop() {
    const [filters, setFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeFilter, setActiveFilter] = useState("Alle producten");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch("/shop.json")
            .then((res) => res.json())
            .then((data) => {

                const extractedFilters = Object.values(data.filters);
                setFilters(extractedFilters);

                const extractedProducts = Object.values(data.products);
                setProducts(extractedProducts);
                setFilteredProducts(extractedProducts);
            })
            .catch((error) => console.error("Error fetching the data:", error));
    }, []);


    const handleFilterClick = (filterName) => {
        setActiveFilter(filterName);

        if (filterName === "Alle producten") {
            setFilteredProducts(products);
        } else {

            const filtered = products.filter((product) => product.category === filterName);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="shop-container">

            <section className="filter-container">
                <h2 className="filter-h2">Filters:</h2>
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
                                    <section className='product-text'>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className='product-category'>{product.category}</p>
                                        <p className="product-price">{product.price}</p>
                                        <p className='product-size'>{product.measurments}</p>
                                        <p className="product-material">
                                            {Array.isArray(product.info) && product.info[3]
                                                ? product.info[3]
                                                : ""}
                                        </p>
                                    </section>
                                    <div className="buttons">
                                        {/* Make the "More" button a clickable link */}
                                        <Link to={`/productpagina/${product.id}`} className="more-button" title="Go to product page">
                                            Meer
                                        </Link>
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
