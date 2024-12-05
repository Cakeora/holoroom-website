import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import './CartSheet.css';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartSheet({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartSheetProps) {
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeShippingThreshold = 40;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  const handleCheckout = () => {
    onClose();
    navigate('/checkout', { 
      state: { 
        cartItems: items,
        cartTotal: total 
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="cart-sheet-overlay" onClick={onClose}>
      <div className="cart-sheet" onClick={e => e.stopPropagation()}>
        <div className="cart-sheet-header">
          <div className="cart-title">
            <ShoppingBag className="cart-icon" />
            <Link to="/cart" className="cart-link" onClick={onClose}>
              cart
            </Link>
            <span className="item-count">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
          {remainingForFreeShipping > 0 ? (
            <div className="shipping-progress">
              you are ${remainingForFreeShipping.toFixed(2)} away from free shipping!
            </div>
          ) : total > 0 ? (
            <div className="shipping-success">
              you have free shipping!
            </div>
          ) : null}
          <button 
            className="close-cart-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="close-icon" />
          </button>
        </div>

        <div className="cart-items-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <button onClick={() => onRemoveItem(item.id)} className="remove-button">
                    remove
                  </button>
                </div>
                <div className="item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="quantity-button"
                    >
                      <Minus className="icon" />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="quantity-button"
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

        <div className="cart-footer">
          <div className="cart-summary">
            <div className="summary-row">
              <span>estimated total:</span>
              <span className="total-amount">${total.toFixed(2)}</span>
            </div>
            <p className="summary-note">
              shipping & discounts calculated at checkout
            </p>
          </div>
          <button onClick={handleCheckout} className="checkout-button">
            checkout
          </button>
          <div className="afterpay-info">
            or 4 interest-free payments of ${(total / 4).toFixed(2)} with <span>afterpay</span>
          </div>
        </div>
      </div>
    </div>
  );
} 