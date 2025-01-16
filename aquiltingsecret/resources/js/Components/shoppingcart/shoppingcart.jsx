import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import './shoppingcart.css';
import '../../App.css';

function Shoppingcart({ cartItems, removeFromCart }) {
    const [checkCartOpen, setCheckCartOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // State for the checkbox

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const openShoppingcart = () => {
        setCheckCartOpen((prev) => !prev);
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // Update checkbox state
    };

    return (
        <div className="shoppingcart-container">
            <button
                onClick={openShoppingcart}
                className={`cart-button ${checkCartOpen ? 'button-moved' : ''}`}
            >
                {getTotalItems() > 0 ? getTotalItems() : '🛒'}
            </button>
            {checkCartOpen && (
                <div className="shoppingcart-modal" onClick={openShoppingcart}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2 className='cart-h2'>Winkelwagen</h2>
                        <ul className='cart-list'>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <li key={item.id} className="cart-item">
                                        <img src={item.img} alt={item.name} className="cart-img" />
                                        <div className="cart-info">
                                            <h3 className='cart-infoH3'>{item.name}</h3>
                                            <p className='cart-infoP'>Quantity: {item.quantity}</p>
                                            <p className='cart-infoP'>{item.price}</p>
                                        </div>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            X
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <li>Geen items in de winkelwagen</li>
                            )}
                        </ul>
                        <form>
                            <label>
                                <input
                                    type="checkbox"
                                    id="voorwaardes"
                                    name="voorwaardes"
                                    value="Ik accepteer de algemen en privacy voorwaardes"
                                    onChange={handleCheckboxChange} // Update state on change
                                />
                                Ik accepteer de algemene voorwaarden
                            </label>
                        </form>
                        <Link
                            to={isChecked ? '/checkout' : '#'}
                            className={`checkout-preAccept ${isChecked ? 'checkout-button' : 'disabled-link'}`} // Apply a disabled style
                            onClick={(e) => {
                                if (!isChecked) {
                                    e.preventDefault(); // Prevent navigation if checkbox is not checked
                                    alert('Please accept the terms and conditions to proceed.');
                                }
                            }}
                        >
                            Betalen
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shoppingcart;
