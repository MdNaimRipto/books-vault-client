import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthContext } from '../../Context/UserContext';
import { toast } from 'react-toastify';
import CryptoJS from 'crypto-js';

const Register = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    // Handle the case when the context value is null
    throw new Error('AuthContext value is not available');
  }

  const { setUser } = authContextValue;

  const [isLoading, setIsLoading] = useState(false);
  const secretKey =
    'e11adc41aa2be070cd926912c9fdef3be3e6d7194d4e4e63c359ff738db85070f812e87262cdbac49f3363c3405d59ba6928dd4e32e079593a03e69b9926c8b6';
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const userData = {
      name: {
        firstName,
        lastName,
      },
      email,
      password,
    };
    fetch(`http://localhost:5875/v1.0.0/users/createUser`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setUser(data.data);
          const cipherText = CryptoJS.AES.encrypt(
            JSON.stringify(data.data),
            secretKey as string
          ).toString();
          Cookies.set('userData', cipherText, { expires: 1 });
          navigate('/');
          toast.success('Registration Successful');
          form.reset();
          setIsLoading(false);
        } else if (!data.success) {
          console.log(data);
          toast.error(data.message);
          setIsLoading(false);
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-full mt-12">
      <div className="w-[30%]">
        <h2 className="text-3xl text-center font-serif">Register</h2>
        <form onSubmit={handleLogin}>
          <label className="w-full mb-2 block mt-2 font-serif">
            First Name
          </label>
          <input
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="firstName"
            type="firstName"
            placeholder="Enter First Name"
          />
          <label className="w-full mb-2 block mt-2 font-serif">Last Name</label>
          <input
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="lastName"
            type="lastName"
            placeholder="Enter Last Name"
          />
          <label className="w-full mb-2 block mt-2 font-serif">Email</label>
          <input
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <label className="w-full mb-2 block mt-2 font-serif">Password</label>
          <input
            className="w-full py-3 border border-gray-300 rounded px-2"
            name="password"
            type="password"
            placeholder="Enter Password"
          />
          <button
            className="w-full py-3 rounded text-xl font-serif bg-[#5870f9] text-white mt-5"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Register'}
          </button>
          <p className="font-serif mt-4 ml-2">
            Already Have an Account?{' '}
            <Link to="/sign-in" className="text-[#5870f9]">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
