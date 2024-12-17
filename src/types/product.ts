export interface Discount {
  type: 'percentage' | 'fixed';
  amount: number;
  label: string;
  validUntil?: Date;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  year: string;
  discount?: Discount;
}

export interface SaleConfig {
  id: string;
  name: string;
  discounts: Discount[];
  startDate: Date;
  endDate: Date;
  isActive: boolean;
} 