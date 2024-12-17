import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGrid from '../ProductGrid/ProductGrid';
import FilterBar from '../FilterBar/FilterBar';

const getCategoryProducts = (category: string, year?: string) => {
  const mockProducts = {
    'living-room': [
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
        year: '2024',
        discount: {
          type: 'fixed',
          amount: 50,
          label: 'Clearance',
          validUntil: new Date('2025-02-15'),
        }
      },
      // Add more living room products...
    ],
    'bedroom': [
      {
        id: 'b1',
        name: 'Premium Queen Bed Frame',
        price: 899.99,
        image: '/images/products/bedroom/bed-1.jpg',
        category: 'bedroom',
        year: '2024',
        discount: {
          type: 'percentage',
          amount: 15,
          label: 'New Year Sale',
          validUntil: new Date('2025-02-01'),
        }
      },
      {
        id: 'b2',
        name: 'Elegant Nightstand',
        price: 249.99,
        image: '/images/products/bedroom/nightstand-1.jpg',
        category: 'bedroom',
        year: '2024'
      },
      // Add more bedroom products...
    ],
    'kitchen': [
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
        year: '2024'
      },
      // Add more kitchen products...
    ],
    'office': [
      {
        id: 'o1',
        name: 'Executive Desk',
        price: 699.99,
        image: '/images/products/office/desk-1.jpg',
        category: 'office',
        year: '2024'
      },
      {
        id: 'o2',
        name: 'Ergonomic Chair',
        price: 349.99,
        image: '/images/products/office/chair-1.jpg',
        category: 'office',
        year: '2024'
      },
      // Add more office products...
    ],
    'outdoor': [
      {
        id: 'od1',
        name: 'Patio Dining Set',
        price: 1299.99,
        image: '/images/products/outdoor/patio-1.jpg',
        category: 'outdoor',
        year: '2024'
      },
      {
        id: 'od2',
        name: 'Garden Lounge Chair',
        price: 449.99,
        image: '/images/products/outdoor/lounge-1.jpg',
        category: 'outdoor',
        year: '2024'
      },
      // Add more outdoor products...
    ]
  };

  const products = mockProducts[category as keyof typeof mockProducts] || [];
  
  if (year) {
    return products.filter(product => product.year === year);
  }
  
  return products;
};

