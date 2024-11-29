// Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import rectangle26 from "./Rectangle-26.svg";
import './NavBar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-content">
      <div className="nav-section">
        <div className="title-container">
          <h1 className="header-title">HoloRoom</h1>
        </div>
        <div className="nav-buttons">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      <div className="cart-login-section">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce6431ce6b0caf75bad1c43b4f1ca8ad75fb29ae8dd2dfef71268fcd0a31ba4?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b" 
          alt="Cart Icon"
          className="cart-icon"
        />

        <div className="login-wrapper">
          <img src={rectangle26} alt="Rectangle" className="rectangle" />
          <button className="login-button">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;