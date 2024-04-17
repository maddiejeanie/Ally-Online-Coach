import React from 'react';
import { Link } from 'react-router-dom';
import { useColorScheme } from '../ColorSchemeContext';

const Footer = () => {
  const { getNavbarColorSchemeBg, getNavbarColorSchemeText } = useColorScheme();

  return (
    <div className={`flex flex-col md:flex-row  ${getNavbarColorSchemeBg(300)} p-4 gap-4 items-center`}>
      <div className="w-full h1 text-2xl uppercase font-bold text-white flex justify-center md:justify-start">
        <p>ALLY ONLINE COACH</p>
      </div>
      <div className="w-full gap-4 h1 text-2xl uppercase font-bold text-white flex flex-row md:justify-end justify-center">
        <div>
          <Link to="/contact">
            <button
              className={`text-white h1 w-2/8 px-2 ${getNavbarColorSchemeBg(400, true)} transition delay-200 rounded-md uppercase font-bold`}
            >
              Contact
            </button>
          </Link>
        </div>
        <div className="md:ml-2 gap-4 flex flex-row items-cente">
          <Link to="http://instagram.com/">
            <i className={` ${getNavbarColorSchemeText(400, true)} transition delay-320 fa-brands fa-instagram`}></i>
          </Link>
          <Link to="http://whatsapp.com/">
            <i className={` ${getNavbarColorSchemeText(400, true)} transition delay-320 fa-brands fa-whatsapp`}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
