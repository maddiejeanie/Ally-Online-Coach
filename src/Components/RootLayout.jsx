import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import Footer from "../Components/WebsiteComponents/Footer";
import { ColorSchemeProvider } from './ColorSchemeContext';

const RootLayout = () => {

  return (
    <ColorSchemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-1 bg-white sm:py-2 flex flex-col`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ColorSchemeProvider>
  );
};
export default RootLayout;
