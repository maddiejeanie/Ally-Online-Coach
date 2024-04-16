import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamNavOpen, setHamNavOpen] = useState(true);
  const toggleHamNav = () => {
    setHamNavOpen((prevHamNavOpen) => !prevHamNavOpen);
  };

  const getNavbarColorScheme = () => {
    switch (location.pathname) {
      case '/motivateme':
        return 'bg-teal-500 text-teal-100';
      case '/clientcheckin':
        return 'bg-sky-500 text-sky-100';
      case '/fitfolio':
        return 'bg-rose-500 text-rose-100';
      default:
        return 'bg-indigo-700 text-indigo-100';
    }
  };

  const NavMenu = (
    <div className="h1 text-xl uppercase font-bold text-white w-full md:flex md:flex-row items-center">
      <div className="bg-indigo-800 md:bg-inherit">
        <Link to="/" className="px-2 sm:hover:text-indigo-700 hover:text-indigo-300 transition delay-200">
          Home
        </Link>
      </div>
      <div className="bg-indigo-700 md:bg-inherit">
        <Link to="/blog" className="px-2 sm:hover:text-indigo-700 hover:text-indigo-200 transition delay-200">
          Blog
        </Link>
      </div>
      <div className="bg-indigo-600 md:bg-inherit">
        <Link to="/clientcheckin" className="px-2 sm:hover:text-indigo-700 hover:text-indigo-100 transition delay-200">
          ClientCheckin
        </Link>
      </div>
      <div className="bg-indigo-500 md:bg-inherit">
        <Link to="/fitfolio" className="px-2 sm:hover:text-indigo-700 hover:text-indigo-200 transition delay-200">
          FitFolio
        </Link>
      </div>
      <div className="bg-indigo-400 md:bg-inherit">
        <Link to="/motivateme" className="px-2 sm:hover:text-indigo-700 hover:text-indigo-300 transition delay-200">
          MotivateMe
        </Link>
      </div>
      <div className="bg-indigo-300 md:bg-inherit">
        <a
          href="http://instagram.com/"
          className="px-2 sm:hover:text-indigo-700 hover:text-indigo-400 transition delay-200 fa-brands fa-instagram"
        ></a>
      </div>
    </div>
  );

  return (
    <div className="sticky md:relative top-0 z-50">
      <div className="flex flex-row items-center justify-between bg-indigo-300 p-4">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-indigo-500 hover:bg-indigo-200 transition delay-200 text-white text-xl">
          <Link to="/">
            <i className="fa-solid fa-dumbbell"></i>
          </Link>
        </div>
        <div className="hidden md:flex md:w-full">{NavMenu}</div>
        <Link to="/contact">
          <button className="text-white h1 px-4 hover:bg-indigo-400 transition delay-200 border-2 rounded-md text-2xl uppercase font-bold">
            Contact
          </button>
        </Link>
        <div
          className={`md:hidden flex items-center space-between pr-4 text-2xl text-indigo-500 ${
            hamNavOpen ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {hamNavOpen ? (
            <i
              className="fa-solid fa-bars hover:text-indigo-50 transition delay-200 hover:cursor-pointer"
              onClick={toggleHamNav}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark hover:text-indigo-50 transition delay-200 hover:cursor-pointer"
              onClick={toggleHamNav}
            ></i>
          )}
        </div>
      </div>
      {!hamNavOpen && (
        <div className="absolute left-0 right-0 bg-indigo-300 flex flex-col justify-center items-center text-center sm:hidden">
          {NavMenu}
        </div>
      )}
    </div>
  );
};


export default Navbar;