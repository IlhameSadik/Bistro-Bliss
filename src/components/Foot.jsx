import React from 'react';
import { BiRestaurant } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';
import Single from '../image/img2.jpg';
import Sin from '../image/imag3.jpg';
import { Link } from "react-scroll";

const Foot = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">

        {/* Bloc Logo et Réseaux */}
        <div className="w-full md:w-1/4">
          <div className="flex flex-row items-center cursor-pointer">
            <BiRestaurant size={32} />
            <h1 className="text-xl font-semibold ml-2">Bistro Bliss</h1>
          </div>
          <br />
          <p className="text-sm">
            In the new era of technology, we look to the future with certainty and pride for our company.
          </p>

          <div className="flex justify-between md:w-[70%] my-10">
            <div className="flex justify-center space-x-4">
              <BsTwitter size={28} className="hover:text-[#00acee] cursor-pointer" />
              <BsInstagram size={28} className="hover:text-[#d62976] cursor-pointer" />
              <BsFacebook size={28} className="hover:text-[#3b5998] cursor-pointer" />
              <BsYoutube size={28} className="hover:text-[#c4302b] cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bloc Pages */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Pages</h1>
          <nav className="flex flex-col gap-2">
            <Link to="home" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">About</Link>
            <Link to="Menu" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Menu</Link>
            <Link to="review" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Reviews</Link>
                      <Link to="contact" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Contact</Link>

          </nav>
        </div>

        {/* Bloc Menu */}
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <Link to="menu" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Our Dishes</Link>
            <Link to="menu" smooth={true} duration={500} className="hover:text-brightColor transition-all cursor-pointer">Premium Menu</Link>
          </nav>
        </div>

        {/* Bloc Instagram */}
        <div className="my-4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Follow us on Instagram</h1>
          <div className="flex flex-col gap-4">
            <img className="md:w-60 rounded-lg" src={Single} alt="Dish 1" />
            <img className="md:w-60 rounded-lg" src={Sin} alt="Dish 2" />
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <p className="text-center py-4 text-sm border-t border-gray-700">
        Developed by
        <span className="text-[#c4302b] font-semibold"> Ilhame Sadik</span> |
        All rights reserved © {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Foot;
