import { useState, useEffect } from 'react';
import { useGetAllBooksQuery } from '../redux/features/books/booksApi';
import { IBooks } from '../types/BookTypes';
import { IGenreListItems } from '../types/CommonTypes';

const GenreList: React.FC<IGenreListItems> = ({
  selectedGenre,
  setSelectedGenre,
}) => {
  const [genres, setGenres] = useState<string[]>([]);

  const { data: booksCollection, isLoading } = useGetAllBooksQuery({});

  useEffect(() => {
    if (booksCollection?.data) {
      const uniqueGenres = [
        ...new Set(booksCollection.data.map((book: IBooks) => book.genre)),
      ];
      uniqueGenres.sort();
      setGenres(uniqueGenres as string[]);
    }
  }, [booksCollection?.data]);

  if (isLoading) {
    return <h2>Loading</h2>;
  } else {
    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedGenre(event.target.value);
    };

    return (
      <div className="w-full border border-gray-300 p-2 rounded mb-3">
        <select
          className="cursor-pointer w-full"
          value={selectedGenre}
          onChange={handleGenreChange}
        >
          <option value="" disabled>
            -- Select Genre --
          </option>
          <option value="">None</option>
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
