import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import './guestlayout.css';

import Header from '../Components/header/header';
import Footer from '../Components/Footer/footer';

export default function GuestLayout({ children }) {
    return (
        <div className="guest-layout">
            <Header />

            <div className="">
                {children}
            </div>
            <Footer />
        </div>
    );
}
