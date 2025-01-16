import '../../App.css';
import './header.css';
import React from 'react';
import { Link } from '@inertiajs/react';


function Header(){
    return (
    <>
      
      <nav>
        <div className='logo-holder'>
          <img 
            className='logo'
            src='/images/aquiltingsecret.png'
            alt="Logo"
           />
           <h1 className='h1-title'>A Quilting Secret</h1>
        </div>
        <ul className='list-items'>
          <li>
            <Link className='link' href={route('Welcome')}>Shop</Link>
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