// src/components/Auth/LogIn.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './LogIn.css';

const SignIn: React.FC = () => {
  const { login, error: authError } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: ''
    };

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Valid email is required';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsLoading(true);
        await login(formData.email, formData.password);
        navigate('/'); // Redirect to home after successful login
      } catch (err) {
        setErrors({
          email: authError || 'Invalid email or password',
          password: ''
        });
      } finally {
        setIsLoading(false);
      }
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
        <h1 className="customer-register__title">Log in</h1>
        
        <div className="customer-register__register">
          <form onSubmit={handleSubmit} className="form form--create-customer">
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
            </div>

            <div className="form__field form__field--checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                className="checkbox"
              />
              <label htmlFor="rememberMe" className="legal-terms">
                Remember me
              </label>
            </div>

            <div className="forgot-password">
              <Link to="/forgot-password" className="forgot-password__link">
                Forgot your password?
              </Link>
            </div>

            <div className="form__actions">
              <button 
                type="submit" 
                className="action action--secondary"
                disabled={isLoading}
              >
                {isLoading ? 'Logging in...' : 'Log In'}
              </button>
            </div>
          </form>
        </div>

        <div className="customer-register__login">
          <p className="customer-register__login-text">Don't have an account?</p>
          <Link to="/signup" className="customer-register__login-link">
            Create Account
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SignIn;