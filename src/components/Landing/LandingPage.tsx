import React from 'react';
import { Link } from 'react-router-dom';
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

// BestSelling Component
export const BestSelling = () => {
  const products = [
    { id: 1, name: "Modern Lounge Chair", price: 59.50, rating: 5.0 ,image: "/images/image3.png",
    description: "A modern, elegant sofa."},
    { id: 2, name: "Minimal Coffee Table", price: 89.99, rating: 5.0 ,image: "/images/image4.png",
    description: "A modern, elegant sofa."},
    { id: 3, name: "Ergonomic Office Chair", price: 159.50, rating: 4.9 ,image: "/images/image5.png",
    description: "A modern, elegant sofa."},
  ];


    return (
      <section className="best-selling-content py-16 mx-0 px-0" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Best Selling</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in on trend with our curated selection of best-selling styles
          </p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
  
        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-700"
          >
            See all
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>
  );
};

export const LandingPage = () => {
  return (
    <div className="main-page-content min-h-screen">
    <div className="main-banner-content min-h-screen">
      {/* Hero Section */}
      <section className="mt-24 max-md:mt-10 max-md:max-w-full pb-16">
        <div className="flex gap-5 max-md:flex-col">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-48 tracking-tight text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="text-6xl text-green-900 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Furniture that reflects your good taste with a simple design and Organic material
              </h2>
              <Link to="/products">
                <button className="self-center px-16 py-3.5 mt-32 max-w-full text-4xl leading-relaxed text-green-200 bg-green-900 shadow-[0px_4px_15px_rgba(0,0,0,0.25)] w-[295px] max-md:px-5 max-md:mt-10">
                  Explore Now
                </button>
              </Link>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
  <img 
    src="/images/image6.png" 
    alt="Description of Image" 
    className="flex shrink-0 mx-auto max-w-full bg-zinc-300 h-[717px] rounded-[122px_42px_122px_42px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[570px] max-md:mt-10" 
  />
</aside>
        </div>
      </section>


      {/* You can add more sections here */}
    </div>
          {/* Best Selling Section */}
          <BestSelling />
          </div>
  );
};

export default LandingPage;