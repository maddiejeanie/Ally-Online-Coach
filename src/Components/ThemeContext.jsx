// ThemeContext.js
import { red } from '@mui/material/colors';
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME_COLOR':
      return { ...state, themeColor: action.payload };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { themeColor: 'indigo' });

  useEffect(() => {
    // Logic to determine themeColor based on pathname
    const newThemeColor =
      window.location.pathname.startsWith("/clients") ? 'sky' 
        : window.location.pathname.startsWith("/blog") ? 'green'
        : window.location.pathname.startsWith("/about") ? 'red' : 'indigo';


    dispatch({ type: 'SET_THEME_COLOR', payload: newThemeColor });
  }, [window.location.pathname]);

  const setThemeColor = (color) => {
    dispatch({ type: 'SET_THEME_COLOR', payload: color });
  };


  return (
    <ThemeContext.Provider value={{ themeColor: state.themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
