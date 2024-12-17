import React from 'react';
import { Package } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  const shipping: number = 0; // Explicitly type shipping as number
  const tax: number = total * 0.1;
  const finalTotal: number = total + shipping + tax;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      
      <div className="summary-items">
        {items.map((item) => (
          <div key={item.id} className="summary-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
              {item.quantity && <span className="item-quantity">{item.quantity}</span>}
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-details">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="summary-row">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="delivery-info">
        <Package className="icon" />
        <div className="delivery-text">
          <p>Free Delivery</p>
          <span>Estimated delivery: 3-5 business days</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary; 