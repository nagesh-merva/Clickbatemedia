import React, { useState } from 'react';
import { AiOutlineClose, AiFillPhone } from 'react-icons/ai';
import logo from "./logo.png";
import { Link } from 'react-router-dom';

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="z-30 fixed flex items-center top-5 left-1/2 transform -translate-x-1/2 w-10/12 h-16 rounded-full bg-gray-950/90" style={{ boxShadow: "inset 0 0 20px 2px rgba(149, 147, 135, 0.3)" }}>
                <img src={logo} className="w-1/3 h-fit pl-4 md:w-fit md:h-10 md:pl-8 p-4 md:p-2" alt="logo" />
                <div className="hidden md:flex pl-10 w-fit h-full justify-center items-center space-x-8">
                    <Link className="font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" to="/">Home</Link>
                    <Link className="font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" to="/about-us">About Us</Link>
                    <Link className="font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" to="/our-services">Services</Link>
                    <Link className="font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" to="/contactus">Contact Us</Link>
                </div>
                <div className="absolute right-8 hidden md:flex w-fit h-full justify-center items-center space-x-4">
                    <a className="font-poppins no-underline font-normal text-gray-500 hover:text-blue-500 hover:scale-105 transition-colors" href="tel:+917264833272"><li className="bx bxs-phone"></li> +91 7264833272</a>
                    <Link className="font-poppins no-underline text-sm font-normal bg-blue-500 h-10 w-fit p-4 flex items-center rounded-full text-white hover:text-gray-200 hover:scale-105 transition-colors" to="/contactus">Contact Us</Link>
                </div>
                <div className="relative md:hidden ml-auto pr-4">
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                        <span className="block w-6 h-0.5 bg-white"></span>
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
                    <div className="bg-white w-80 h-full flex flex-col justify-between">
                        <div className="flex justify-end p-4">
                            <button className="text-black" onClick={toggleMenu} aria-label="Close menu">
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <div className="flex-grow flex flex-col justify-between px-4">
                            <ul className="space-y-4">
                                <li>
                                    <Link to="/" className="text-lg text-black font-semibold" onClick={toggleMenu}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="text-lg text-black font-semibold" onClick={toggleMenu}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/our-services" className="text-lg text-black font-semibold" onClick={toggleMenu}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog" className="text-lg text-black font-semibold" onClick={toggleMenu}>
                                        Work
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contactus" className="text-lg text-black font-semibold" onClick={toggleMenu}>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            <div className="mt-2 border-t pt-2">
                                <a href="tel://+91 9354548685" className="flex items-center text-black py-2">
                                    <AiFillPhone className="mr-2" />
                                    <span className="ltr"><small>+91 9354548685</small></span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4">
                            <Link to="/contactus" className="block text-center bg-blue-600 text-white py-2 rounded" onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
