import './App.css';
import { quiltholder } from './array.jsx';
import { getImageUrl } from './utils.jsx';

function FrontPage() {
    return (
        <div className="welcome-section">
            <img 
                src={getImageUrl(quiltholder[0])} 
                alt="Background" 
                className="background-image" 
            />
            <div className="overlay">
                <div className="card">
                    <h1>Welcome to QuiltingSecret!</h1>
                </div>
                <div className="button-container">
                    <button onClick={() => window.location.href='/shop'}>Shop</button>
                    <button onClick={() => window.location.href='/contact'}>Contact</button>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
