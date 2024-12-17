import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { CartButton } from '../Cart/CartButton';

interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
  subCategories: SubCategory[];
}

const categories: Category[] = [
  { 
    id: '1', 
    name: 'Living Room', 
    slug: 'living-room',
    subCategories: [
      { id: 'l1', name: '2024 Models', slug: 'living-room-2024' },
      { id: 'l2', name: '2023 Models', slug: 'living-room-2023' },
      { id: 'l3', name: '2022 Models', slug: 'living-room-2022' },
      { id: 'l4', name: '2021 Models', slug: 'living-room-2021' },
    ]
  },
  { 
    id: '2', 
    name: 'Bedroom', 
    slug: 'bedroom',
    subCategories: [
      { id: 'b1', name: '2024 Models', slug: 'bedroom-2024' },
      { id: 'b2', name: '2023 Models', slug: 'bedroom-2023' },
      { id: 'b3', name: '2022 Models', slug: 'bedroom-2022' },
      { id: 'b4', name: '2021 Models', slug: 'bedroom-2021' },
    ]
  },
  { 
    id: '3', 
    name: 'Kitchen', 
    slug: 'kitchen',
    subCategories: [
      { id: 'k1', name: '2024 Models', slug: 'kitchen-2024' },
      { id: 'k2', name: '2023 Models', slug: 'kitchen-2023' },
      { id: 'k3', name: '2022 Models', slug: 'kitchen-2022' },
      { id: 'k4', name: '2021 Models', slug: 'kitchen-2021' },
    ]
  },
  { 
    id: '4', 
    name: 'Office', 
    slug: 'office',
    subCategories: [
      { id: 'o1', name: '2024 Models', slug: 'office-2024' },
      { id: 'o2', name: '2023 Models', slug: 'office-2023' },
      { id: 'o3', name: '2022 Models', slug: 'office-2022' },
      { id: 'o4', name: '2021 Models', slug: 'office-2021' },
    ]
  },
  { 
    id: '5', 
    name: 'Outdoor', 
    slug: 'outdoor',
    subCategories: [
      { id: 'od1', name: '2024 Models', slug: 'outdoor-2024' },
      { id: 'od2', name: '2023 Models', slug: 'outdoor-2023' },
      { id: 'od3', name: '2022 Models', slug: 'outdoor-2022' },
      { id: 'od4', name: '2021 Models', slug: 'outdoor-2021' },
    ]
  },
];

export default function Navbar() {
  const [announcement, setAnnouncement] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeAnnouncement = () => setAnnouncement(false);

  const navItems = ['Home', 'Products', 'About', 'Contact'];

  return (
    <div className="navbar-wrapper">
      {announcement && (
        <div className="announcement-bar">
          <p>now available ✧ the holiday collection ✧ shop now</p>
          <button className="announcement-close" onClick={closeAnnouncement}>
            <X className="close-icon" />
            <span className="sr-only">Close announcement</span>
          </button>
        </div>
      )}
      <header className="main-header">
        <div className="header-container">
          <div className="header-content">
            <div className="nav-left">
              <button 
                className="menu-button" 
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
              >
                <Menu className="menu-icon" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
            
            <div className="brand-container">
              <Link to="/" className="brand-link">
                <img 
                  src="/images/Logo-Dark.svg" 
                  alt="HoloRoom" 
                  className="brand-logo"
                />
              </Link>
            </div>

            <div className="nav-right">
              <Link to="/login" className="icon-button">
                <User className="action-icon" />
                <span className="sr-only">Account</span>
              </Link>
              <CartButton />
            </div>
          </div>

          <nav className="main-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item} className={`nav-item ${item === 'Products' ? 'dropdown' : ''}`}>
                  {item === 'Products' ? (
                    <>
                      <Link 
                        to="/products" 
                        className="nav-link"
                      >
                        Products
                      </Link>
                      <div className="dropdown-menu">
                        {categories.map((category) => (
                          <div key={category.id} className="dropdown-item-wrapper">
                            <Link
                              to={`/products/${category.slug}`}
                              className="dropdown-item"
                            >
                              {category.name}
                            </Link>
                            <div className="sub-menu">
                              {category.subCategories.map((subCategory) => (
                                <Link
                                  key={subCategory.id}
                                  to={`/products/${subCategory.slug}`}
                                  className="dropdown-item sub-item"
                                >
                                  {subCategory.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link 
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                      className="nav-link"
                    >
                      {item === 'Contact' ? 'Contact Us' : item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <h2 className="mobile-nav-title">Menu</h2>
          <button className="close-menu" onClick={toggleMenu}>
            <X className="close-icon" />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="mobile-nav-content">
          {navItems.map((item) => (
            item === 'Products' ? (
              <div key={item} className="mobile-nav-section">
                <Link 
                  to="/products"
                  className="mobile-nav-link"
                  onClick={toggleMenu}
                >
                  Products
                </Link>
                <div className="mobile-categories">
                  {categories.map((category) => (
                    <div key={category.id} className="mobile-category-group">
                      <Link
                        to={`/products/${category.slug}`}
                        className="mobile-nav-link mobile-category-link"
                        onClick={toggleMenu}
                      >
                        {category.name}
                      </Link>
                      <div className="mobile-subcategories">
                        {category.subCategories.map((subCategory) => (
                          <Link
                            key={subCategory.id}
                            to={`/products/${subCategory.slug}`}
                            className="mobile-nav-link mobile-subcategory-link"
                            onClick={toggleMenu}
                          >
                            {subCategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="mobile-nav-link" 
                onClick={toggleMenu}
              >
                {item === 'Contact' ? 'Contact Us' : item}
              </Link>
            )
          ))}
        </nav>
      </div>
    </div>
  );
} 