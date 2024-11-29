// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import { LandingPage } from './components/Landing/LandingPage';
import ProductList from './components/Product/ProductPage/ProductList';
import { ExclusiveOffer } from './components/ExclusiveOffer/ExclusiveOffer'; 
import ProductPage from './components/Product/ProductPage/ProductPage';
import SignIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/l' || location.pathname === '/s';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className="app-main">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      {!isAuthPage && <ExclusiveOffer />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
