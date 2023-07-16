import { useParams } from 'react-router-dom';
import { useGetBooksByIDQuery } from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';
import Rating from '../../components/Rating';
import Button from '../../components/Button';
import { MdAddCircleOutline } from 'react-icons/md';

const BooksDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBooksByIDQuery(id);

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    const details = data.data as IBooks;
    console.log(details);
    return (
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
            <Rating rating={details.rating} />
            <p>
              Genre:{' '}
              <span className="bg-[#5870f9] text-white p-2 rounded">
                {details.genre}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3">
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
          </div>

          <p className="text-sm my-3">{details.description}</p>
          <div className="flex items-center gap-3 font-serif">
            <Button title="Buy Now" />
            <div className="flex items-center gap-1">
              <p>Add to Wishlist</p>
              <MdAddCircleOutline className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BooksDetail;
