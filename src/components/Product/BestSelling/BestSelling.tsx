// BestSelling.tsx
import * as React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './BestSelling.css';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  imageUrl?: string;
}

const products: Product[] = [
  { id: 1, name: "Name of product", price: "$59.50", rating: "5.0" },
  { id: 2, name: "Name of product", price: "$59.50", rating: "5.0" },
  { id: 3, name: "Name of product", price: "$59.50", rating: "4.9" },
];

export const BestSelling: React.FC = () => {
  return (
    <section className="best-selling">
      <h2 className="best-selling-title">Best Selling</h2>
      <p className="best-selling-description">
        Get in on trend with our curated selection of best-selling styles
      </p>
      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-column">
            </div>
          ))}
        </div>
      </div>
      <button className="see-all-button">See all</button>
    </section>
  );
};