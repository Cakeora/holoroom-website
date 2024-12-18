import React from 'react';
import './FooterPage.css'; // Import the CSS file for styling

const Shipping: React.FC = () => {
  return (
    <div className="footer-page">
      <h1>Shipping Information</h1>
      <p>We offer fast and reliable shipping options to ensure your products arrive on time.</p>
      
      <section>
        <h2>Shipping Methods</h2>
        <ul>
          <li><strong>Standard Shipping:</strong> 5-7 business days.</li>
          <li><strong>Express Shipping:</strong> 2-3 business days.</li>
          <li><strong>Overnight Shipping:</strong> Next business day delivery.</li>
        </ul>
      </section>

      <section>
        <h2>Shipping Costs</h2>
        <p>Shipping costs are calculated at checkout based on your location and the shipping method selected.</p>
      </section>

      <section>
        <h2>International Shipping</h2>
        <p>We offer international shipping to select countries. Please check our website for availability.</p>
      </section>

      <section>
        <h2>Tracking Your Order</h2>
        <p>Once your order has shipped, you will receive a tracking number via email to monitor your shipment.</p>
      </section>
    </div>
  );
};

export default Shipping; 