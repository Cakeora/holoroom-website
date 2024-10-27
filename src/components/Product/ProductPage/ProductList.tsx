// ProductList.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import products from '../../../data/products.json';

const ProductList: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full flex justify-center mb-8">
        <h1 className="text-[#224f34] font-rochester text-5xl">Our products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                rating={product.rating}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products available</p>
        )}
      </div>
    </section>
  );
};

export default ProductList;