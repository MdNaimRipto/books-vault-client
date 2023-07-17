import { useParams } from 'react-router-dom';
import { useGetBooksByIDQuery } from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import { MdAddCircleOutline } from 'react-icons/md';
import { useState } from 'react';
import '../../styles/bookDetails.css';
import Reviews from '../../components/Reviews';
import AddReview from '../../components/AddReview';
import Loader from '../../components/Loader';

const BooksDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBooksByIDQuery(id);

  const [reviews, addReviews] = useState(true);
  const [addReview, addAddReview] = useState(false);

  const handleReviews = () => {
    addReviews(true);
    addAddReview(false);
  };
  const handleAddReview = () => {
    addAddReview(true);
    addReviews(false);
  };
  if (isLoading) {
    return <Loader />;
  } else {
    const details = data.data as IBooks;
    console.log(details);
    return (
      <div>
        <div className="flex items-center gap-16 px-10 py-12">
          <div className="w-[30%] bg-gray-200 mx-auto">
            <img
              src={details.img}
              alt="Book Image"
              className="w-[85%] mx-auto my-8 rounded"
              style={{ height: undefined, aspectRatio: 0.7 }}
            />
          </div>
          <div className="w-[70%]">
            <h2 className="text-3xl font-serif">{details.title}</h2>
            <div className="flex items-center gap-3 mt-4 text-lg font-serif">
              <p>Author: {details.author}</p>
              <Rating rating={4.5} />
              <p>
                Genre:{' '}
                <span className="bg-[#5870f9] text-white p-2 rounded">
                  {details.genre}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <p className="font-serif">
                Price: <span className="text-green-600">${details.price}</span>
              </p>
              <p className="font-serif">
                Stock:{' '}
                {details.inStock ? (
                  <span className="text-green-600">In Stock</span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
              <p className="font-serif">
                Published On: {details.publicationDate}
              </p>
            </div>

            <p className="text-sm my-3">{details.description}</p>
            <div className="flex items-center gap-3 font-serif">
              <Button title="Buy Now" />
              <div className="flex items-center gap-1">
                <p>Add to Wishlist</p>
                <MdAddCircleOutline className="text-2xl" />
              </div>
              <button className="py-2 px-4 ml-4 border border-black rounded font-semibold font-serif">
                Edit Book
              </button>
              <button className="py-2 px-4 bg-red-500 text-white border border-red-500 rounded font-semibold font-serif">
                Delete Book
              </button>
            </div>
          </div>
        </div>
        <div className="px-10 pb-12">
          <div className="flex gap-6">
            <button
              className={reviews ? 'selectedBtn' : 'unselectedBtn'}
              onClick={handleReviews}
            >
              Reviews
            </button>
            <button
              className={addReview ? 'selectedBtn' : 'unselectedBtn'}
              onClick={handleAddReview}
            >
              Add Review
            </button>
          </div>
          <div>
            {reviews && !addReview && <Reviews reviews={details.reviews} />}
            {addReview && !reviews && <AddReview />}
          </div>
        </div>
      </div>
    );
  }
};

export default BooksDetail;
