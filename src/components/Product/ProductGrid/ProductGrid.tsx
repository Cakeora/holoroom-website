import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../components/Cart/CartProvider';
import { ShoppingBag } from 'lucide-react';
import { usePrice } from '../../../hooks/usePrice';
import './ProductGrid.css';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  year: string;
  discount?: {
    type: 'percentage' | 'fixed';
    amount: number;
    label: string;
    validUntil?: Date;
  };
}

interface ProductGridProps {
  title: string;
  description?: string;
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, description, products }) => {
  const { addToCart } = useCart();
  const { calculateDiscountedPrice, formatPrice, getDiscountLabel } = usePrice();

  return (
    <div className="product-grid-container">
      <div className="product-grid-header">
        <h1>{title}</h1>
        {description && <p className="category-description">{description}</p>}
      </div>
      
      <div className="product-grid">
        {products.map((product) => {
          const discountedPrice = calculateDiscountedPrice(product);
          const discountLabel = getDiscountLabel(product);

          return (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {discountLabel && (
                    <div className="discount-badge">{discountLabel}</div>
                  )}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="price-container">
                    <p className="product-price">
                      ${formatPrice(discountedPrice)}
                    </p>
                    {product.discount && (
                      <p className="original-price">
                        ${formatPrice(product.price)}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart({
                  ...product,
                  price: discountedPrice
                })}
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;