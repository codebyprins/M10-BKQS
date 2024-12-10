import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import Header from './App.jsx';
import Shop from './shop/shop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Shop />
>>>>>>> b3052433a959fd6c85ef9eccaf04d6ba73647e6b
  </StrictMode>,
)
