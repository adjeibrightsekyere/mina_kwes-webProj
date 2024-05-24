import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';


import Home from './pages/home page';
import About from './pages/about page';
import SignIn from './pages/signIn';
import Products from './pages/products';
import Contacts from './pages/contacts';
import SignUp from './pages/signUp';


function App() {
  return (
    <Router>
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      <Route path="/products" element={<Products />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    
    </Router>
  );
}

export default App;
