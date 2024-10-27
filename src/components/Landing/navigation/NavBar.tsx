// src/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import rectangle26 from "./Rectangle-26.svg"; 

const Navbar: React.FC = () => {
  return (
    <nav className="Nav-content flex items-center justify-between p-4 bg-green-200">
      {/* Logo and Navigation Links */}
      <div className="flex items-center space-x-6">
      <div className="title-container">
      <h1 className="header-title">HoloRoom</h1>
      </div>
        <div className="Nav-buttons flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `hover:text-green-600 ${isActive ? 'font-bold' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => 
              `hover:text-green-600 ${isActive ? 'font-bold' : ''}`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 
              `hover:text-green-600 ${isActive ? 'font-bold' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => 
              `hover:text-green-600 ${isActive ? 'font-bold' : ''}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Shopping Cart and Login */}
      <div className="flex items-center space-x-6">
        {/* Shopping Cart Icon */}
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce6431ce6b0caf75bad1c43b4f1ca8ad75fb29ae8dd2dfef71268fcd0a31ba4?placeholderIfAbsent=true&apiKey=e55f9dd769bf47cc97cdb92eee2fce0b" 
          alt="Cart Icon"
          className="cart-icon w-8 h-8"
        />

        {/* Login Button with Rectangle Background */}
        <div className="login-wrapper relative">
          <img src={rectangle26} alt="Rectangle" className="rectangle absolute inset-0 z-0" />
          <button className="login-button relative z-10 text-2xl font-Rochester text-green-900">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