const getCategoryInfo = (slug: string) => {
  const categories = {
    // Main Categories
    'living-room': {
      title: 'Living Room Collection',
      description: 'Transform your living space with our modern and comfortable furniture. From elegant sofas to stylish coffee tables, find the perfect pieces for your home.'
    },
    'bedroom': {
      title: 'Bedroom Collection',
      description: 'Create your perfect sanctuary with our carefully curated bedroom furniture. Discover beds, nightstands, and more designed for comfort and style.'
    },
    'kitchen': {
      title: 'Kitchen Collection',
      description: 'Elevate your dining experience with our contemporary kitchen and dining furniture. From dining sets to storage solutions, make your kitchen the heart of your home.'
    },
    'office': {
      title: 'Office Collection',
      description: 'Design your ideal workspace with our professional office furniture. Find ergonomic chairs, desks, and storage solutions for maximum productivity and comfort.'
    },
    'outdoor': {
      title: 'Outdoor Collection',
      description: 'Extend your living space outdoors with our weather-resistant furniture. Create the perfect outdoor oasis with our patio sets, loungers, and garden furniture.'
    },

    // Living Room Year Models
    'living-room-2024': {
      title: 'Living Room 2024 Models',
      description: 'Experience the future of comfort with our latest living room designs. Featuring smart functionality and contemporary aesthetics.'
    },
    'living-room-2023': {
      title: 'Living Room 2023 Models',
      description: 'Discover our award-winning living room collection from 2023. Timeless pieces that blend style with functionality.'
    },
    'living-room-2022': {
      title: 'Living Room 2022 Models',
      description: 'Explore our classic 2022 living room furniture. Proven designs that stand the test of time.'
    },
    'living-room-2021': {
      title: 'Living Room 2021 Models',
      description: 'Browse our iconic 2021 living room collection. Featuring our most beloved and enduring designs.'
    },

    // Bedroom Year Models
    'bedroom-2024': {
      title: 'Bedroom 2024 Models',
      description: 'Transform your bedroom with our innovative 2024 collection. Featuring smart storage solutions and luxurious comfort.'
    },
    'bedroom-2023': {
      title: 'Bedroom 2023 Models',
      description: 'Experience the elegance of our 2023 bedroom furniture. Designed for both style and restful sleep.'
    },
    'bedroom-2022': {
      title: 'Bedroom 2022 Models',
      description: 'Discover our refined 2022 bedroom collection. Timeless pieces that create your perfect sanctuary.'
    },
    'bedroom-2021': {
      title: 'Bedroom 2021 Models',
      description: 'Explore our classic 2021 bedroom designs. Featuring our most popular comfort-focused furniture.'
    },

    // Kitchen Year Models
    'kitchen-2024': {
      title: 'Kitchen 2024 Models',
      description: 'Revolutionize your kitchen with our latest 2024 collection. Smart storage and contemporary dining solutions.'
    },
    'kitchen-2023': {
      title: 'Kitchen 2023 Models',
      description: 'Explore our innovative 2023 kitchen furniture. Designed for both functionality and social gathering.'
    },
    'kitchen-2022': {
      title: 'Kitchen 2022 Models',
      description: 'Discover our practical 2022 kitchen collection. Timeless pieces that make cooking and dining a joy.'
    },
    'kitchen-2021': {
      title: 'Kitchen 2021 Models',
      description: 'Browse our classic 2021 kitchen designs. Featuring our most beloved dining and storage solutions.'
    },

    // Office Year Models
    'office-2024': {
      title: 'Office 2024 Models',
      description: 'Elevate your workspace with our cutting-edge 2024 office collection. Ergonomic designs meet modern functionality.'
    },
    'office-2023': {
      title: 'Office 2023 Models',
      description: 'Transform your office with our 2023 professional furniture. Designed for productivity and comfort.'
    },
    'office-2022': {
      title: 'Office 2022 Models',
      description: 'Experience our versatile 2022 office collection. Perfect for both home and professional environments.'
    },
    'office-2021': {
      title: 'Office 2021 Models',
      description: 'Explore our foundational 2021 office designs. Reliable furniture that stands the test of time.'
    },

    // Outdoor Year Models
    'outdoor-2024': {
      title: 'Outdoor 2024 Models',
      description: 'Create your perfect outdoor space with our latest 2024 collection. Weather-resistant and stylish designs.'
    },
    'outdoor-2023': {
      title: 'Outdoor 2023 Models',
      description: 'Transform your garden with our 2023 outdoor furniture. Combining durability with contemporary style.'
    },
    'outdoor-2022': {
      title: 'Outdoor 2022 Models',
      description: 'Discover our versatile 2022 outdoor collection. Classic pieces perfect for any outdoor setting.'
    },
    'outdoor-2021': {
      title: 'Outdoor 2021 Models',
      description: 'Browse our timeless 2021 outdoor designs. Featuring our most popular weather-resistant furniture.'
    }
  };
  
  return categories[slug as keyof typeof categories] || {
    title: 'Products',
    description: 'Explore our collection of premium furniture designed for modern living.'
  };
};

const CategoryPage: React.FC = () => {
  const { category, year } = useParams<{ category: string; year?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState('newest');
  const [selectedYear, setSelectedYear] = useState(year || '');
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  // Get initial products
  const allProducts = getCategoryProducts(category, selectedYear);
  
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
          return 0;
      }
    });

  const categoryInfo = getCategoryInfo(category);
  const pageTitle = year 
    ? `${categoryInfo.title} - ${year} Models`
    : categoryInfo.title;

  return (
    <div className="category-page">
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
        title={pageTitle}
        description={categoryInfo.description}
        products={filteredProducts}
      />
    </div>
  );
};

export default CategoryPage; 