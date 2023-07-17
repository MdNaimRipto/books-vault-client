/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useContext } from 'react';
import { useAddReviewMutation } from '../redux/features/books/booksApi';
import { AuthContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const AddReview = ({
  bookID,
  sellerID,
}: {
  bookID: string;
  sellerID: string;
}) => {
  // Getting User from Context
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }
  const { user } = authContextValue;

  const [reviewInfo] = useAddReviewMutation();
  const handleAddReview = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const reviewerName = `${user.name.firstName} ${user.name.lastName}`;

    const formData = new FormData(form);
    const review = formData.get('review') as string;
    const options = {
      id: bookID,
      data: {
        userID: user._id,
        review: {
          reviewerName: reviewerName,
          review: review,
        },
      },
    };
    console.log(options);

    try {
      await reviewInfo(options);
      form.reset();
      toast.success('Review added Successfully');
    } catch (error) {
      toast.error((error as { data?: { message: string } })?.data?.message);
      form.reset();
    }
  };
  return (
    <form className="mt-8" onSubmit={handleAddReview}>
      <textarea
        name="review"
        placeholder="Add Review"
        className="w-full border border-gray-300 rounded p-2 mb-3"
        rows={5}
        required
      />
      <button
        disabled={user._id === sellerID}
        className="px-5 py-3 rounded text-xl font-serif bg-[#5870f9] text-white mt-5 disabled:bg-gray-400 disabled:cursor-not-allowed"
        type="submit"
      >
        Add Review
      </button>
    </form>
  );
};

export default AddReview;
