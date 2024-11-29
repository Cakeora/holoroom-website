// src/components/Product/ProductPage/ProductPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  // Mock product data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      description: "Elegant and comfortable modern lounge chair perfect for any living space.",
      price: 599.99,
      image: "/images/image3.png",
      details: "Crafted with premium materials and designed for maximum comfort, this modern lounge chair combines style with functionality."
    },
    {
      id: 2,
      name: "Minimal Coffee Table",
      description: "Sleek and minimal coffee table design perfect for modern homes.",
      price: 299.99,
      image: "/images/image4.png",
      details: "Made with sustainable materials, this coffee table adds both style and function to your living room."
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      description: "Professional ergonomic office chair for maximum comfort.",
      price: 499.99,
      image: "/images/image5.png",
      details: "Designed for long hours of comfortable seating with adjustable features for perfect ergonomics."
    }
  ];

  // Find the product that matches the ID from the URL
  const product = products.find(p => p.id === Number(id));

  // If no product is found, show error and redirect
  if (!product) {
    setTimeout(() => {
      navigate('/products');
    }, 3000);
    return <div className="product-not-found">Product not found. Redirecting to products page...</div>;
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
