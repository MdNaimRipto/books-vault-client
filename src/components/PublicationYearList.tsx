import { useState, useEffect } from 'react';
import { useGetAllBooksQuery } from '../redux/features/books/booksApi';
import { IBooks } from '../types/BookTypes';
import { IPublicationYearItems } from '../types/CommonTypes';
import Loader from './Loader';

const PublicationYearSelect: React.FC<IPublicationYearItems> = ({
  selectedYear,
  setSelectedYear,
}) => {
  const [publicationYears, setPublicationYears] = useState<string[]>([]);

  const { data: yearsCollection, isLoading } = useGetAllBooksQuery({});

  useEffect(() => {
    if (yearsCollection?.data) {
      const uniqueYears = [
        ...new Set(
          yearsCollection.data.map((book: IBooks) => book.publicationYear)
        ),
      ];
      uniqueYears.sort();
      setPublicationYears(uniqueYears as string[]);
    }
  }, [yearsCollection?.data]);

  if (isLoading) {
    return <Loader />;
  } else {
    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(event.target.value);
    };

    return (
      <div className="w-full border border-gray-300 p-2 rounded mb-3">
        <select
          className="cursor-pointer w-full"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="" disabled>
            -- Select Year --
          </option>
          <option value="">None</option>
          {publicationYears.map((year) => (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

export default PublicationYearSelect;
