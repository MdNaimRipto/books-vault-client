import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  useDeleteBookMutation,
  useGetBooksByIDQuery,
} from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import { MdAddCircleOutline } from 'react-icons/md';
import { useState, useContext } from 'react';
import '../../styles/bookDetails.css';
import Reviews from '../../components/Reviews';
import AddReview from '../../components/AddReview';
import Loader from '../../components/Loader';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/UserContext';
import ScrollToTop from '../../components/ScrollToTop';

const BooksDetail = () => {
  // Getting User from Context
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }
  const { user } = authContextValue;

  const navigate = useNavigate();

  // Getting Books ID and Getting Book by ID:
  const { id } = useParams();
  const { data, isLoading } = useGetBooksByIDQuery(id);

  // Delete Book:
  const [deleteOptions] = useDeleteBookMutation();
  const handleDelete = (book: IBooks) => {
    swal({
      title: 'Are you sure?',
      text: `Once deleted, It will be deleted forever!`,
      icon: 'warning',
      buttons: ['Cancel', 'Delete'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const options = {
          id: id,
          data: {
            sellerID: book?.sellerID,
          },
        };
        deleteOptions(options);
        navigate('/all-books');
        swal(`Book has been deleted`, {
          icon: 'success',
        });
      } else {
        swal(`Book has not been deleted`);
      }
    });
  };

  // Review and Add Review Functions:
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
    return (
      <div>
        <ScrollToTop />
        <div className="flex flex-col lg:flex-row items-center gap-16 px-4 lg:px-10 py-12">
          <div className="w-full lg:w-[30%] bg-gray-200 mx-auto">
            <img
              src={details.img}
              alt="Book Image"
              className="w-[85%] mx-auto my-8 rounded"
              style={{ height: undefined, aspectRatio: 0.7 }}
            />
          </div>
          <div className="w-full lg:w-[70%]">
            <h2 className="text-2xl lg:text-3xl font-serif">{details.title}</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-3 mt-4 text-lg font-serif">
              <p>Author: {details.author}</p>
              <Rating rating={4.5} />
              <p>
                Genre:{' '}
                <span className="bg-[#5870f9] text-white p-2 rounded">
                  {details.genre}
                </span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-3 mt-5">
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
            <div className="flex flex-wrap items-center gap-4 md:gap-3 font-serif">
              <Button title="Buy Now" />
              <button className="flex items-center gap-1">
                <p>Add to Wishlist</p>
                <MdAddCircleOutline className="text-2xl" />
              </button>
              {user?._id === details?.sellerID && (
                <>
                  <Link to={`/edit-book/${details._id}`}>
                    <button className="py-2 px-4 ml-4 border border-black rounded font-semibold font-serif">
                      Edit Book
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(details);
                    }}
                    className="py-2 px-4 bg-red-500 text-white border border-red-500 rounded font-semibold font-serif"
                  >
                    Delete Book
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-10 pb-12">
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
            {addReview && !reviews && (
              <AddReview
                bookID={id as string}
                sellerID={details.sellerID as string}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default BooksDetail;
