import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const ColorSchemeContext = createContext();

export const useColorScheme = () => useContext(ColorSchemeContext);

export const ColorSchemeProvider = ({ children }) => {
  const location = useLocation();
  const colorSchemes = {
    '/motivateme': 'teal',
    '/clientcheckin': 'sky',
    '/fitfolio': 'rose',
    default: 'indigo',
  };

  const getColorScheme = () => {
    for (const route in colorSchemes) {
      if (location.pathname.includes(route)) {
        return colorSchemes[route];
      }
    }
    return colorSchemes.default;
  };

  const getNavbarColorSchemeBg = (bgShade, hover) => {
    const scheme = getColorScheme();
    const bgColor = `bg-${scheme}-${bgShade}`;
   
    return hover ? `hover:${bgColor}` : bgColor;
  };

  const getNavbarColorSchemeText = (textShade, hover, sm) => {
    const scheme = getColorScheme();
    const textColor = `text-${scheme}-${textShade}`;
    const className = sm ? `sm:${hover ? 'hover:' : ''}${textColor}` : `${hover ? 'hover:' : ''}${textColor}`;
    console.log(className)

    return sm ? `sm:hover:${textColor}` : (hover ? `hover:${textColor}` : textColor);
  };

  return (
    <ColorSchemeContext.Provider value={{ getNavbarColorSchemeBg, getNavbarColorSchemeText }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
