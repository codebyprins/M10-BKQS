import './App.css'
import { placeholder } from './array.jsx';
import { getImageUrl } from './utils.jsx';

function Header(){
    return (
    <>
      
      <nav>
        <div className='logo-holder'>
          <img 
            className='logo'
            src={getImageUrl(placeholder[0])} 
            alt="Logo"
           />
        </div>
        <ul className='list-items'>
          <li>Shop</li>
          <li>Contact</li>
          <li>Info</li>
        </ul>
      </nav>

    </>
  );
};

export default Header