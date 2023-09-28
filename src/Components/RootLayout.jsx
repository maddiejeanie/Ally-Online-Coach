import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactCTA from "./ContactCTA";

const RootLayout = () => {
    const location = useLocation();

    const isContactPage = location.pathname.startsWith("/contact");

    return (
        <div>
            <Navbar />

            <main>
                <Outlet />
            </main>

            {!isContactPage && <ContactCTA />}

            <Footer />
        </div>
    );
};

export default RootLayout;
