import '../../App.css';
import './header.css';
import { placeholder } from '../../array.jsx';
import { getImageUrl } from '../../utils.jsx';

function Header(){
    return (
    <>
      
      <nav>
        <div className='logo-holder'>
          <img 
            className='logo'
            src='/aquiltingsecret.png'
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