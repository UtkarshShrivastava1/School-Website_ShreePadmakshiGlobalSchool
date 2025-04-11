import { useState, useEffect } from "react";
import { MoveRight, Search } from "lucide-react";

const WelcomeBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center overflow-hidden bg-white">
      {/* Heading */}
      <h3
        className={`text-4xl md:text-5xl font-extrabold leading-tight mb-6 transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-gray-800">Welcome to </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-pink-500 hover:to-orange-400 transition-all duration-500">
          SHREE PADMAKSHI GLOBAL SCHOOL
        </span>
      </h3>

      {/* Subheading */}
      <p
        className={`text-gray-600 text-lg md:text-xl max-w-2xl mb-10 transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        Where curiosity meets excellence 🌟 and every student&apos;s potential
        is unleashed.
        <br className="hidden md:block" /> Join us in creating tomorrow&apos;s
        leaders, today.{" "}
      </p>

      {/* CTA Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Apply Now Button */}
        <button
          className={`flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-transform duration-300 ${
            isHovered1 ? "scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          Apply Now
          <MoveRight
            className={`transition-transform duration-300 ${
              isHovered1 ? "translate-x-1" : ""
            }`}
            size={18}
          />
        </button>

        {/* Virtual Tour Button */}
        <button
          className={`flex items-center gap-2 border-2 border-gray-400 text-gray-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-shadow duration-300 ${
            isHovered2 ? "shadow-lg" : ""
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          Take a Virtual Tour
          <Search
            className={`transition-opacity duration-300 ${
              isHovered2 ? "opacity-100" : "opacity-50"
            }`}
            size={18}
          />
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;
