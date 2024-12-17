import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import './NewsletterPopup.css';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already submitted
    const hasSubmitted = localStorage.getItem('newsletter_submitted');
    if (hasSubmitted) return;

    const lastShownTime = sessionStorage.getItem('newsletter_last_shown');
    const currentTime = Date.now();
    const twoMinutes = 2 * 60 * 1000; // 2 minutes in milliseconds
    
    // Show if never shown, or if it's been 2 minutes since last close
    if (!lastShownTime || currentTime - parseInt(lastShownTime) > twoMinutes) {
      const handleScroll = () => {
        const scrollTrigger = window.innerHeight * 0.3;
        if (window.scrollY > scrollTrigger && !isVisible) {
          setIsVisible(true);
          // Only update last shown time if user submits (moved to handleSubmit)
          window.removeEventListener('scroll', handleScroll);
        }
      };

      // Initial 30s timer for first show
      const timer = setTimeout(() => {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }, 30000);

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    // Update last shown time when closed without submitting
    sessionStorage.setItem('newsletter_last_shown', Date.now().toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Store submission in localStorage
    localStorage.setItem('newsletter_submitted', 'true');
    localStorage.setItem('newsletter_email', email);

    setTimeout(() => {
      handleClose();
      setIsSubmitted(false);
    }, 30000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    // Update suggestions based on common email domains
    if (value.includes('@')) {
      const [username, domain] = value.split('@');
      const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
      const newSuggestions = commonDomains
        .filter(d => d.startsWith(domain || ''))
        .map(d => `${username}@${d}`);
      setSuggestions(newSuggestions);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-popup">
        <button className="close-button" onClick={handleClose}>
          <X size={24} />
        </button>
        
        <div className="newsletter-content">
          {!isSubmitted ? (
            <>
              <div className="offer-image">
                <img 
                  src="/images/special-offer.jpg" 
                  alt="Special Offer" 
                  className="promo-image"
                />
              </div>
              <div className="offer-content">
                <h2>Get 20% Off Your First Order</h2>
                <p className="discount-text">Create an account today and receive an exclusive discount code!</p>
                <p className="offer-details">Join our community to receive special offers, free giveaways, and amazing deals.</p>
                
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="newsletter-input"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      autoComplete="email"
                      list="email-suggestions"
                    />
                    <datalist id="email-suggestions">
                      {suggestions.map((suggestion, index) => (
                        <option key={index} value={suggestion} />
                      ))}
                    </datalist>
                  </div>
                  <button type="submit" className="newsletter-button">
                    Get My 20% Off
                  </button>
                </form>
                <p className="terms">By signing up, you agree to receive marketing emails from us.</p>
              </div>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <Check size={32} />
              </div>
              <h2>Welcome to Our Family! 🎉</h2>
              <p className="confirmation-text">Thank you for joining us! We've sent your 20% discount code to:</p>
              <p className="confirmed-email">{email}</p>
              <p className="next-steps">
                Check your inbox in the next few minutes. Can't wait to have you shopping with us!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup; 