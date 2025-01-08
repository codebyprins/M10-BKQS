import '../../App.css';
import './footer.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
    return (
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-box">
                    <h3>Box 1</h3>
                    <p>Information for Box 1 goes here.</p>
                </div>
                <div className="footer-box">
                    <h3>Box 2</h3>
                    <p>Information for Box 2 goes here.</p>
                </div>
                <div className="footer-box">
                    <h3>Box 3</h3>
                    <p>Information for Box 3 goes here.</p>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer