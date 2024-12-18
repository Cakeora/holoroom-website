import React from 'react';
import { Link } from 'react-router-dom';
import './HeroBanner.css'; // Import the CSS file for styling

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1>Christmas Discounts & Sales!</h1>
        <p>Don't miss out on our special offers this holiday season!</p>
        <Link to="/christmas-sale" className="hero-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner; 