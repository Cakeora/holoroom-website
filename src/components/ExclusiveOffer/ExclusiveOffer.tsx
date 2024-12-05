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
            <h2 className="offer-title">
              Exclusive Offer
            </h2>
            <p className="offer-description">
              Get up to 60% off in the end of the year sale
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
      </section>
    </main>
  );
};