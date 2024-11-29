import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [announcement, setAnnouncement] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeAnnouncement = () => setAnnouncement(false);

  const navItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <div className="navbar-wrapper">
      {announcement && (
        <div className="announcement-bar">
          <p>now available ✧ the holiday collection ✧ shop now</p>
          <button className="announcement-close" onClick={closeAnnouncement}>
            <X className="close-icon" />
            <span className="sr-only">Close announcement</span>
          </button>
        </div>
      )}
      <header className="main-header">
        <div className="header-container">
          <div className="header-content">
            <div className="nav-left">
              <button className="menu-button" onClick={toggleMenu}>
                <Menu className="menu-icon" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
            
            <div className="brand-container">
              <Link to="/" className="brand-link">
                <h1 className="brand-title">HoloRoom</h1>
              </Link>
            </div>

            <div className="nav-right">
              <Link to="/login" className="icon-button">
                <User className="action-icon" />
                <span className="sr-only">Account</span>
              </Link>
              <Link to="/cart" className="icon-button cart-button">
                <ShoppingBag className="action-icon" />
                <span className="cart-count">0</span>
                <span className="sr-only">Cart</span>
              </Link>
            </div>
          </div>

          <nav className="main-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="nav-link"
                  >
                    {item === 'Contact' ? 'Contact Us' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-header">
            <h2 className="mobile-nav-title">Menu</h2>
            <button className="close-menu" onClick={toggleMenu}>
              <X className="close-icon" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="mobile-nav-content">
            {navItems.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="mobile-nav-link" 
                onClick={toggleMenu}
              >
                {item === 'Contact' ? 'Contact Us' : item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
} 