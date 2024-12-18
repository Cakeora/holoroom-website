import React from 'react';
import './FooterPage.css'; // Import the CSS file for styling

const TermsAndConditions: React.FC = () => {
  return (
    <div className="footer-page">
      <h1>Terms and Conditions</h1>
      <p>Welcome to our Terms and Conditions page. Please read these terms carefully before using our services.</p>
      
      <section>
        <h2>1. Introduction</h2>
        <p>These terms govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>
      </section>

      <section>
        <h2>2. Changes to Terms</h2>
        <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.</p>
      </section>

      <section>
        <h2>3. User Responsibilities</h2>
        <p>You are responsible for your use of our services and for any content you post. You agree not to use our services for any unlawful purpose.</p>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>We are not liable for any damages arising from your use of our services. Your use of our services is at your own risk.</p>
      </section>

      <section>
        <h2>5. Governing Law</h2>
        <p>These terms are governed by the laws of [Your Country/State]. Any disputes will be resolved in the courts of [Your Location].</p>
      </section>
    </div>
  );
};

export default TermsAndConditions; 