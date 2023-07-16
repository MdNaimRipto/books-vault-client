import { Link } from 'react-router-dom';
import { IBookCardProps } from '../types/BookTypes';

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <Link className="bg-gray-200 rounded" to={`/books-details/${book._id}`}>
      <div className="relative w-[96%] mx-auto">
        <span className="absolute top-0 right-0 px-2 py-1 text-xs rounded-bl-md rounded-tr text-white bg-[#5870f9]">
          {book.genre}
        </span>
        <img
          src={book.img}
          className="mt-1 rounded"
          style={{ height: undefined, aspectRatio: 0.7 }}
          alt="Top Seller Books"
        />
      </div>
      <div className="px-2 pt-2">
        <div className="flex items-center justify-between mt-1 mb-2">
          <h6 className="font-serif text-base font-medium">
            {book.title.length > 18
              ? `${book.title.slice(0, 15)}...`
              : book.title}
          </h6>
          <p className="text-xs font-serif font-semibold text-green-600">
            {book.publicationDate}
          </p>
        </div>
        <p className="text-sm text-gray-900 font-medium mb-4 font-serif">
          By {book.author}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
