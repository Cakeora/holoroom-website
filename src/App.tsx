// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Landing/navigation/NavBar';
import { LandingPage } from './components/Landing/LandingPage';
import ProductList from './components/Product/ProductPage/ProductList';
import { ExclusiveOffer } from './components/ExclusiveOffer/ExclusiveOffer'; // Import your ExclusiveOffer component

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar will always be displayed on every page */}
      <Navbar />

      {/* Define Routes for different pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

      {/* ExclusiveOffer will always be displayed at the bottom of the page */}
      <ExclusiveOffer />
    </Router>
  );
};

export default App;
