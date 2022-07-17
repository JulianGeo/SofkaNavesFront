import logo from './images/Dice.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from "react-router-dom";
import NavesSofka from './components/NavesSofka';
import About from './components/About';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <Router>
      <nav className='main-nav'>
        <ul>
        <li><Link to="/">Naves Sofka</Link></li>
        <li><Link to="/about">Información</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<NavesSofka/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/NavesSofka" element={<NavesSofka/>} />
       <Route path="*" element={<NavesSofka/>}/>
      </Routes>
    </Router>
  );
}

export default App;
