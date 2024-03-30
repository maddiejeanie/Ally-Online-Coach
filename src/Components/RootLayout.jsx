import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import Footer from "../Components/WebsiteComponents/Footer";


const RootLayout = () => {
  const location = useLocation()


    return (
        <div>
<Navbar  />
  
            <main>
                <Outlet />
            </main>


            <Footer />
        </div>
    );
};

export default RootLayout;
