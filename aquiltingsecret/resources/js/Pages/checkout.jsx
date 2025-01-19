import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react'; // Using Inertia.js for page props and URL
import '../App.css';
import './checkout.css';

const Checkout = () => {
    const { url } = usePage(); // Get the current URL from Inertia.js
    const [itemIds, setItemIds] = useState([]); // Stores array of item IDs from the URL
    const [cartItems, setCartItems] = useState([]); // Stores product data for items in the cart

    // Extract item IDs from URL on component mount
    useEffect(() => {
        const searchParams = new URLSearchParams(url.split('?')[1]); // Extract the query parameters from the URL
        const ids = [];
    
        // Iterate over the keys in the query parameters
        for (const [key, value] of searchParams.entries()) {
            if (key.startsWith("cartItemIds[")) {
                ids.push(value.trim()); // Collect all the item IDs
            }
        }
    
        setItemIds(ids); // Update the state with all extracted IDs
    }, [url]);

    // Fetch and filter products based on the `itemIds` array
    useEffect(() => {
        if (itemIds.length > 0) {
            fetch("/shop.json")
                .then((res) => res.json())
                .then((data) => {
                    const extractedProducts = Object.values(data.products || {});
                    // Filter products where the ID matches one in `itemIds`
                    const filteredProducts = extractedProducts.filter((product) =>
                        itemIds.includes(product.id.toString())
                    );
                    setCartItems(filteredProducts); // Save filtered products
                })
                .catch((error) => console.error("Error fetching the data:", error));
        }
    }, [itemIds]);

    const calculateTotalPrice = () => {
        const shippingCost = 5; // Static shipping cost
        const itemsTotal = cartItems.reduce((total, item) => total + parseFloat(item.price), 0); // Sum up all item prices
        return itemsTotal + shippingCost;
    };
    
    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setItemIds((prevIds) => prevIds.filter((itemId) => itemId !== id.toString())); // Optional: Keep `itemIds` synced.
    };

    return (
        <>
            <Herosection title='Checkout' />
            <div className='checkout-container'>
                <section className='order'>
                    {cartItems.length === 0 ? (
                        <p>No products found in your cart.</p>
                    ) : (
                        <ul className='checkout-products'>
                            {cartItems.map((product) => (
                                <li key={product.id} className='checkout-product'>
                                    <article className='product-information'>
                                        <h3>{product.name}</h3>
                                        <img src={product.img} alt={product.name} style={{ width: '200px' }} />
                                    </article>
                                    <article className='product-information'>
                                        <p>Price: €{product.price}</p>
                                        <p>Quantity: 1</p> {/* Update if quantity is maintained elsewhere */}
                                        <p>Category: {product.category}</p>
                                        
                                    </article>
                                    <button className='item-remove' onClick={() => handleRemoveItem(product.id)}>Verwijder</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <article className='order-total'>
                        <h3>Verzending kosten: €5</h3>
                        <h2>Totaal:</h2>
                        <h2 className='order-price'>€{calculateTotalPrice()}</h2> {/* Display the total price */}
                    </article>
                </section>
                <form className='order-form'>
                    <h2 className='order-title'>Verzending gegevens</h2>
                    <section className='order-section'>
                        <h3>Voornaam en achternaam</h3>
                        <article className='order-article'>
                            <label>Voornaam</label>
                            <input className='input-text' type='text'></input>
                        </article>
                        <article className='order-article'>
                            <label>Achternaam</label>
                            <input className='input-text' type='text'></input>
                        </article>
                    </section>
                    <section className='order-section'>
                        <h3>Contact</h3>
                        <article className='order-article'>
                            <label>Email</label>
                            <input className='input-text' type='text'></input>
                        </article>
                        <article className='order-article'>
                            <label>Mobiel</label>
                            <input className='input-text' type='text'></input>
                        </article>
                    </section>
                    <section className='order-section'>
                        <h3>Adres</h3>
                        <article className='order-article'>
                            <label>Straat</label>
                            <input className='input-text' type='text'></input>
                        </article>
                        <article className='order-article'>
                            <label>woonplaats + huis/appartement nummber</label>
                            <input className='input-text' type='text'></input>
                        </article>
                        <article className='order-article'>
                            <label>Postcode</label>
                            <input className='input-text' type='text'></input>
                        </article>
                    </section>
                    <input type='submit' value='Plaats Bestelling' className='button-placeorder'></input>
                </form>
            </div>
        </>
    );
};

import DefaultLayout from '@/Layouts/DefaultLayout';
import Herosection from '@/Components/herosection/herosection';
Checkout.layout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Checkout;
