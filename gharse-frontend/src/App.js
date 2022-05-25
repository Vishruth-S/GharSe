import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar';
import { Add } from './pages/Add';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
