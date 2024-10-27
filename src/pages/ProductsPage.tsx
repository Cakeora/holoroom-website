// src/pages/ProductsPage.tsx
import React from 'react';
import ProductList from '../components/Product/ProductPage/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
