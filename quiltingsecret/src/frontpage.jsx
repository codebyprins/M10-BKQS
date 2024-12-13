import './App.css';
import { quiltholder } from './array.jsx';
import { getImageUrl } from './utils.jsx';
import Image from './assets/quilt9.jpg';

function FrontPage() {
    return (
        <div className="welcome-section">
           {/*  <img 
                src={Image}
                alt="Background" 
                className="background-image" 
            /> */}
            <div className="overlay">
                <div className="card">
                    <h1>Welcome to A Quilting Secret!</h1>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;
