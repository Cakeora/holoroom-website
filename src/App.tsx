// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Landing/navigation/NavBar';
import { LandingPage } from './components/Landing/LandingPage';
import ProductList from './components/Product/ProductPage/ProductList';
import { ExclusiveOffer } from './components/ExclusiveOffer/ExclusiveOffer'; 
import ProductPage from './components/Product/ProductPage/ProductPage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';

const App: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {/* Conditionally render Navbar only if not on SignIn or SignUp pages */}
      {!isAuthPage && <Navbar />}

      {/* Define Routes for different pages */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

      {/* Conditionally render ExclusiveOffer only if not on SignIn or SignUp pages */}
      {!isAuthPage && <ExclusiveOffer />}
    </>
  );
};

// Wrap App component with Router in index.tsx or wherever you render the App
const AppWrapper: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
