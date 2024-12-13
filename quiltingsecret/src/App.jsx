import './App.css';
import FrontPage from './frontpage.jsx';
import Header from './components/header/header.jsx';
import Herosection from './components/herosection/herosection.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
    </div>
  );
}

export default App;
