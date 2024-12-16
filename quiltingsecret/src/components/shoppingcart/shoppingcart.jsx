import React, { useState } from 'react';
import './shoppingcart.css';

function Shoppingcart() {
    const [checkCartOpen, setCheckCartOpen] = useState(false);
    const openShoppingcart = () => {
        setCheckCartOpen((prev) => !prev);
    };
    return (
        <div className='shoppingcart-container' >
            <button onClick={openShoppingcart}
                className={`cart-button ${checkCartOpen ? 'button-moved' : ''}`}
                >🛒</button>
            {checkCartOpen && (
                <div className="shoppingcart-modal" onClick={openShoppingcart}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Shopping Cart</h2>
                        <p>Your cart is empty!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shoppingcart
