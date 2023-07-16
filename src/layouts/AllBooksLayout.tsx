import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';

const AllBooksLayout = () => {
  return (
    <div>
      <Navbar />
      <nav>Side Nav</nav>
      <Outlet />
    </div>
  );
};

export default AllBooksLayout;
