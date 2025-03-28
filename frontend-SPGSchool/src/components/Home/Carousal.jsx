import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import image1 from "../../assets/c-1.png";

const Carousal = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/6859240/pexels-photo-6859240.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      location: "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Modern Secure and Safe Infrastructure @ MLZS Bilaspur",
    },
    {
      url: "https://images.pexels.com/photos/1633791/pexels-photo-1633791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Modern Secure and Safe Infrastructure @ MLZS Bilaspur",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-[400px] sm:h-[600px] bg-cover bg-center flex flex-col justify-center text-white px-6 sm:px-8"
        style={{ backgroundImage: `url(${images[current].url})` }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">{images[current].text}</h1>
        <p className="text-md sm:text-lg mt-2 text-center sm:text-left">CBSE Affiliation No :  3330519</p>
        <p className="absolute bottom-5 left-6 sm:left-8 text-sm sm:text-md">📍 {images[current].location}</p>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-gray-800/50 p-2 sm:p-3 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-gray-800/50 p-2 sm:p-3 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>
      
      <div className="absolute bottom-0 w-full bg-white p-3 sm:p-4 rounded-t-lg shadow-lg sm:mt-1.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center">
          <div className="flex-1">
            <h3 className="text-black font-bold text-lg sm:text-sm">Pre-Primary</h3>
            <p className="text-sm">Playgroup to Sr.KG</p>
          </div>
          <div className="h-px w-12 sm:h-12 sm:w-px bg-gray-300"></div>
          <div className="flex-1">
            <h3 className="text-black font-bold text-lg">Primary</h3>
            <p className="text-sm">Grade 1 to 5</p>
          </div>
          <div className="h-px w-12 sm:h-12 sm:w-px bg-gray-300"></div>
          <div className="flex-1">
            <h3 className="text-black font-bold text-lg">Middle School</h3>
            <p className="text-sm">Grade 6 to 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
