import React from 'react';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';
import './ReviewSection.css';

interface Review {
  id: string;
  user: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  helpful: number;
  verified: boolean;
}

const mockReviews: Review[] = [
  {
    id: '1',
    user: 'Sarah M.',
    rating: 5,
    date: '2024-03-15',
    title: 'Absolutely Perfect!',
    content: 'This product exceeded my expectations. The quality is outstanding and it looks even better in person.',
    helpful: 24,
    verified: true,
  },
  {
    id: '2',
    user: 'Michael R.',
    rating: 4,
    date: '2024-03-10',
    title: 'Great Value',
    content: 'Really happy with this purchase. The only minor issue is the delivery took a bit longer than expected.',
    helpful: 12,
    verified: true,
  },
  // Add more mock reviews...
];

const ReviewSection: React.FC = () => {
  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h2>Customer Reviews</h2>
        <div className="reviews-summary">
          <div className="rating-average">
            <span className="rating-number">4.8</span>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`star-icon ${star <= 4.8 ? 'filled' : ''}`}
                />
              ))}
            </div>
            <span className="review-count">Based on 47 reviews</span>
          </div>
          <button className="write-review-btn">Write a Review</button>
        </div>
      </div>

      <div className="reviews-list">
        {mockReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <h3>{review.user}</h3>
                {review.verified && (
                  <span className="verified-badge">Verified Purchase</span>
                )}
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`star-icon ${
                      index < review.rating ? 'filled' : ''
                    }`}
                  />
                ))}
                <span className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>

            <h4 className="review-title">{review.title}</h4>
            <p className="review-content">{review.content}</p>

            <div className="review-actions">
              <button className="helpful-btn">
                <ThumbsUp className="icon" />
                Helpful ({review.helpful})
              </button>
              <button className="reply-btn">
                <MessageCircle className="icon" />
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection; 