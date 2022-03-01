import "./App.css";
import Data from "./store/data";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Stocks from './pages/Stocks'
import Nav from './components/nav'
import StockShowPage from "./components/StockShowPage";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks/:symbol" element={<StockShowPage />} />
      </Routes>
    </div>
  );
}

export default App;
