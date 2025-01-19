import React from 'react';
import '../../App.css';
import './herosection.css';

function Herosection({ title }) {

    return (
        <div className="overlay">
            <div className="card-herosection">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Herosection
