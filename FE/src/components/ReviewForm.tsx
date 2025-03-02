import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ReviewFormProps {
  productId: string;
  onSubmit: (review: {
    rating: number;
    comment: string;
  }) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId, onSubmit }) => {
  const { isAuthenticated, user } = useAuth();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setError('You must be logged in to submit a review');
      return;
    }
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }
    
    if (comment.trim() === '') {
      setError('Please enter a comment');
      return;
    }
    
    onSubmit({
      rating,
      comment,
    });
    
    // Reset form
    setRating(0);
    setComment('');
    setError('');
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <p className="text-gray-700">
          Please <a href="/login" className="text-blue-600 hover:underline">log in</a> to leave a review.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none"
              >
                <Star
                  size={24}
                  fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'}
                  className={(hoverRating || rating) >= star ? 'text-yellow-500' : 'text-gray-300'}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review
          </label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Share your experience with this product..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;