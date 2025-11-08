import React from "react";
import { scroller } from "react-scroll";
import Button from "../layouts/Button";

const Acceuil = () => {
  const scrollToMenu = () => {
    scroller.scrollTo("menu", {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-[url('./assets/img/hero1.jpg')] bg-cover bg-center bg-no-repeat px-5 sm:px-10"
    >
      {/* Contenu principal */}
      <div className="max-w-3xl space-y-6 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-md">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
          Best Food for Your Taste
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Discover delectable cuisine and unforgettable moments in our welcoming
          culinary haven.
        </p>

        {/* Bouton centré avec scroll */}
        <div className="flex justify-center">
          <Button title="Our Dishes" onClick={scrollToMenu} />
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
