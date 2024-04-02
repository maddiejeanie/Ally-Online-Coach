import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hamNavOpen, setHamNavOpen] = useState(true);

  const toggleHamNav = () => {
    setHamNavOpen((prevHamNavOpen) => !prevHamNavOpen);
  };

  const NavMenu = (
    <div className="h1 text-xl uppercase font-bold text-white w-full md:flex md:flex-row items-center">
      <div className="bg-indigo-800 md:bg-inherit">
        <Link to="/" className="px-2 hover:text-indigo-700 transition delay-200">Home</Link>
      </div>
      <div className="bg-indigo-700 md:bg-inherit">
        <Link to="/blog" className="px-2 hover:text-indigo-700 transition delay-200">Blog</Link>
      </div>
      <div className="bg-indigo-600 md:bg-inherit">
        <Link to="/clients" className="px-2 hover:text-indigo-700 transition delay-200">Client Checkin</Link>
      </div>
      <div className="bg-indigo-500 md:bg-inherit">
        <Link to="/fitfolio" className="px-2 hover:text-indigo-700 transition delay-200">FitFolio</Link>
      </div>
      <div className="bg-indigo-400 md:bg-inherit">
        <Link to="/motivateme" className="px-2 hover:text-indigo-700 transition delay-200">MotivateMe</Link>
      </div>
      <div className="bg-indigo-300 md:bg-inherit">
        <a href="http://instagram.com/" className="px-2 hover:text-indigo-700 transition delay-200 fa-brands fa-instagram"></a>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-row items-center justify-between bg-indigo-300 p-4">
        <div className="h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full bg-indigo-500 text-white text-xl">
          <i className="fa-solid fa-dumbbell"></i>
        </div>

        <div className="hidden md:flex md:w-full">{NavMenu}</div>

        <Link to="/contact">
          <button className="text-white h1 px-4 hover:bg-indigo-400 transition delay-200 border-2 rounded-md text-2xl uppercase font-bold">
            Contact
          </button>
        </Link>

        <div className={`md:hidden flex items-center space-between pr-4 text-2xl text-indigo-500 ${hamNavOpen ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {hamNavOpen ?
            <i className="fa-solid fa-bars hover:text-indigo-50 transition delay-200 hover:cursor-pointer" onClick={toggleHamNav}></i> :
            <i className="fa-solid fa-xmark hover:text-indigo-50 transition delay-200 hover:cursor-pointer" onClick={toggleHamNav}></i>
          }
        </div>
      </div>

      {hamNavOpen ? null : (
        <div className="flex flex-col md:hidden justify-center items-center text-center">
          {NavMenu}
        </div>
      )}
    </>
  );
};

export default Navbar;
