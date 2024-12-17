import React from 'react';
import './Testimonials.css';

interface Testimonial {
  id: string;
  user: string;
  content: string;
  productPhoto: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    user: 'Sarah M.',
    content: 'This sofa is incredibly comfortable and looks stunning in my living room! Highly recommend.',
    productPhoto: '/images/products/living-room/sofa-1.jpg',
  },
  {
    id: '2',
    user: 'Michael R.',
    content: 'The coffee table I purchased is both stylish and functional. It fits perfectly with my decor!',
    productPhoto: '/images/products/living-room/table-1.jpg',
  },
  {
    id: '3',
    user: 'Jessica T.',
    content: 'I love my new bed frame! It’s sturdy and adds a touch of elegance to my bedroom.',
    productPhoto: '/images/products/bedroom/bed-1.jpg',
  },
  {
    id: '4',
    user: 'David L.',
    content: 'Fantastic dining set! The quality is top-notch, and it’s perfect for family gatherings.',
    productPhoto: '/images/products/kitchen/dining-1.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.productPhoto} alt={testimonial.user} className="product-photo" />
            <p className="testimonial-content">"{testimonial.content}"</p>
            <p className="testimonial-user">- {testimonial.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 