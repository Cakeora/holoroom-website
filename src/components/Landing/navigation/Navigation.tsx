import React from 'react';
import { NavLink } from 'react-router-dom';


const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navigation: React.FC = () => (
  <nav className="navitem">
    <div className="text-wrapper">
      {navItems.map((item) => (
       <NavLink 
        key={item.label} 
        to={item.path} 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
       {item.label}
     </NavLink>
      ))}
    </div>
  </nav>
);
