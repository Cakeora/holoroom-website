// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CheckoutRootLayout } from './components/CheckoutComponents/checkout-root-layout';
import { ThankYouStep } from './components/CheckoutComponents/components/thank-you-step';
import CartPage from './components/Cart/CartPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutRootLayout />} />
        <Route path="/thank-you" element={<ThankYouStep />} />
      </Routes>
    </BrowserRouter>
  );
}
