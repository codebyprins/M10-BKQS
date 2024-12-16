import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import Shoppingcart from './components/shoppingcart/shoppingcart.jsx';
import Home from './Pages/home/home.jsx';
import Productpagina from './Pages/productpagina/product-pagina.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Shoppingcart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpagina/:id" element={<Productpagina />} />
      </Routes>
    </Router>   
  );
}

export default App;
