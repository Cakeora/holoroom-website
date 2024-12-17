import React from 'react';
import { useForm } from 'react-hook-form';

interface ShippingFormProps {
  onSubmit: (data: any) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="checkout-form">
      <h2>Shipping Information</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: true })}
            />
            {errors.firstName && <span className="error">First name is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: true })}
            />
            {errors.lastName && <span className="error">Last name is required</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="error">Valid email is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            {...register('address', { required: true })}
          />
          {errors.address && <span className="error">Address is required</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              {...register('city', { required: true })}
            />
            {errors.city && <span className="error">City is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              {...register('postalCode', { required: true })}
            />
            {errors.postalCode && <span className="error">Postal code is required</span>}
          </div>
        </div>

        <button type="submit" className="checkout-button">
          Continue to Payment
        </button>
      </form>
    </div>
  );
};

export default ShippingForm; 