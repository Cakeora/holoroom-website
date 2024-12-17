import React, { useState } from 'react';
import './PaymentMethods.css'; // Import the CSS file

const PaymentMethods: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState<string[]>([
    'Visa **** **** **** 1234',
    'MasterCard **** **** **** 5678',
  ]);
  
  const [newMethod, setNewMethod] = useState({
    type: '',
    number: '',
    expiry: '',
    cvv: '',
  });
  
  const [isAdding, setIsAdding] = useState(false);

  const addPaymentMethod = () => {
    if (newMethod.type && newMethod.number && newMethod.expiry && newMethod.cvv) {
      const formattedMethod = `${newMethod.type} **** **** **** ${newMethod.number.slice(-4)}`;
      setPaymentMethods([...paymentMethods, formattedMethod]);
      setNewMethod({ type: '', number: '', expiry: '', cvv: '' });
      setIsAdding(false);
    }
  };

  return (
    <div className="payment-methods">
      <h2>Manage Payment Methods</h2>
      <ul>
        {paymentMethods.map((method, index) => (
          <li key={index}>{method}</li>
        ))}
      </ul>
      {isAdding ? (
        <div className="payment-input">
          <select
            value={newMethod.type}
            onChange={(e) => setNewMethod({ ...newMethod, type: e.target.value })}
            required
          >
            <option value="">Select Card Type</option>
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="American Express">American Express</option>
            <option value="Discover">Discover</option>
          </select>
          <input
            type="text"
            value={newMethod.number}
            onChange={(e) => setNewMethod({ ...newMethod, number: e.target.value })}
            placeholder="Card Number (16 digits)"
            maxLength={16}
            required
          />
          <input
            type="text"
            value={newMethod.expiry}
            onChange={(e) => setNewMethod({ ...newMethod, expiry: e.target.value })}
            placeholder="MM/YY"
            maxLength={5}
            required
          />
          <input
            type="text"
            value={newMethod.cvv}
            onChange={(e) => setNewMethod({ ...newMethod, cvv: e.target.value })}
            placeholder="CVV"
            maxLength={3}
            required
          />
          <button onClick={addPaymentMethod}>Add Payment Method</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      ) : (
        <button className="toggle-button" onClick={() => setIsAdding(true)}>
          Add Payment Method
        </button>
      )}
    </div>
  );
};

export default PaymentMethods; 