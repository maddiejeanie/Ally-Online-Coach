import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ themeColor }) => {
  const footerClass = `flex flex-row items-center bg-${themeColor}-300 p-4 justify-between content-center`;

  return (
    <div className={footerClass}>
      <nav className="w-1/2 items-center justify-start w-5/8 h1 text-2xl uppercase font-bold text-white flex">
        <p>ASHLEY CLANCY ONLINE COACH</p>
      </nav>
      <div className="items-center justify-start w-5/8 h1 text-3xl uppercase font-bold text-white flex flex-col md:flex-row-reverse">
        <div>
          <Link to="/contact">
            <button
              className={`text-white h1 items-center w-2/8 px-2 hover:bg-${themeColor}-400 transition delay-200 border-2 rounded-md text-2xl uppercase font-bold flex justify-end`}
            >
              Contact Me
            </button>
          </Link>
        </div>
        <div className="flex my-2 mx-3">
          <Link to="http://instagram.com/bbyc.xo">
            <i className={`px-2 hover:text-${themeColor}-100 transition delay-320 fa-brands fa-instagram`}></i>
          </Link>
          <div>
            <i className={`px-2 hover:text-${themeColor}-100 transition delay-320 fa-brands fa-whatsapp`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
