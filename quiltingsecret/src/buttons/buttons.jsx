import React from 'react';
import '../App.css'
import './buttons.css';

export function AddToCart() {
  return (
    <button id='addToCart' title='Toevoegen aan winkelwagen' className='addToCart'>
        +
    </button>
    
  )
}

export function More() {
  return (
    <a href='/productpage{i}' className='more-button' title='Naar
     infopagina'>Meer</a>
  )
}