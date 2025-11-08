import React, { useState } from 'react';
import { BiRestaurant } from 'react-icons/bi';
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <BiRestaurant size={32} />
          <h1 className="text-xl font-semibold ml-2">Bistro Bliss</h1>
        </div>
        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="home" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">About</Link>
          <Link to="menu" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Menu</Link>
          <Link to="review" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Reviews</Link>
                 <Link to="contact" smooth={true} duration={500} className="hover:text-gray-800 cursor-pointer">Contact</Link>

        </nav>
      </div>
    </div>
  );
};

export default Navbar;
