import React from 'react';
import './FooterPage.css'; // Import the CSS file for styling

const Accessibility: React.FC = () => {
  return (
    <div className="footer-page">
      <h1>Accessibility Statement</h1>
      <p>We are committed to ensuring digital accessibility for people with disabilities. We strive to provide a user-friendly experience for all visitors to our website.</p>
      
      <section>
        <h2>1. Accessibility Features</h2>
        <p>Our website includes the following accessibility features:</p>
        <ul>
          <li>Text resizing options</li>
          <li>High-contrast mode for better visibility</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
        </ul>
      </section>

      <section>
        <h2>2. Ongoing Efforts</h2>
        <p>We continually work to improve the accessibility of our website. We regularly review our content and design to ensure compliance with accessibility standards.</p>
      </section>

      <section>
        <h2>3. Feedback</h2>
        <p>If you encounter any accessibility barriers while using our website, please contact us. We welcome your feedback and are committed to making improvements.</p>
      </section>

      <section>
        <h2>4. Contact Information</h2>
        <p>You can reach us at <a href="mailto:support@holoroom.shop">accessibility@yourcompany.com</a> for any accessibility-related inquiries.</p>
      </section>
    </div>
  );
};

export default Accessibility; 