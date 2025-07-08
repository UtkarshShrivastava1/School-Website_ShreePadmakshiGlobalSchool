import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import School from "../../assets/School.jpg";
import SchoolFront from "../../assets/SchoolFront.jpg";
import Bus from "../../assets/Transport/Bus.jpg";
import BioLab from "../../assets/LabAndLibrary/BioLab.jpeg";
import Classroom from "../../assets/Classroom/ClassN1.jpg";
import Library from "../../assets/LabAndLibrary/Library_2.jpg";
import PhyLab from "../../assets/LabAndLibrary/PhyLab.jpeg";
import ChemLab from "../../assets/LabAndLibrary/ChemLab.jpeg";

const Carousal = () => {
  const images = [
    { image: School, text: "Modern Secure and Safe Infrastructure" },
    { image: Bus, text: "Bus Facility Available" },
    { image: SchoolFront, text: "Students at Our Campus" },
    { image: Classroom, text: "State-of-the-Art Classrooms" },
    { image: Library, text: "A Well-Stocked Library" },
    { image: BioLab, text: "Exploring Life Sciences" },
    { image: PhyLab, text: "Hands-On Learning in Physics" },
    { image: ChemLab, text: "Experimenting with Science" },
  ];

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const totalSlides = images.length;

  // Clone first slide and add to end for smooth looping
  const extendedImages = [...images, images[0]];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransitioning(true);
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(totalSlides - 1);
      setTransitioning(false); // Instantly jump back without animation
      setTimeout(() => {
        setTransitioning(true);
      }, 50);
    } else {
      setCurrent((prev) => prev - 1);
      setTransitioning(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // When we reach the fake clone (last slide), snap back to the real one
  useEffect(() => {
    if (current === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
      }, 1000); // match the transition duration
      return () => clearTimeout(timeout);
    }
  }, [current]);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${
            transitioning ? "transition-transform duration-[1000ms] ease-[cubic-bezier(0.75,0,0.25,1)]" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-[400px] md:h-[600px] bg-cover bg-center flex flex-col justify-end items-baseline lg:justify-center text-white px-6 text-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
                {item.text}
              </h2>
              <p className="text-sm sm:text-lg mt-2 hidden lg:block">
                CBSE Affiliation No: 3330519
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 bg-gray-800/50 p-2 md:p-3 rounded-full cursor-pointer"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 bg-gray-800/50 p-2 md:p-3 rounded-full cursor-pointer"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Section Info */}
      <div className="absolute bottom-0 w-full bg-white p-3 md:p-4 rounded-t-lg shadow-lg hidden lg:block">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center">
          {[
            { title: "Pre-Primary", subtitle: "Playgroup to Sr.KG" },
            { title: "Primary", subtitle: "Grade 1 to 5" },
            { title: "Middle School", subtitle: "Grade 6 to 8" },
            { title: "Upper School", subtitle: "Grade 10 to 12" },
          ].map((section, index) => (
            <div key={index} className="flex-1">
              <h3 className="text-black font-bold text-lg md:text-xl">
                {section.title}
              </h3>
              <p className="text-sm md:text-md">{section.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
