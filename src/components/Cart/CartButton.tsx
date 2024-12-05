import React from "react";
import { ShoppingBag } from 'lucide-react';
import { useCart } from "./CartProvider";
import './CartButton.css';

export function CartButton() {
  const { items, openCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      className="cart-button"
      onClick={openCart}
    >
      <ShoppingBag className="cart-icon" />
      {itemCount > 0 && (
        <span className="cart-count">{itemCount}</span>
      )}
    </button>
  );
} 