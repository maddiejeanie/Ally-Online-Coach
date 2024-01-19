import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import ContactCTA from "../Components/WebsiteComponents/ContactCTA";
import Footer from "../Components/WebsiteComponents/Footer";


const RootLayout = () => {
  const location = useLocation();
  const [themeColor, setThemeColor] = useState('red');

  useEffect(() => {
    // Logic to determine themeColor based on pathname
    setThemeColor(
      location.pathname.startsWith("/clients") ? 'sky' :
      location.pathname.startsWith("/about") ? 'green' :
      location.pathname.startsWith("/") ? 'indigo' : 'red'
    );
  }, [location.pathname]); // Re-run the effect when pathname changes

  console.log("Current location:", location.pathname);
  console.log("Current themeColor:", themeColor);

    const NoContactCTAPage = location.pathname.startsWith("/contact") || location.pathname.startsWith("/clients");

    return (
        <div>
<Navbar  themeColor={themeColor} />
  
            <main>
                <Outlet />
            </main>

            {!NoContactCTAPage && <ContactCTA />}

            <Footer themeColor={themeColor} />
        </div>
    );
};

export default RootLayout;
