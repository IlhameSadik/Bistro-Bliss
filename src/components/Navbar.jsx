import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className="fixed w-full z-50">
      {/* Navbar Container */}
      <div className="flex flex-row justify-between items-center p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* Logo */}
        <div className="flex flex-row items-center cursor-pointer">
          <BiRestaurant size={32} className="text-red-800" />
          <h1 className="text-xl font-semibold ml-2 text-gray-800">Bistro Bliss</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="home" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">About</Link>
          <Link to="menu" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Menu</Link>
          <Link to="review" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Reviews</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Contact</Link>
        </nav>

        {/* Mobile Burger Icon */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-6 space-y-6 text-lg font-medium">
          <Link onClick={closeMenu} to="home" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Home</Link>
          <Link onClick={closeMenu} to="about" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">About</Link>
          <Link onClick={closeMenu} to="menu" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Menu</Link>
          <Link onClick={closeMenu} to="review" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Reviews</Link>
          <Link onClick={closeMenu} to="contact" smooth={true} duration={500} className="hover:text-red-700 cursor-pointer">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
