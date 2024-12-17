import React from 'react';
import OrderHistory from './OrderHistory';
import Addresses from './Addresses';
import PaymentMethods from './PaymentMethods';
import './Account.css';

const Account: React.FC = () => {
  return (
    <div className="account-page">
      <h1>Your Account</h1>
      
      <OrderHistory />
      <Addresses />
      <PaymentMethods />
    </div>
  );
};

export default Account; 