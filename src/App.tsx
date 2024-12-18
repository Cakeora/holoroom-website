// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navigation/Navbar';
import LandingPage from './components/Landing/LandingPage';
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
import CheckoutLayout from './components/Checkout/CheckoutLayout';
import NewsletterPopup from './components/Newsletter/NewsletterPopup';
import CategoryPage from './components/Product/CategoryPage/CategoryPage';
import Testimonials from './components/Testimonials/Testimonials';
import Account from './components/Account/Account';
import ChristmasSale from './components/Sale/ChristmasSale'; // Import the new component
import PrivacyPolicy from './components/Footer/PrivacyPolicy'; // Import the new component
import TermsOfService from './components/Footer/TermsOfService'; // Import the new component
import FAQ from './components/Footer/FAQ'; // Import the new component
import Shipping from './components/Footer/Shipping'; // Import the new component
import TermsAndConditions from './components/Footer/TermsAndConditions'; // Import the new component
import Accessibility from './components/Footer/Accessibility'; // Import the new component
import SimpleLayout from './components/Layout/SimpleLayout'; // Import the new layout component

const AppContent: React.FC = () => {
  return (
    <div className="app-container">
      <CartProvider>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutLayout />} />
            <Route path="/thank-you" element={<ThankYouStep />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:category/:year" element={<CategoryPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/christmas-sale" element={<ChristmasSale />} />
            <Route path="/privacy" element={<SimpleLayout><PrivacyPolicy /></SimpleLayout>} />
            <Route path="/terms-of-service" element={<SimpleLayout><TermsOfService /></SimpleLayout>} />
            <Route path="/faq" element={<SimpleLayout><FAQ /></SimpleLayout>} />
            <Route path="/shipping" element={<SimpleLayout><Shipping /></SimpleLayout>} />
            <Route path="/terms" element={<SimpleLayout><TermsAndConditions /></SimpleLayout>} />
            <Route path="/accessibility" element={<SimpleLayout><Accessibility /></SimpleLayout>} />
          </Routes>
        </div>
        <NewsletterPopup />
      </CartProvider>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
