import logo from '../assets/error-page.jpg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="flex items-center h-screen sm:p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <img src={logo} alt="" />
        <p className="font-semibold">
          Something Went Wrong!!! Please Try Again Later.
        </p>
        <Link
          rel="noOpener noReferrer"
          to="/"
          className="px-8 py-3 bg-[#1f2278] text-white font-semibold rounded hover:bg-[#f17732] duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
