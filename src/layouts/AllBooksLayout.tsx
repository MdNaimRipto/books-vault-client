// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import GenreList from '../components/GenreList';
import PublicationYearSelect from '../components/PublicationYearList';

const AllBooksLayout = () => {
  return (
    <div className="container mx-auto px-0 md:px-4 lg:px-8 xl:px-4">
      <Navbar />
      <div className="grid grid-cols-8 gap-6 px-4 my-12">
        <nav className="col-span-2">
          <input
            placeholder="Search Books"
            className="w-full border border-gray-300 p-2 rounded mb-6"
          />
          <GenreList />
          <PublicationYearSelect />
          <button
            className={`py-3 px-5 w-full bg-[#5870f9] text-white rounded font-semibold font-serif`}
          >
            Filter Books
          </button>
        </nav>
        <div className="col-span-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AllBooksLayout;
