import * as React from 'react';
import  ProductCard  from '../ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  price: string;
  rating: string;
  imageUrl?: string;
}

const products: Product[] = [
  { id: 1, name: "Name of product", price: "$59.50", rating: "5.0" },
  { id: 2, name: "Name of product", price: "$59.50", rating: "5.0" },
  { id: 3, name: "Name of product", price: "$59.50", rating: "4.9" },
];

export const BestSelling: React.FC = () => {
  return (
    <section className="flex flex-col items-center max-md:max-w-full">
      <h2 className="text-8xl tracking-tight leading-none text-center text-green-900 max-md:text-4xl">
        Best Selling
      </h2>
      <p className="text-2xl tracking-tight text-center text-green-900 leading-[64px] max-md:max-w-full">
        Get in on trend with our curated selection of best-selling styles
      </p>
      <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            </div>
          ))}
        </div>
      </div>
      <button className="flex overflow-hidden flex-col justify-center py-4 pr-14 pl-14 mt-40 w-56 max-w-full text-2xl font-medium text-green-900 rounded border-2 border-green-900 border-solid max-md:px-5 max-md:mt-10">
        See all
      </button>
    </section>
  );
};