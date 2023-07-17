import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Books Vault.png';

const Footer = () => {
  return (
    <footer className="bg-[#80808036] mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4 lg:px-16 py-10 gap-10 lg:gap-0">
        <div className="w-[80%]">
          <img src={logo} alt="Footer Logo" />
        </div>
        <div className="text-gray-900 font-semibold">
          <h5 className="text-xl mb-2">Sitemaps</h5>
          <ul>
            <li className="mb-1 font-medium">FAQs</li>
            <li className="mb-1 font-medium">Blogs</li>
            <li className="mb-1 font-medium">Terms and conditions</li>
            <li className="mb-1 font-medium">Privacy Policy</li>
            <li className="mb-1 font-medium">Promo</li>
            <li className="mb-1 font-medium">Career</li>
            <li className="mb-1 font-medium">Security</li>
            <li className="mb-1 font-medium">Media</li>
            <li className="mb-1 font-medium">Corporate Partnerships</li>
          </ul>
        </div>
        <div className="text-gray-900 font-semibold">
          <h5 className="text-xl mb-2">Contact us</h5>
          <p className="mb-3 font-medium">
            Books-Vault Building, Jl. HR Rasuna Said Kav. B32-33, South Dhaka
            12940
          </p>
          <p className="font-medium">
            Phones: +62 21-5095-9900 <br />
            Email: booksVault@gmail.com
          </p>
        </div>
        <div className="text-gray-900 font-semibold text-center">
          <h5 className="text-xl mb-3">Download the App in</h5>
          <div className="flex items-center justify-center gap-2 mb-3">
            <button className="w-1/4 lg:w-2/5">
              <img
                src="https://i.ibb.co/C58X7Yw/google-play-badge-us.webp"
                alt=""
              />
            </button>
            <button className="w-1/4 lg:w-2/5">
              <img
                src="https://i.ibb.co/XFkkWtM/app-store-badge-us-gray-900.webp"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#80808036] py-8">
        <div className="container mx-auto px-4 text-gray-900 font-semibold flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h5 className="text-sm md:text-base mb-3 lg:mb-0">
              ©Books-Vault, 2023. ALL RIGHTS RESERVED
            </h5>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <p>Follow us on:</p>
            <div className="flex items-center gap-3">
              <FaTwitter />
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
