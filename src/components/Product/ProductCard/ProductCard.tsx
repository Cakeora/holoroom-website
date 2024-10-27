import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using filled star from Font Awesome
import { useNavigate } from 'react-router-dom'; // Import from react-router-dom

interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  rating?: number; 
}

const ProductCard: React.FC<ProductProps> = ({ id, name, image, rating, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="product-card cursor-pointer transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={name}
        className="product-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          console.error(`Failed to load image: ${image}`);
          target.src = '/placeholder.png';
        }}
      />
      <div className="p-4">
        <h2 className="product-name">{name}</h2>
        <div className="flex items-center justify-between mt-2">
          <p className="product-price text-lg font-semibold text-[#224F34]">
            ${price.toFixed(2)}
          </p>
          <div className="flex items-center gap-1">
          <span className="text-sm font-medium text-gray-600">{rating || 0}</span>
            <FaStar className="text-yellow-400" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;