import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './shoppingcart.css';

function Shoppingcart({ cartItems, removeFromCart }) {
    const [checkCartOpen, setCheckCartOpen] = useState(false);

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const openShoppingcart = () => {
        setCheckCartOpen((prev) => !prev);
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
                        <h2 className='cart-h2'>Shopping Cart</h2>
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
                                <li>No items in the cart.</li>
                            )}
                        </ul>
                        <Link to='/checkout' cartitems={cartItems} className='checkout-button'>Betalen</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shoppingcart;