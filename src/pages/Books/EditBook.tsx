import { FormEvent, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop';
import { AuthContext } from '../../Context/UserContext';
import {
  useGetBooksByIDQuery,
  useUpdateBookMutation,
} from '../../redux/features/books/booksApi';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { IBooks } from '../../types/BookTypes';

const EditBook = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }

  const { user } = authContextValue;

  const [isLoading, setIsLoading] = useState(false);
  const { id: bookID } = useParams();
  const navigate = useNavigate();

  const { data, isLoading: bookLoading } = useGetBooksByIDQuery(bookID);

  const [updateBookData] = useUpdateBookMutation();

  const handleBook = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const genre = formData.get('genre') as string;
    const publicationDate = formData.get('publicationDate') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const quantity = Number(formData.get('quantity'));
    const img = formData.get('img') as string;

    const options = {
      id: bookID,
      data: {
        sellerID: user?._id,
        updateData: {
          ...(title && { title }),
          ...(author && { author }),
          ...(genre && { genre }),
          ...(publicationDate && { publicationDate }),
          ...(description && { description }),
          ...(price && { price }),
          ...(quantity && { quantity }),
          ...(img && { img }),
        },
      },
    };
    console.log(options.data);

    try {
      setIsLoading(true);
      await updateBookData(options);
      toast.success('Book updated Successfully');
      setIsLoading(false);
      navigate(`/books-details/${bookID}`);
    } catch (error) {
      toast.error((error as { data?: { message: string } })?.data?.message);
      setIsLoading(false);
    }
  };
  if (bookLoading) {
    return <Loader />;
  }
  const details = data.data as IBooks;
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-16 mt-16 mb-32 h-screen">
      <ScrollToTop />

      <form
        onSubmit={handleBook}
        className="mt-4 lg:mt-0 w-full lg:w-3/4 mx-auto"
      >
        <label className="w-full mb-2 block mt-2 font-serif">Title</label>
        <input
          className="w-full py-3 border border-gray-300 rounded px-2"
          name="title"
          type="text"
          placeholder={`Edit Title (${details.title})`}
        />

        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <label className="w-full mb-2 block mt-2 font-serif">Author</label>
            <input
              className="w-full py-3 border border-gray-300 rounded px-2"
              name="author"
              type="text"
              placeholder={`Edit Author (${details.author})`}
            />
          </div>

          <div className="w-1/2">
            <label className="w-full mb-2 block mt-2 font-serif">Genre</label>
            <input
              className="w-full py-3 border border-gray-300 rounded px-2"
              name="genre"
              type="text"
              placeholder={`Edit Genre (${details.genre})`}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1/2">
            <label className="w-full mb-2 block mt-2 font-serif">Price</label>
            <input
              className="w-full py-3 border border-gray-300 rounded px-2"
              name="price"
              type="number"
              placeholder={`Edit Price (${details.price})`}
            />
          </div>

          <div className="w-1/2">
            <label className="w-full mb-2 block mt-2 font-serif">
              Quantity
            </label>
            <input
              className="w-full py-3 border border-gray-300 rounded px-2"
              name="quantity"
              type="number"
              placeholder={`Edit Quantity (${details.quantity})`}
            />
          </div>
        </div>

        <label className="w-full mb-2 block mt-2 font-serif">
          Publication Date
        </label>
        <input
          className="w-full py-3 border border-gray-300 rounded px-2"
          name="publicationDate"
          type="date"
          placeholder={`Edit Publication Date (${details.publicationDate})`}
        />

        <label className="w-full mb-2 block mt-2 font-serif">Description</label>
        <textarea
          className="w-full py-3 border border-gray-300 rounded px-2"
          name="description"
          rows={4}
          placeholder={`Edit Description (${details.description})`}
        />

        <label className="w-full mb-2 block mt-2 font-serif">Books Image</label>
        <input
          className="w-full py-3 border border-gray-300 rounded px-2"
          name="img"
          type="text"
          placeholder={`Edit Image (${details.img})`}
        />
        <button
          className="w-full py-3 rounded text-xl font-serif bg-[#5870f9] text-white mt-5"
          type="submit"
        >
          {isLoading ? 'Uploading...' : 'Update Book'}
        </button>
      </form>
    </div>
  );
};

export default EditBook;
