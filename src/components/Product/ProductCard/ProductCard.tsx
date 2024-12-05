// ProductCard.tsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Cart/CartProvider';
import './ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  shades?: number;
  colors?: string[];
  originalPrice?: number;
  onSale?: boolean;
}

export default function ProductCard({ 
  id, 
  name, 
  description, 
  price, 
  image,
  rating = 4.5,
  reviews = 123,
  shades = 5,
  colors = [],
  originalPrice,
  onSale = false
}: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(colors[0] || '');

  const handleAddToCart = () => {
    addItem({
      id: id.toString(),
      name,
      price,
      image
    });
  };

  return (
    <div className="product-card-wrapper">
      <div className="product-card">
        <div className="product-image-container">
          <Link to={`/product/${id}`}>
            <img src={image} alt={name} className="product-image" />
          </Link>
          {onSale && <span className="sale-badge">sale</span>}
        </div>
        
        <div className="product-content">
          <div className="shades-count">{`-${shades} shades`}</div>
          
          {colors.length > 0 && (
            <div className="color-options">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  aria-label={`Color option ${index + 1}`}
                  aria-pressed={selectedColor === color}
                />
              ))}
              <button className="more-colors-button" aria-label="Show more colors">
                <Plus className="plus-icon" />
              </button>
            </div>
          )}
          
          <div className="rating-container">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`star-icon ${index < Math.floor(rating) ? 'filled' : ''}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="review-count">({reviews})</span>
          </div>
          
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>
          
          <div className="price-container">
            <span className="current-price">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="original-price">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            add to cart - ${price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}