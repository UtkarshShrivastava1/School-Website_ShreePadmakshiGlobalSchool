"use client";
import { Link } from "react-router-dom";
import { useState } from "react";

const SchoolTourSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredBook, setIsHoveredBook] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-white to-orange-200 text-white py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-orange-600 rounded-full opacity-30 transform -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-600 rounded-full opacity-30 transform translate-x-16 translate-y-16"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-orange-600 rounded-full opacity-20"></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10 text-gray-800">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform transition-transform duration-700 hover:scale-105">
          Book a School Tour
        </h2>

        <p className="text-lg md:text-xl mb-12 max-w-2xl">
          We offer school tours from Monday to Saturday, and we warmly welcome
          walk-ins.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center justify-center">
          {/* NOW Button */}
          <Link to="/contact" onClick={scrollToTop} className="flex">
            <button
              className={`relative overflow-hidden bg-white text-yellow-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium rounded shadow-lg transform transition-all duration-300 ${
                isHovered ? "scale-105 shadow-xl" : ""
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">NOW</span>
              <span
                className={`absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 transition-opacity duration-300 ${
                  isHovered ? "opacity-20" : ""
                }`}
              ></span>
            </button>
          </Link>

          {/* BOOK A SCHOOL TOUR Button */}
          <Link to="/contact" onClick={scrollToTop} className="flex">
            <button
              className={`relative overflow-hidden border-2 border-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 ${
                isHoveredBook
                  ? "bg-white text-gray-600 shadow-xl transform scale-105"
                  : ""
              }`}
              onMouseEnter={() => setIsHoveredBook(true)}
              onMouseLeave={() => setIsHoveredBook(false)}
            >
              <span className="font-medium">BOOK A SCHOOL TOUR</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500 ${
                  isHoveredBook ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M8 12H16M16 12L12 8M16 12L12 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolTourSection;
