import React from 'react';
import './AboutPage.css';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-header">
          <h1 className="about-title">HoloRoom</h1>
          <p className="about-subtitle">Crafting Modern Living Spaces Since 2020</p>
        </section>

        <section className="about-content">
          <div className="about-story">
            <h2>Our Story</h2>
            <p>
              HoloRoom began with a simple vision: to create furniture that combines 
              modern aesthetics with everyday comfort. We believe that great design 
              should be accessible to everyone, and that your living space should 
              reflect your personality while maintaining functionality.
            </p>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Quality Design</h3>
                <p>Every piece is thoughtfully designed to bring both beauty and function to your space.</p>
              </div>
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>We're committed to using eco-friendly materials and sustainable production methods.</p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Constantly exploring new designs and materials to create better living solutions.</p>
              </div>
              <div className="value-card">
                <h3>Customer Focus</h3>
                <p>Your satisfaction and comfort are at the heart of everything we do.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p className="team-intro">
            Behind HoloRoom is a passionate team of designers, craftspeople, and furniture 
            enthusiasts dedicated to creating the perfect pieces for your home.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage; 