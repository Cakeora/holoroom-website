// ProductList.tsx
import React, { useState } from 'react';
import ProductGrid from '../ProductGrid/ProductGrid';
import FilterBar from '../FilterBar/FilterBar';

// This would come from your API/backend in a real app
const getAllProducts = () => {
  return [
    // Living Room Products
    {
      id: 'lr1',
      name: 'Modern Comfort Sofa',
      price: 1299.99,
      image: '/images/products/living-room/sofa-1.jpg',
      category: 'living-room',
      year: '2024',
      discount: {
        type: 'percentage',
        amount: 20,
        label: 'Winter Sale',
        validUntil: new Date('2025-03-01'),
      }
    },
    {
      id: 'lr2',
      name: 'Minimalist Coffee Table',
      price: 449.99,
      image: '/images/products/living-room/table-1.jpg',
      category: 'living-room',
      year: '2024'
    },
    // Bedroom Products
    {
      id: 'b1',
      name: 'Premium Queen Bed Frame',
      price: 899.99,
      image: '/images/products/bedroom/bed-1.jpg',
      category: 'bedroom',
      year: '2024'
    },
    {
      id: 'b2',
      name: 'Elegant Nightstand',
      price: 249.99,
      image: '/images/products/bedroom/nightstand-1.jpg',
      category: 'bedroom',
      year: '2023'
    },
    // Kitchen Products
    {
      id: 'k1',
      name: 'Modern Dining Set',
      price: 1499.99,
      image: '/images/products/kitchen/dining-1.jpg',
      category: 'kitchen',
      year: '2024'
    },
    {
      id: 'k2',
      name: 'Kitchen Island',
      price: 799.99,
      image: '/images/products/kitchen/island-1.jpg',
      category: 'kitchen',
      year: '2023'
    },
    // Add more products...
  ];
};

const ProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedYear, setSelectedYear] = useState('');
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  // Get all products
  const allProducts = getAllProducts();
  
  // Apply filters
  const filteredProducts = allProducts
    .filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Year filter
      const matchesYear = selectedYear ? product.year === selectedYear : true;
      
      // Sale filter
      const matchesSale = onSaleOnly ? !!product.discount : true;
      
      return matchesSearch && matchesPrice && matchesYear && matchesSale;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          // For 'newest', sort by year in descending order
          return b.year.localeCompare(a.year);
      }
    });

  return (
    <div className="product-list">
      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        sortBy={sortBy}
        onSortChange={setSortBy}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        showSaleFilter={true}
        onSaleOnly={onSaleOnly}
        onSaleFilterChange={setOnSaleOnly}
      />
      <ProductGrid 
        title="All Products"
        description="Explore our complete collection of premium furniture. Find the perfect pieces to transform your space."
        products={filteredProducts}
      />
    </div>
  );
};

export default ProductList;