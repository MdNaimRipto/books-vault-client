import { useContext } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import { useGetAllBooksQuery } from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';
import Loader from '../../components/Loader';
import ScrollToTop from '../../components/ScrollToTop';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

interface IYearGenreType {
  searchTerm: string;
  selectedYear: string;
  selectedGenre: string;
}
const AllBooks: React.FC<IYearGenreType> = ({
  searchTerm,
  selectedYear,
  selectedGenre,
}) => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }

  const { user } = authContextValue;

  const { data, isLoading, isError } = useGetAllBooksQuery({
    searchTerm,
    selectedYear,
    selectedGenre,
  });

  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-3xl font-serif font-medium">No Books Found</p>
      </div>
    );
  }
  if (isLoading) {
    return <Loader />;
  } else {
    const books = data.data;
    return (
      <div>
        <ScrollToTop />
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-sm md:text-4xl font-serif">All Books List</h2>
          {user ? (
            <Link to="/add-new-book">
              <button
                className={`py-2 px-4 text-sm bg-[#5870f9] text-white rounded font-semibold font-serif flex items-center gap-1`}
              >
                <span>Add New Book</span>
                <MdOutlineAddCircleOutline className="text-lg" />
              </button>
            </Link>
          ) : (
            <button
              disabled
              className={`py-2 px-4 text-sm bg-[#5870f9] text-white rounded font-semibold font-serif flex items-center gap-1 disabled:bg-gray-400 disabled disabled:cursor-not-allowed`}
            >
              <span>Add New Book</span>
              <MdOutlineAddCircleOutline className="text-lg" />
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book: IBooks) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    );
  }
};

export default AllBooks;
