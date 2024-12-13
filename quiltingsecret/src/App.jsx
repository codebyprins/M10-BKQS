import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.jsx';
import Shop from './components/shop/shop.jsx';
import Footer from './components/footer/footer.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
