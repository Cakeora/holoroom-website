import React, { useState } from 'react';
import './FooterPage.css'; // Import the CSS file for styling

const FAQ: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping typically takes 5-7 business days, depending on your location."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to select countries."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="footer-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h2 onClick={() => toggleQuestion(index)} className="faq-question">
            {faq.question}
          </h2>
          {expandedQuestion === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ; 