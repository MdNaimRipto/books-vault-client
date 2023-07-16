import { useState, useEffect } from 'react';
import { useGetAllBooksQuery } from '../redux/features/books/booksApi';
import { IBooks } from '../types/BookTypes';

const PublicationYearSelect = () => {
  const [publicationYears, setPublicationYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('');

  const { data: yearsCollection, isLoading } = useGetAllBooksQuery(undefined);

  useEffect(() => {
    if (yearsCollection?.data) {
      const years = yearsCollection.data.map((item: IBooks) => {
        const date = new Date(item.publicationDate);
        return date.getFullYear();
      });
      const uniqueYears = [...new Set(years)];
      uniqueYears.sort((a, b) => (a as number) - (b as number));
      setPublicationYears(uniqueYears as number[]);
    }
  }, [yearsCollection?.data]);

  if (isLoading) {
    return <h2>Loading</h2>;
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
          <option value="">-- Select Year --</option>
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
