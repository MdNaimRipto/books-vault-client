import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Books Vault.png';
import '../styles/navbar.css';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const activeStyle = {
    color: '#5870f9',
  };

  const mainMenu = (
    <>
      <li className="menuHeight mt-[15px] lg:mt-0">
        <NavLink
          to="/"
          className="customFont menuHeight block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HOME
        </NavLink>
      </li>
      <li className="menuHeight">
        <NavLink
          to="/all-books"
          className="customFont menuHeight block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ALL BOOKS
        </NavLink>
      </li>
      <li className="menuHeight">
        <NavLink
          to="/sign-in"
          className="customFont menuHeight block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          SIGN IN
        </NavLink>
      </li>
      <li className="menuHeight">
        <NavLink
          to="/sign-up"
          className="customFont menuHeight block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          SIGN UP
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center justify-between h-[100px] border-b border-b-gray-200">
      <div className="w-[20%] hidden lg:block">
        <img src={logo} alt="Navbar Logo" />
      </div>
      {/*  */}
      <div className="flex items-center justify-between w-full lg:hidden px-4">
        <div className="w-[50%] md:w-[30%]">
          <NavLink
            to="/"
            onClick={() => {
              setClick(false);
            }}
          >
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div>
          <div
            onClick={() => {
              setClick(!click);
            }}
            className="block lg:hidden text-3xl text-[#5559ce]"
          >
            {!click ? <FaBars /> : <GrClose />}
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className={`absolute w-full lg:h-full lg:w-[56%] px-4 md:px-12 bg-white lg:static top-24 duration-300 lg:flex lg:justify-end ${
          click ? `left-0 duration-300` : `left-[-1000px] duration-500`
        }`}
      >
        <ul className="flex items-start lg:items-center flex-col lg:flex-row gap-2 lg:gap-6 h-full lg:h-[100px]">
          {mainMenu}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
