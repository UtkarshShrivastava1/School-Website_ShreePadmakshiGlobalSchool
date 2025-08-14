import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import School from "../../assets/School.jpg";
import SchoolFront from "../../assets/SchoolFront.jpg";
import Bus from "../../assets/Transport/Bus.jpg";
import BioLab from "../../assets/LabAndLibrary/BioLab.jpeg";
// import Classroom from "../../assets/Classroom/ClassN1.jpg";
import Library from "../../assets/LabAndLibrary/Library_2.jpg";
import PhyLab from "../../assets/LabAndLibrary/PhyLab.jpeg";
import ChemLab from "../../assets/LabAndLibrary/ChemLab.jpeg";

const Carousal = () => {
  const images = [
    { image: School, text: "Modern Secure and Safe Infrastructure" },
    { image: Bus, text: "Bus Facility Available" },
    { image: SchoolFront, text: "Students at Our Campus" },
    // { image: Classroom, text: "State-of-the-Art Classrooms" },
    { image: Library, text: "A Well-Stocked Library" },
    { image: BioLab, text: "Exploring Life Sciences" },
    { image: PhyLab, text: "Hands-On Learning in Physics" },
    { image: ChemLab, text: "Experimenting with Science" },
  ];

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const totalSlides = images.length;
  const extendedImages = [...images, images[0]];

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransitioning(true);
  };

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(totalSlides - 1);
      setTransitioning(false);
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

  useEffect(() => {
    if (current === totalSlides) {
      const timeout = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [current, totalSlides]);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
      <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex ${
            transitioning
              ? "transition-transform duration-[1000ms] ease-[cubic-bezier(0.75,0,0.25,1)]"
              : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((item, index) => (
            <div
              key={index}
               loading='lazy'
              className="min-w-full h-[400px] md:h-[600px] relative bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 flex flex-col justify-end items-center lg:justify-center text-white text-center px-6 h-full">
                <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-md">
                  {item.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 md:left-6 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-30"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 md:right-6 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-30"
      >
        <ChevronRight />
      </button>

      {/* School Levels Section */}
      <div className="absolute bottom-0 w-full bg-white p-4 md:p-6 rounded-t-3xl shadow-lg hidden lg:block">
        <div className="flex flex-col md:flex-row items-center justify-around text-center gap-4">
          {[
            { title: "Pre-Primary", subtitle: "Playgroup to Sr.KG" },
            { title: "Primary", subtitle: "Grade 1 to 5" },
            { title: "Middle School", subtitle: "Grade 6 to 8" },
            { title: "Upper School", subtitle: "Grade 10 to 12" },
          ].map((section, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-black font-extrabold text-lg md:text-2xl">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-md mt-1">
                {section.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
