import Link from 'next/link';
import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#12123E] w-full h-[80px] p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center h-12">
                {/* Hamburger icon for mobile view */}
                <div className="lg:hidden flex items-center" onClick={toggleMenu}>
                    <button className="text-white">
                        {/* Icon for hamburger menu */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex justify-center items-center w-full space-x-5 text-center gap-6">
                    <li>
                        <Link href="/" className="text-white hover:text-[#9999E2]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-white hover:text-[#9999E2]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#skills" className="text-white hover:text-[#9999E2]">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className="text-white hover:text-[#9999E2]">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-white hover:text-[#9999E2]">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <ul className="lg:hidden absolute top-[80px] left-0 w-full bg-[#12123E] p-4 space-y-4">
                        <li>
                            <Link href="/" className="text-white hover:text-[#9999E2]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-white hover:text-[#9999E2]">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#skills" className="text-white hover:text-[#9999E2]">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-white hover:text-[#9999E2]">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-white hover:text-[#9999E2]">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
