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
        <h2 className="text-4xl mb-10 font-serif">All Books List</h2>
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
