import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Add } from './pages/Add';
import Seller from './pages/Seller';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/seller" element={<Seller />} />
      </Routes>
    </div>
  );
}

export default App;
