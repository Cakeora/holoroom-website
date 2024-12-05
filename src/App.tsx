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
import CartPage from './components/Cart/CartPage';
import { CheckoutRootLayout } from './components/CheckoutComponents/checkout-root-layout';
import { ThankYouStep } from './components/CheckoutComponents/components/thank-you-step';
import { CartProvider } from './components/Cart/CartProvider';
import Footer from './components/Footer/Footer';
import './App.css';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isCheckoutFlow = location.pathname === '/checkout' || location.pathname === '/thank-you';

  return (
    <div className="app-container">
      <CartProvider>
        <div className="app-content">
          {!isCheckoutFlow && <Navbar />}
          <main className="app-main">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
              
              {/* Checkout routes */}
              <Route path="/checkout" element={<CheckoutRootLayout />} />
              <Route path="/thank-you" element={<ThankYouStep />} />
            </Routes>
          </main>
          {!isCheckoutFlow && (
            <>
              <ExclusiveOffer />
              <Footer />
            </>
          )}
        </div>
      </CartProvider>
    </div>
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
