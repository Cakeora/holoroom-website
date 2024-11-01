// src/components/Product/ProductPage/ProductPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../../data/products.json';
import styles from './ProductPage.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((prod) => prod.id === parseInt(id || '', 10));

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <button className={styles.addToCart}>ADD TO CART</button>
      </div>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.colorOptions}>
          <div className={`${styles.color} ${styles.black}`}></div>
          <div className={`${styles.color} ${styles.red}`}></div>
          <div className={`${styles.color} ${styles.yellow}`}></div>
          <div className={`${styles.color} ${styles.blue}`}></div>
          <div className={`${styles.color} ${styles.pink}`}></div>
        </div>
        <div className={styles.quantity}>
            <button className={styles.quantityButton} onClick={handleDecrease}>-</button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button className={styles.quantityButton} onClick={handleIncrease}>+</button>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;
