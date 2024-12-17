import React, { useState } from 'react';
import './Addresses.css'; // Import the CSS file

const Addresses: React.FC = () => {
  const [addresses, setAddresses] = useState<string[]>([
    '123 Main St, Springfield, IL',
    '456 Elm St, Springfield, IL',
  ]);
  const [newAddress, setNewAddress] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addAddress = () => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress('');
      setIsAdding(false);
    }
  };

  return (
    <div className="addresses">
      <h2>Manage Addresses</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
      {isAdding ? (
        <div className="address-input">
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Enter new address"
          />
          <button onClick={addAddress}>Add Address</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      ) : (
        <button className="toggle-button" onClick={() => setIsAdding(true)}>
          Add Address
        </button>
      )}
    </div>
  );
};

export default Addresses; 