import { useGetTopBooksQuery } from '../../redux/features/books/booksApi';
import { IBooks } from '../../types/BookTypes';
import BookCard from '../../components/BookCard';
import Loader from '../../components/Loader';

const TopBooks = () => {
  const { data, isLoading } = useGetTopBooksQuery(undefined);

  if (isLoading) {
    return <Loader />;
  } else {
    const topBooks = data.data;
    return (
      <div>
        <h2 className="text-4xl my-12 font-serif">Top Ten Best Seller Books</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {topBooks.map((book: IBooks) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    );
  }
};

export default TopBooks;
