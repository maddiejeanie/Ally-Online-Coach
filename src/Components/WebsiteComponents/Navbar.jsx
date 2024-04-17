import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useColorScheme } from '../ColorSchemeContext';

const Navbar = () => {
  const { getNavbarColorSchemeBg, getNavbarColorSchemeText } = useColorScheme();
  const [hamNavOpen, setHamNavOpen] = useState(true);
  const toggleHamNav = () => {
    setHamNavOpen((prevHamNavOpen) => !prevHamNavOpen);
  };


  const NavMenu = (
    <div className="h1 text-xl uppercase font-bold text-white w-full md:flex md:flex-row items-center">
      <div className={`${getNavbarColorSchemeBg(800)} md:bg-inherit`}>
        <Link to="/" className={`px-2 ${getNavbarColorSchemeText(700, true, true)} ${getNavbarColorSchemeText(300, true)} transition delay-200`}>
          Home
        </Link>
      </div>
      <div className={`${getNavbarColorSchemeBg(700)} md:bg-inherit`}>
        <Link to="/blog" className={`px-2 ${getNavbarColorSchemeText(700, true, true)} ${getNavbarColorSchemeText(200, true)} transition delay-200`}>
          Blog
        </Link>
      </div>
      <div className={`${getNavbarColorSchemeBg(600)} md:bg-inherit`}>
        <Link to="/clientcheckin" className={`px-2 ${getNavbarColorSchemeText(700, true, true)} ${getNavbarColorSchemeText(100, true)} transition delay-200`}>
          ClientCheckin
        </Link>
      </div>
      <div className={`${getNavbarColorSchemeBg(500)} md:bg-inherit`}>
        <Link to="/fitfolio" className={`px-2 ${getNavbarColorSchemeText(700, true, true)} ${getNavbarColorSchemeText(200, true)} transition delay-200`}>
          FitFolio
        </Link>
      </div>
      <div className={`${getNavbarColorSchemeBg(400)} md:bg-inherit`}>
        <Link to="/motivateme" className={`px-2 ${getNavbarColorSchemeText(300, true)} ${getNavbarColorSchemeText(700, true, true)} transition delay-200`}>
          MotivateMe
        </Link>
      </div>
      <div className={`${getNavbarColorSchemeBg(300)} md:bg-inherit`}>
        <a
          href="http://instagram.com/"
          className={`px-2 ${getNavbarColorSchemeText(700, true, true)} ${getNavbarColorSchemeText(400, true)} transition delay-200 fa-brands fa-instagram`}
        ></a>
      </div>
    </div>
  );

  return (
    <div className="sticky md:relative top-0 z-50">
      <div className={`flex flex-row items-center justify-between ${getNavbarColorSchemeBg(400)}   p-4`}>
        <div className={`h1 flex items-center justify-center w-10 h-10 p-2 border-0 rounded-full ${getNavbarColorSchemeBg(500)} ${getNavbarColorSchemeBg(700, true)} transition delay-200 text-white text-xl`}>
          <Link to="/">
            <i className="fa-solid fa-dumbbell"></i>
          </Link>
        </div>
        <div className={`hidden md:flex md:w-full`}>{NavMenu}</div>
        <Link to="/contact">
          <button className={`text-white h1 px-4 ${getNavbarColorSchemeBg(500, true)} transition delay-200 border-6 rounded-md text-2xl uppercase font-bold`}>
            Contact
          </button>
        </Link>
        <div
          className={`md:hidden flex items-center space-between pr-4 text-2xl ${getNavbarColorSchemeText(700)} ${
            hamNavOpen ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {hamNavOpen ? (
            <i
              className={`fa-solid fa-bars ${getNavbarColorSchemeText(50, true)} transition delay-200 hover:cursor-pointer`}
              onClick={toggleHamNav}
            ></i>
          ) : (
            <i
              className={`fa-solid fa-xmark ${getNavbarColorSchemeText(50, true)} transition delay-200 hover:cursor-pointer`}
              onClick={toggleHamNav}
            ></i>
          )}
        </div>
      </div>
      {!hamNavOpen && (
        <div className={`absolute left-0 right-0 ${getNavbarColorSchemeBg(300)} flex flex-col justify-center items-center text-center sm:hidden`}>
          {NavMenu}
        </div>
      )}
    </div>
  );
};


export default Navbar;