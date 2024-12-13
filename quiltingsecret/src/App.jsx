import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.jsx';
import Home from './Pages/home/home.jsx';
import ProductPage from './Pages/product-pagina/src/App.jsx'
import Shoppingcart from './components/shoppingcart/shoppingcart.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Shoppingcart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
