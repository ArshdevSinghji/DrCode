import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;