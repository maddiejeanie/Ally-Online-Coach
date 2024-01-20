// ThemeContext.js
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
      window.location.pathname.startsWith("/clients") ? 'sky' : 'indigo';

    console.log('Setting theme color:', newThemeColor);
    console.log('Current pathname:', window.location.pathname);

    dispatch({ type: 'SET_THEME_COLOR', payload: newThemeColor });
  }, []); // Run once on component mount

  const setThemeColor = (color) => {
    console.log('Setting theme color (via setThemeColor):', color);
    dispatch({ type: 'SET_THEME_COLOR', payload: color });
  };

  console.log('Current theme state:', state.themeColor);

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
