import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartProvider';
import { Minus, Plus } from 'lucide-react';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeItem } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 40;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { 
      state: { 
        cartItems: items,
        cartTotal: total 
      }
    });
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-container">
          <h1>Your cart is empty</h1>
          <p>Add some items to your cart to continue shopping.</p>
          <button className="continue-shopping-btn" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        
        {remainingForFreeShipping > 0 ? (
          <div className="shipping-notice">
            you are ${remainingForFreeShipping.toFixed(2)} away from free shipping!
          </div>
        ) : (
          <div className="shipping-notice free">
            you have free shipping!
          </div>
        )}

        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                  <div className="item-header">
                    <h3>{item.name}</h3>
                    <button 
                      className="remove-button"
                      onClick={() => removeItem(item.id)}
                    >
                      remove
                    </button>
                  </div>
                  <div className="item-controls">
                    <div className="quantity-controls">
                      <button 
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        <Minus className="icon" />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="icon" />
                      </button>
                    </div>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{total >= freeShippingThreshold ? "Free" : "Calculated at checkout"}</span>
              </div>
              {total >= freeShippingThreshold && (
                <div className="summary-row free-shipping">
                  <span>Free Shipping Applied</span>
                  <span>-$0.00</span>
                </div>
              )}
              <div className="total-row">
                <div className="total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="taxes-note">
                  Taxes calculated at checkout
                </p>
              </div>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
            <div className="afterpay-info">
              or 4 interest-free payments of ${(total / 4).toFixed(2)} with <span>afterpay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 