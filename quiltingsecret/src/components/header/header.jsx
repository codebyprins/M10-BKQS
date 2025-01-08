import '../../App.css';
import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';


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
          <li>
            <Link className='link' to="/">Shop</Link>
          </li>
          <li>
            <Link className='link' to="/contact">Contact</Link>
          </li>
          <li>
            <Link className='link' to="/info">Info</Link>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Header