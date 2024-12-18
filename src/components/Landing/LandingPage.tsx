import React from 'react';
import HeroBanner from './HeroBanner';
import { Link } from 'react-router-dom';
import ProductCard from '../Product/ProductCard/ProductCard';
import './LandingPage.css';

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      description: "Elegant and comfortable modern lounge chair",
      price: 59.50,
      image: "/images/image3.png"
    },
    {
      id: 2,
      name: "Minimal Coffee Table",
      description: "Sleek and minimal coffee table design",
      price: 89.99,
      image: "/images/image4.png"
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      description: "Professional ergonomic office chair",
      price: 159.50,
      image: "/images/image5.png"
    },
  ];

  return (
    <section className="best-selling-section">
      <div className="section-container">
        <div className="best-selling-header">
          <h2 className="section-title">Best Selling</h2>
          <p className="section-subtitle">
            Get in on trend with our curated selection of best-selling styles
          </p>
        </div>

        <div className="best-selling-grid">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="see-all-container">
          <Link to="/products" className="see-all-link">
            See all
            <svg
              className="see-all-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <HeroBanner />
      <BestSelling />
    </div>
  );
};

export default LandingPage;