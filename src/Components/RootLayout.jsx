import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import ContactCTA from "../Components/WebsiteComponents/ContactCTA";
import Footer from "../Components/WebsiteComponents/Footer";

const RootLayout = () => {
    const location = useLocation();

    const ClientsHeader =  <div className="flex flex-col items-center justify-center my-4">
    <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-300 bg-clip-text pb-4">
      <h1 className="p-4 h1 text-6xl uppercase text-shadow flex items-center text-transparent">
        Client Check-In
      </h1>
    </div>
  </div>

    const NoContactCTAPage = location.pathname.startsWith("/contact") || location.pathname.startsWith("/clients");

    return (
        <div>
            <Navbar />
            {location.pathname.startsWith("/clients") ? ClientsHeader : null}
            <main>
                <Outlet />
            </main>

            {!NoContactCTAPage && <ContactCTA />}

            <Footer />
        </div>
    );
};

export default RootLayout;
