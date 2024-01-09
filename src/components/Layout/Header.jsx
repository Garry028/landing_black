import React from 'react';
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg";
import bag from "../../assets/bag.svg";
import menu from "../../assets/menu.svg";


const Header = () => {
    return (
        <div className="md:w-[642.8px]  bg-neutral-800 bg-opacity-95  backdrop-blur-sm

        border border-gray-700 rounded-full shadow  p-2 flex items-center justify-around mx-auto sticky top-2 z-50">
            <Link className="rounded-full p-2 md:p-3" to="/">
                <img src={logo} alt="" />
            </Link>
            <nav className="md:flex space-x-4 md:space-x-6 cursor-pointer hidden">
                <Link to="/features" className="text-slate-500 text-sm font-medium font-inter leading-none">Features</Link>
                <Link to="/about" className="text-slate-500 text-sm font-medium font-inter leading-none">About</Link>
                <Link to="/pricing" className="text-slate-500 text-sm font-medium font-inter leading-none">Pricing</Link>
                <Link to="/blog" className="text-slate-500 text-sm font-medium font-inter leading-none">Blog</Link>
            </nav>
            <div className="bg-neutral-700 rounded-full py-[7px] px-[16px] md:gap-1 flex items-center cursor-pointer">
                <div className="w-4 h-4 bg-opacity-80 rounded-full mr-1">
                    <img src={bag} alt="" />
                </div>
                <div className="text-gray-300 text-base font-medium font-inter leading-4">0</div>
            </div>
            <Link to="/signup" className="bg-white rounded-full cursor-pointer hidden md:flex">
                <div className="text-black text-sm font-semibold font-inter leading-none py-[7px] px-[16px]">Sign up</div>
            </Link>
            <div className='block md:hidden'>
                <img src={menu} alt="" />
            </div>
        </div>
    );
};

export default Header;
