import React, { useState, useEffect } from 'react';

const WelcomeBanner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  
  useEffect(() => {
    // Set a small timeout to ensure the animation plays after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden">
      <h1 
        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transform transition-all duration-1000 ease-out ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <span className="text-black">Welcome to </span>
        <span className="text-red-700 hover:text-red-800 transition-colors duration-300">Mount Litera Zee School</span>
      </h1>
      
      <p 
        className={`text-gray-600 text-lg md:text-xl max-w-2xl mb-8 transition-all duration-1000 ease-out delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        Where curiosity meets excellence, and every student's potential is
        unleashed. Join us in creating tomorrow's leaders, today.
      </p>
      
      <div 
        className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out delay-500 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <button 
          className={`bg-gradient-to-r from-red-700 to-red-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform ${isHovered1 ? 'scale-105 shadow-lg' : ''}`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          Apply Now
          <span className={`ml-2 transition-transform duration-300 inline-block ${isHovered1 ? 'translate-x-1' : ''}`}>→</span>
        </button>
        
        <button 
          className={`bg-transparent border border-red-600 text-gray-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-all duration-300 ${isHovered2 ? 'shadow-lg' : ''}`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          Take a Virtual Tour
          <span className={`ml-2 transition-opacity duration-300 inline-block ${isHovered2 ? 'opacity-100' : 'opacity-0'}`}>🔍</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeBanner;