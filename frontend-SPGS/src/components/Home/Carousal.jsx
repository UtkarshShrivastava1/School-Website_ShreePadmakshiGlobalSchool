import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import School from "../../assets/School.jpg";
import BusStaff from "../../assets/Transport/BusStaff.jpg";
import Bus from "../../assets/Transport/Bus.jpg";
import BioLab from "../../assets/LabAndLibrary/BioLab.jpeg";
import Classroom from "../../assets/Classroom/ClassN1.jpg";
import Library from "../../assets/LabAndLibrary/Library_2.jpg";
import PhyLab from "../../assets/LabAndLibrary/PhyLab.jpeg";
import ChemLab from "../../assets/LabAndLibrary/ChemLab.jpeg";

const Carousal = () => {
  const images = [
    {
      image: School,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Modern Secure and Safe Infrastructure @ SPGS Bilaspur",
    },
    {
      image: Bus,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Bus Facility @ SPGS Bilaspur",
    },
    {
      image: BusStaff,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Bus Facility @ SPGS Bilaspur",
    },
    {
      image: Classroom,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "State-of-the-Art Classrooms @ SPGS Bilaspur",
    },
    {
      image: Library,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "A Well-Stocked Library @ SPGS Bilaspur",
    },

    {
      image: BioLab,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Exploring Life Sciences @ SPGS Bilaspur",
    },
    {
      image: PhyLab,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Hands-On Learning in Physics @ SPGS Bilaspur",
    },
    {
      image: ChemLab,
      location:
        "Main Road, Near Over Bridge Uslapur, Bilaspur C.G., Bilaspur Chhattisgarh, India 495001",
      text: "Experimenting with Science @ SPGS Bilaspur",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-[600px] sm:h-[600px] bg-cover bg-center flex flex-col justify-center text-white px-6 sm:px-8"
        style={{ backgroundImage: `url(${images[current].image})` }}
      >
        <h2 className="text-lg sm:text-4xl font-bold text-center sm:text-left">
          {images[current].text}
        </h2>
        <p className="text-md sm:text-lg mt-2 text-center sm:text-left">
          CBSE Affiliation No : 3330519
        </p>
        <p className="absolute bottom-5 left-6 sm:left-8 text-sm sm:text-md">
          📍 {images[current].location}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-gray-800/50 p-2 sm:p-3 rounded-full"
      >
        <ChevronLeft className="text-white cursor-pointer" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-gray-800/50 p-2 sm:p-3 rounded-full"
      >
        <ChevronRight className="text-white cursor-pointer" />
      </button>

      <div className="absolute bottom-0 w-full bg-white p-3 sm:p-4 rounded-t-lg shadow-lg sm:mt-1.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-center">
          <div className="flex-1">
            <h3 className="text-black font-bold text-lg sm:text-sm">
              Pre-Primary
            </h3>
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
