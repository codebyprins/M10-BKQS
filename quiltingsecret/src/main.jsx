import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Header from './App.jsx';
import Shop from './shop/shop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Shop />
  </StrictMode>,
)
