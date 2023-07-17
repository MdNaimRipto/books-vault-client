import React from 'react';
import { IReview } from '../types/CommonTypes';

interface ReviewsProps {
  reviews: IReview[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviews }) => {
  return (
    <div className="mt-8">
      {!reviews.length ? (
        <div className="flex items-center justify-center h-[160px] text-2xl md:text-3xl font-serif">
          <h2>No Reviews Found!</h2>
        </div>
      ) : (
        <>
          {reviews.map((review, i) => (
            <div key={i + 1} className="my-4">
              <h4 className="text-sm font-serif font-semibold mb-1">
                ⚫ {review.reviewerName}
              </h4>
              <p className="text-base ml-5 font-serif mb-1">
                {' '}
                -- {review.review}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Reviews;
