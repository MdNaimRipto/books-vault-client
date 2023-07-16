import React from 'react';
import { IReview } from '../types/CommonTypes';

interface ReviewsProps {
  reviews: IReview[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div>
      {!reviews.length ? (
        <div className="flex items-center justify-center h-[160px] text-3xl font-serif">
          <h2>No Reviews Found!</h2>
        </div>
      ) : (
        <>
          {reviews.map((review) => (
            <div>
              <h4>{review.reviewerName}</h4>
              <p>{review.review}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Reviews;
