import React from 'react';
import OrderHistory from './OrderHistory';

const Account: React.FC = () => {
  return (
    <div className="account-page">
      <h1>Your Account</h1>
      <OrderHistory />
    </div>
  );
};

export default Account; 