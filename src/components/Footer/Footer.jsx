import React from 'react';
import { Facebook, Instagram, Twitter, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="signup-section">
          <h2 className="signup-title">sign up for updates:</h2>
          <div className="signup-container">
            <div className="input-group">
              <input
                type="email"
                placeholder="email address"
                className="email-input"
              />
              <button className="submit-button">
                submit
              </button>
            </div>
            <p className="terms-text">
              by signing up you agree to our{' '}
              <Link to="/terms" className="terms-link">
                terms
              </Link>
            </p>
          </div>
        </div>

        <div className="social-links">
          <Link to="https://facebook.com" className="social-link">
            <Facebook className="social-icon" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link to="https://instagram.com" className="social-link">
            <Instagram className="social-icon" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link to="https://twitter.com" className="social-link">
            <Twitter className="social-icon" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>

        <nav className="primary-nav">
          <Link to="/contact" className="footer-nav-link">contact us</Link>
          <Link to="/faq" className="footer-nav-link">faq</Link>
          <Link to="/shipping" className="footer-nav-link">shipping</Link>
          <Link to="/tracking" className="footer-nav-link">order tracking</Link>
        </nav>

        <nav className="secondary-nav">
          <Link to="/privacy" className="footer-nav-link">privacy policy</Link>
          <Link to="/terms" className="footer-nav-link">terms</Link>
          <Link to="/accessibility" className="footer-nav-link">accessibility</Link>
          <Link to="/cookies" className="footer-nav-link">cookie policy</Link>
        </nav>

        <div className="copyright">
          © 2024 HoloRoom - Team 1
        </div>
      </div>
    </footer>
  );
} 