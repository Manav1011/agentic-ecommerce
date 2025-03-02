import React from 'react';
import { Star, ThumbsUp, Flag } from 'lucide-react';
import { Review } from '../types';

interface ReviewListProps {
  reviews: Review[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
      </div>
    );
  }

  // Sort reviews by date (newest first)
  const sortedReviews = [...reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      {sortedReviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center">
                <div className="font-medium text-gray-800">{review.userName}</div>
                <span className="mx-2 text-gray-300">•</span>
                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                    className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Mark as helpful"
              >
                <ThumbsUp size={16} />
              </button>
              <button
                className="text-gray-400 hover:text-gray-600 p-1"
                aria-label="Report review"
              >
                <Flag size={16} />
              </button>
            </div>
          </div>
          <p className="mt-3 text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;