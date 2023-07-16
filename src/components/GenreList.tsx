import { useState, useEffect } from 'react';
import { useGetAllBooksQuery } from '../redux/features/books/booksApi';
import { IBooks } from '../types/BookTypes';

const GenreList = () => {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  const { data: booksCollection, isLoading } = useGetAllBooksQuery(undefined);

  useEffect(() => {
    if (booksCollection?.data) {
      const uniqueGenres = [
        ...new Set(booksCollection.data.map((book: IBooks) => book.genre)),
      ];
      uniqueGenres.sort();
      setGenres(uniqueGenres as string[]);
    }
  }, [booksCollection?.data]);

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    return (
      <div className="w-full border border-gray-300 p-2 rounded mb-3">
        <select
          className="cursor-pointer w-full"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="">-- Select Genre --</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default GenreList;
