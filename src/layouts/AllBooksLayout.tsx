import { useState } from 'react';
import Navbar from '../pages/shared/Navbar';
import GenreList from '../components/GenreList';
import PublicationYearSelect from '../components/PublicationYearList';
import AllBooks from '../pages/Books/AllBooks';
import Footer from '../pages/shared/Footer';

const AllBooksLayout = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  return (
    <>
      <div className="container mx-auto px-0 md:px-4 lg:px-8 xl:px-4">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 px-5 my-12">
          <nav className="lg:col-span-2">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Books"
              className="w-full border border-gray-300 p-2 rounded mb-6"
            />
            <GenreList
              selectedGenre={selectedGenre}
              setSelectedGenre={setSelectedGenre}
            />
            <PublicationYearSelect
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
            />
          </nav>
          <div className="lg:col-span-6">
            <AllBooks
              searchTerm={searchTerm}
              selectedYear={selectedYear}
              selectedGenre={selectedGenre}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBooksLayout;
