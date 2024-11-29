// ProductCard.tsx
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, name, description, price, image }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-header">
        <div className="image-container">
          <img
            src={image}
            alt={name}
            className="product-image"
          />
          <button className="wishlist-button">
            <Heart className="heart-icon" />
            <span className="sr-only">Add to wishlist</span>
          </button>
        </div>
      </div>
      
      <div className="product-content">
        <Link to={`/product/${id}`} className="product-link">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
        </Link>
      </div>
      
      <div className="product-footer">
        <p className="product-price">${price.toFixed(2)}</p>
        <div className="button-container">
          <button 
            className={`add-to-cart-button ${isHovered ? 'show' : ''}`}
          >
            Add to Cart
          </button>
          <button 
            className={`quick-shop-button ${isHovered ? 'hide' : ''}`}
          >
            Quick Shop
          </button>
        </div>
      </div>
    </div>
  );
}