import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/contact" ? null : <Header />}
            {children}
            {
                location.pathname === "/contact" ? null :
                    <div className='bg-black h-screen p-2 md:p-20'>
                        <Footer />
                    </div>
            }
        </>
    )
}

export default Layout