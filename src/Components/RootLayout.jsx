import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import ContactCTA from "../Components/WebsiteComponents/ContactCTA";
import Footer from "../Components/WebsiteComponents/Footer";


const RootLayout = () => {
  const location = useLocation()

    const ShouldHaveContactCTAPage = location.pathname === '/' || location.pathname === '/about';

    return (
        <div>
<Navbar  />
  
            <main>
                <Outlet />
            </main>

            {ShouldHaveContactCTAPage && <ContactCTA />}

            <Footer />
        </div>
    );
};

export default RootLayout;
