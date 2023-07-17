import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {
  return (
    <>
      <div className="container mx-auto px-0 md:px-4 lg:px-8 xl:px-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
