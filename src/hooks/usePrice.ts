import { Product } from '../types/product';

export const usePrice = () => {
  const isDiscountValid = (product: Product) => {
    if (!product.discount?.validUntil) return true;
    const now = new Date();
    return now < new Date(product.discount.validUntil);
  };

  const calculateDiscountedPrice = (product: Product) => {
    if (!product.discount || !isDiscountValid(product)) return product.price;

    const { type, amount } = product.discount;
    if (type === 'percentage') {
      return product.price * (1 - amount / 100);
    }
    return Math.max(0, product.price - amount);
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  const getDiscountLabel = (product: Product) => {
    if (!product.discount || !isDiscountValid(product)) return null;
    
    const { type, amount, label } = product.discount;
    if (label) return label;
    
    return type === 'percentage' 
      ? `${amount}% OFF` 
      : `$${amount} OFF`;
  };

  const getTimeRemaining = (product: Product) => {
    if (!product.discount?.validUntil) return null;
    
    const now = new Date();
    const end = new Date(product.discount.validUntil);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return null;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    return { days, hours };
  };

  return {
    calculateDiscountedPrice,
    formatPrice,
    getDiscountLabel,
    getTimeRemaining,
    isDiscountValid,
  };
}; 