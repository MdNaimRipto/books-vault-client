import { MdOutlineAddCircleOutline } from 'react-icons/md';
import BookCard from '../../components/BookCard';
import { useGetAllBooksQuery } from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';

const AllBooks = () => {
  const { data, isLoading } = useGetAllBooksQuery(undefined);
  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    const books = data.data;
    return (
      <div>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-serif">All Books List</h2>
          <button
            className={`py-2 px-4 text-sm bg-[#5870f9] text-white rounded font-semibold font-serif flex items-center gap-1`}
          >
            <span>Add New Book</span>
            <MdOutlineAddCircleOutline className="text-lg" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {books.map((book: IBooks) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    );
  }
};

export default AllBooks;
