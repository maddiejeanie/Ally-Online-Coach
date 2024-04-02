import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-indigo-300 p-4 gap-4 items-center">
      <div className="w-full h1 text-2xl uppercase font-bold text-white flex justify-center md:justify-start">
        <p>ALLY ONLINE COACH</p>
      </div>
      <div className="w-full gap-4 h1 text-3xl uppercase font-bold text-white flex flex-row md:justify-end justify-center">
        <div>
          <Link to="/contact">
            <button
              className={`text-white h1 w-2/8 px-2 hover:bg-indigo-400 transition delay-200 border-2 rounded-md text-2xl uppercase font-bold`}
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="md:ml-2 gap-4 flex flex-row items-cente">
          <Link to="http://instagram.com/">
            <i className={` hover:text-indigo-100 transition delay-320 fa-brands fa-instagram`}></i>
          </Link>
          <Link to="http://whatsapp.com/">
            <i className={` hover:text-indigo-100 transition delay-320 fa-brands fa-whatsapp`}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
