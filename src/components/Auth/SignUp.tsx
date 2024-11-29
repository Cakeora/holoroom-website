// src/components/Auth/SignUp.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptsMarketing: false,
    acceptsTerms: false
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!formData.acceptsTerms) {
      newErrors.terms = 'You must accept the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <article className="customer-register-wrapper">
      <div className="customer-register">
        <h1 className="customer-register__title">Create an Account</h1>
        
        <div className="customer-register__register">
          <form onSubmit={handleSubmit} className="form form--create-customer">
            <div className="form__field form__field--text form__field--group">
              <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className={`input ${errors.firstName ? 'input--error' : ''}`}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>

              <div className="input-wrapper">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className={`input ${errors.lastName ? 'input--error' : ''}`}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form__field form__field--email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className={`input ${errors.email ? 'input--error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form__field form__field--password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`input ${errors.password ? 'input--error' : ''}`}
              />
              {errors.password && <span className="error-message">{errors.password}</span>}
              <span className="message">Must be at least 6 characters long</span>
            </div>

            <div className="form__field form__field--confirm-password">
              <label htmlFor="confirmPassword">Re-enter password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Re-enter password"
                className={`input ${errors.confirmPassword ? 'input--error' : ''}`}
              />
              {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
            </div>

            <div className="form__field form__field--checkbox">
              <input
                type="checkbox"
                id="acceptsMarketing"
                name="acceptsMarketing"
                checked={formData.acceptsMarketing}
                onChange={handleInputChange}
                className="checkbox"
              />
              <label htmlFor="acceptsMarketing" className="legal-terms">
                I would like to receive emails with updates on products, offers, promotions, and other marketing information.
                I understand that I can opt out of these communications at any time.
              </label>
            </div>

            <div className="form__field form__field--checkbox">
              <input
                type="checkbox"
                id="acceptsTerms"
                name="acceptsTerms"
                checked={formData.acceptsTerms}
                onChange={handleInputChange}
                className="checkbox"
              />
              <label htmlFor="acceptsTerms" className="legal-terms">
                Please agree to our <Link to="/terms">Terms</Link>,{' '}
                <Link to="/privacy">Privacy Policy</Link>, and{' '}
                <Link to="/rewards-terms">Rewards Program Terms</Link> to create an account
              </label>
              {errors.terms && <span className="error-message">{errors.terms}</span>}
            </div>

            <div className="form__actions">
              <button type="submit" className="action action--secondary">
                Create Account
              </button>
            </div>
          </form>
        </div>

        <div className="customer-register__login">
          <p className="customer-register__login-text">Already have an account?</p>
          <Link to="/login" className="customer-register__login-link">
            Log in
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SignUp;