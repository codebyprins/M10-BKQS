import React from 'react';
import Header from '../Components/header/header';
import Footer from '../Components/Footer/footer';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
