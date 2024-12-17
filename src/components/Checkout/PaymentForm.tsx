import React from 'react';
import { useForm } from 'react-hook-form';
import { CreditCard, Lock } from 'lucide-react';

const PaymentForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

  // Format expiry date automatically
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setValue('expiryDate', value);
  };

  // Format card number with spaces
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setValue('cardNumber', value);
  };

  return (
    <div className="checkout-form">
      <h2>Payment Information</h2>
      <div className="secure-payment">
        <Lock className="icon" />
        <span>Secure Payment</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <div className="card-input">
            <CreditCard className="card-icon" />
            <input
              type="text"
              id="cardNumber"
              maxLength={19}
              placeholder="1234 5678 9012 3456"
              {...register('cardNumber', { 
                required: true,
                pattern: /^[\d\s]{16,19}$/,
                onChange: handleCardNumberChange
              })}
            />
          </div>
          {errors.cardNumber && <span className="error">Valid card number is required</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              maxLength={5}
              placeholder="MM/YY"
              {...register('expiryDate', { 
                required: true,
                pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                onChange: handleExpiryChange
              })}
            />
            {errors.expiryDate && <span className="error">Valid expiry date is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              maxLength={4}
              placeholder="123"
              {...register('cvv', { 
                required: true,
                pattern: /^[0-9]{3,4}$/
              })}
            />
            {errors.cvv && <span className="error">Valid CVV is required</span>}
          </div>
        </div>

        <button type="submit" className="checkout-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PaymentForm; 