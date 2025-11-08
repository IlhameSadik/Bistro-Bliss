import React from "react";
import img from "../assets/img/hero2.jpg";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-22 px-5 mt-10">
    <img src={img} alt="img" className="w-1/3 h-auto object-contain mt-4 ml-2" />
    <div></div>
    <div></div>
    <div></div>
    <div className="space-y-4 lg:pt-14 mt-20 ml-20">


      <h1 className="font-semibold text-4xl text-center md:text-start">
        We provide healthy food for your family

      </h1>
        <p className="text-2xl">
        Discover the joy of providing your family with the gift of health through our carefully curated selection of nutritious meals. Our commitment to your well-being is reflected in every dish, ensuring that each bite not only satisfies the palate but also contributes to a healthier lifestyle.
        </p>
        <p className="text-2xl">
        Elevate your family's dining experience with our delicious and health-conscious offerings. From fresh ingredients to expertly crafted recipes, we strive to create a culinary journey that brings joy, flavor, and vitality to your table. Nourish your loved ones with the wholesome goodness they deserve.
        </p>
        
      </div>
    </div>
  );
};

export default About;