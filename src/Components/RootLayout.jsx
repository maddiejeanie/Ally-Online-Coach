import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import Footer from "../Components/WebsiteComponents/Footer";
import { ColorSchemeProvider, useColorScheme } from './ColorSchemeContext';

const RootLayout = () => {
  return (
    <ColorSchemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <OutletWithBackground />
        <Footer />
      </div>
    </ColorSchemeProvider>
  );
};

const OutletWithBackground = () => {
  const { getNavbarColorSchemeBg } = useColorScheme();

  return (
    <main className={`flex-1 ${getNavbarColorSchemeBg(100)} sm:py-2 flex flex-col`}>
      <Outlet />
    </main>
  );
};

export default RootLayout;