import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import Button from '../../components/Button';

const Banner = () => {
  return (
    <div className="flex items-center justify-evenly py-12 my-4 bg-[#edebff] rounded">
      <div className="w-[50%] flex flex-col gap-4 items-start">
        <h2 className="text-[52px] font-serif leading-[70px]">
          Buy And Sell Your Favorite Books For Best Price
        </h2>
        <p className="text-[20px] font-serif leading-[30px] mb-6">
          Welcome to Book's Vault. It's a virtual place where you can buy your
          favorite book. We also provide user's freedom to sell different types
          of books.
        </p>
        <Link to="/all-books">
          <Button title="Check Books Now" px={5} py={3} />
        </Link>
      </div>
      <div className="w-[40%]">
        <img src={banner} alt="Banner Image" className="w-[80%] rounded" />
      </div>
    </div>
  );
};

export default Banner;
