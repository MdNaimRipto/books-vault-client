import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Main = () => {
  return (
    <div className="container mx-auto px-0 md:px-4 lg:px-8 xl:px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
