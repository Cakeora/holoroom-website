import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { CountdownBox } from './CountdownBox';
import './ExclusiveOffer.css';

const countdownData = [
  { value: "06", label: "Days" },
  { value: "18", label: "Hours" },
  { value: "48", label: "Min" }
];

const socialLinks = [
  { icon: <Facebook size={20} />, href: "#" },
  { icon: <Twitter size={20} />, href: "#" },
  { icon: <Instagram size={20} />, href: "#" },
];

const shopLinks = ["Products", "Overview", "Pricing", "Releases"];
const companyLinks = ["About us", "Contact", "News", "Support"];

export const ExclusiveOffer: React.FC = () => {
  return (
    <main className="exclusive-offer">
      <section className="offer-section">
        <div className="offer-container">
          <div className="decoration-container">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/70df80a542a97dee8fbfb9067be85d82adb2e00f8e4f0bcb84340447178189ab" 
              alt="Exclusive offer decoration" 
              className="decoration-image" 
            />
          </div>
          <article className="offer-content">
            <h1 className="offer-title">Exclusive offer</h1>
            <p className="offer-description">
              Unlock the ultimate style upgrade with our exclusive offer Enjoy savings of up to 40% off on our latest New Arrivals
            </p>
            <div className="countdown-container">
              {countdownData.map((item, index) => (
                <CountdownBox key={index} value={item.value} label={item.label} />
              ))}
            </div>
            <button className="buy-button">
              BUY NOW
            </button>
          </article>
        </div>

        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-grid">
              <div className="brand-section">
                <h2 className="brand-title">HoloRoom</h2>
                <p className="brand-description">
                  Discover modern and elegant furniture pieces that reflect your style and enhance your living space.
                </p>
                <div className="social-icons">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href}
                      className="social-icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="links-column">
                <h3 className="column-title">Shop</h3>
                <div className="footer-links">
                  {shopLinks.map((link) => (
                    <Link key={link} to={`/${link.toLowerCase()}`} className="footer-link">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="right-column">
                <div className="company-section">
                  <h3 className="column-title">Company</h3>
                  <div className="footer-links">
                    {companyLinks.map((link) => (
                      <Link key={link} to={`/${link.toLowerCase().replace(' ', '-')}`} className="footer-link">
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="newsletter-section">
                  <h3 className="column-title">Stay Up To Date</h3>
                  <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="newsletter-input"
                        aria-label="Email for newsletter"
                      />
                      <button type="submit" className="newsletter-submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="bottom-nav">
              <div className="bottom-nav-links">
                <Link to="/terms" className="bottom-nav-link">Terms</Link>
                <Link to="/privacy" className="bottom-nav-link">Privacy</Link>
                <Link to="/cookies" className="bottom-nav-link">Cookies</Link>
              </div>
              <p className="copyright">© 2024 HoloRoom. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};