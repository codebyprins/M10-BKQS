import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';  // Using Inertia.js for page props and URL

const Checkout = () => {
    // Extract query parameters from the page's URL
    const { url } = usePage();
    const [itemId, setItemId] = useState("");
    const [cartItemIds, setCartItemIds] = useState([]);

    useEffect(() => {
        const index = url.indexOf("=");
    const id = url.slice(index + 1);
    console.log(id);
        setItemId(id);
    }, [url]);
    console.log(itemId);


    // Fetch data based on the cartItemIds
    useEffect(() => {
        if (cartItemIds.length > 0) {
            fetch("/shop.json")
                .then((res) => res.json())
                .then((data) => {
                    const extractedProducts = Object.values(data.products || {});
                    const filteredProducts = extractedProducts.filter(product =>
                        itemId.includes(product.id.toString())
                    );
                    console.log(filteredProducts); // Display products based on cart items
                })
                .catch((error) => console.error("Error fetching the data:", error));
        }
    }, [cartItemIds]);

    return (
        <div>
            <h1>Checkout</h1>
            {cartItemIds.length === 0 ? (
                <p>No products found in your cart.</p>
            ) : (
                <ul>
                    {cartItemIds.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.img} alt={product.name} style={{ width: '200px' }} />
                            <p>Price: {product.price}</p>
                            <p>Quantity: {cartItemIds.filter(id => id === parseInt(product.id)).length}</p>
                            <p>Category: {product.category}</p>
                            <h4>Info:</h4>
                            <ul>
                                {product.info.map((info, index) => (
                                    <li key={index}>{info}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

import DefaultLayout from '@/Layouts/DefaultLayout';
Checkout.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Checkout;
