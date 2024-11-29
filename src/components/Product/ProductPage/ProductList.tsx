// ProductList.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Modern Lounge Chair",
      description: "Elegant and comfortable modern lounge chair",
      price: 599.99,
      image: "/images/image3.png"
    },
    {
      id: 2,
      name: "Minimal Coffee Table",
      description: "Sleek and minimal coffee table design",
      price: 299.99,
      image: "/images/image4.png"
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      description: "Professional ergonomic office chair",
      price: 499.99,
      image: "/images/image5.png"
    },
  ];

  return (
    <section className="product-list">
      <div className="product-list-header">
        <h1 className="product-list-title">Our Products</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;