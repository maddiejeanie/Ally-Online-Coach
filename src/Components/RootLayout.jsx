import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/WebsiteComponents/Navbar";
import ContactCTA from "../Components/WebsiteComponents/ContactCTA";
import Footer from "../Components/WebsiteComponents/Footer";

const RootLayout = () => {
    const location = useLocation();

    const NoContactCTAPage = location.pathname.startsWith("/contact") || location.pathname.startsWith("/clients");

    return (
        <div>
            <Navbar />

            <main>
                <Outlet />
            </main>

            {!NoContactCTAPage && <ContactCTA />}

            <Footer />
        </div>
    );
};

export default RootLayout;
