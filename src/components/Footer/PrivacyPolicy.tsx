import React from 'react';
import './FooterPage.css'; // Import the CSS file for styling

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="footer-page">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p>
      
      <section>
        <h2>Information We Collect</h2>
        <p>We collect information from you when you visit our site, place an order, subscribe to our newsletter, or interact with us in other ways.</p>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to process transactions, improve our website, and send periodic emails regarding your order or other products and services.</p>
      </section>

      <section>
        <h2>Data Protection</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You have the right to request access to the personal information we hold about you and to ask for corrections if necessary.</p>
      </section>

      <section>
        <h2>Changes to Our Privacy Policy</h2>
        <p>We may update this policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 