import React from "react";

const Button = ({ title, className = "", onClick, href }) => {
  // Si un href est fourni, on rend un <a> pour le lien
  if (href) {
    return (
      <a
        href={href}
        className={`
          px-6 sm:px-10 py-3 sm:py-5
          border-2 border-brightColor
          text-brightColor
          bg-gradient-to-r from-red-600 to-red-900
          rounded-full
          text-base sm:text-lg font-bold
          transition-all
          hover:text-black hover:shadow-lg
          ${className}
        `}
      >
        {title}
      </a>
    );
  }

  // Sinon, c’est un bouton normal avec onClick
  return (
    <button
      onClick={onClick}
      className={`
        px-6 sm:px-10 py-3 sm:py-5
        border-2 border-brightColor
        text-brightColor
        bg-gradient-to-r from-red-600 to-red-900
        rounded-full
        text-base sm:text-lg font-bold
        transition-all
        hover:text-black hover:shadow-lg
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;
