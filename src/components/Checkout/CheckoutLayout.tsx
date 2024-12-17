import React, { useState } from 'react';
import { useCart } from '../Cart/CartProvider';
import ShippingForm from './ShippingForm';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import './Checkout.css';
import { Check } from 'lucide-react';

type CheckoutStep = 'shipping' | 'payment' | 'confirmation';

const CheckoutLayout: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('shipping');
  const { items, total } = useCart();

  const handleShippingSubmit = (data: any) => {
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = (data: any) => {
    setCurrentStep('confirmation');
  };

  return (
    <div className="checkout-container" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <div className="checkout-progress">
        <div className={`progress-step ${currentStep === 'shipping' ? 'active' : ''} ${currentStep === 'payment' || currentStep === 'confirmation' ? 'completed' : ''}`}>
          <div className="step-number">1</div>
          <span>Shipping</span>
        </div>
        <div className={`progress-step ${currentStep === 'payment' ? 'active' : ''} ${currentStep === 'confirmation' ? 'completed' : ''}`}>
          <div className="step-number">2</div>
          <span>Payment</span>
        </div>
        <div className={`progress-step ${currentStep === 'confirmation' ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Confirmation</span>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-main">
          {currentStep === 'shipping' && (
            <ShippingForm onSubmit={handleShippingSubmit} />
          )}
          {currentStep === 'payment' && (
            <PaymentForm onSubmit={handlePaymentSubmit} />
          )}
          {currentStep === 'confirmation' && (
            <div className="confirmation-message">
              <div className="success-icon">
                <Check size={32} />
              </div>
              <h2>Thank you for your order!</h2>
              <p className="order-number">Order #2024{Math.floor(Math.random() * 10000)}</p>
              <div className="confirmation-details">
                <p>We've sent a confirmation email to your inbox with your order details.</p>
                <p>You'll receive shipping updates at each step of the delivery process.</p>
              </div>
              <div className="delivery-estimate">
                <h3>Estimated Delivery</h3>
                <p>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="checkout-sidebar">
          <OrderSummary items={items} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout; 