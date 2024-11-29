// src/components/Product/ProductPage/ProductPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  details?: string;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or state management
  const product: Product = {
    id: 1,
    name: "Modern Lounge Chair",
    description: "Elegant and comfortable modern lounge chair perfect for any living space.",
    price: 599.99,
    image: "/images/image3.png",
    details: "Crafted with premium materials and designed for maximum comfort, this modern lounge chair combines style with functionality."
  };

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-image-section">
          <img src={product.image} alt={product.name} className="product-main-image" />
        </div>

        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-description">{product.description}</p>
          
          {product.details && (
            <div className="product-details">
              <h2>Product Details</h2>
              <p>{product.details}</p>
            </div>
          )}

          <div className="product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
