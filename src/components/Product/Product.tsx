// Product.tsx
import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ id, name, image, description, price }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => console.log(`Product ID: ${id}`)}>View Product</button>
    </div>
  );
};

export default Product;
