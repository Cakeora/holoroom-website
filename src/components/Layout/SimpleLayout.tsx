import React from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../Footer/Footer';

const SimpleLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="simple-layout">
      <Navbar />
      <main className="simple-layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SimpleLayout; 