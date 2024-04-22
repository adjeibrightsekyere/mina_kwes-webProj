import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';


import Landing from './pages/landing page';
import About from './pages/about page';
import Home from './pages/home page';
import Products from './pages/products';
import Contacts from './pages/contacts';
import Sign from './components/buttons/signIn';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
    </Router>
  );
}

export default App;
