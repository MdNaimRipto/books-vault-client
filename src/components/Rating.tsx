import { IRating } from '../types/CommonTypes';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ rating }: IRating) => {
  const maxStars = 5; // Maximum number of stars
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 !== 0; // Check if there's a half star
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Number of empty stars

  // Array to hold the JSX for the stars
  const stars = [];

  // Generate full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={`star-${i}`} />); // Use a star symbol (☆ or ★)
  }

  // Generate half star
  if (hasHalfStar) {
    stars.push(<BsStarHalf key="half-star" />); // Use a star symbol (☆ or ★) plus half (½)
  }

  // Generate empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<BsStar key={`empty-star-${i}`} />); // Use an empty star symbol (☆ or ★)
  }

  const ratingDisplay = Number.isInteger(rating) ? rating.toFixed(1) : rating; // Format rating display

  return (
    <div className="text-[#5870f9] flex items-center gap-[2px]">
      {stars}
      <p className="bg-[#5870f9] text-white py-1 px-[5px] text-sm rounded-full font-sans ml-1">
        {ratingDisplay}
      </p>
    </div>
  );
};

export default Rating;
