import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

import Header from '../Components/header/header';
import Footer from '../Components/Footer/footer';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            <Header />

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
            <Footer />
        </div>
    );
}
