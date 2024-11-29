// ProductList.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

const ProductList: React.FC = () => {
  // This could come from an API or props
  const products = [
    {
      id: 1,
      name: "Product Name",
      description: "Product description goes here",
      price: 59.99,
      image: "/path/to/image.jpg"
    },
    // Add more products as needed
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
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;