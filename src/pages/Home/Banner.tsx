import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import Button from '../../components/Button';

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-evenly py-12 my-4 bg-[#edebff] rounded px-4 lg:px-0">
      <div className="w-full md:w-[50%] flex flex-col gap-4 items-start">
        <h2 className="text-2xl lg:text-[52px] font-serif leading-[40px] lg:leading-[70px]">
          Buy And Sell Your Favorite Books For Best Price
        </h2>
        <p className="text-sm lg:text-[20px] font-serif leading-[30px] mb-6">
          Welcome to Book's Vault. It's a virtual place where you can buy your
          favorite book. We also provide user's freedom to sell different types
          of books.
        </p>
        <Link to="/all-books">
          <Button title="Check Books Now" />
        </Link>
      </div>
      <div className="w-[90%] md:w-[40%] mb-6 lg:mb-0">
        <img
          src={banner}
          alt="Banner Image"
          className="w-full md:w-[80%] rounded"
        />
      </div>
    </div>
  );
};

export default Banner;
