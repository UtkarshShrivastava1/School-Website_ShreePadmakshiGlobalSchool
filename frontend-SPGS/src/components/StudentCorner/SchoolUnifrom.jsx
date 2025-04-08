import summerUnifrom from "../../assets/Summer_uniform.jpg";
import winterUniform from "../../assets/Winter_uniform.jpg";
import sportUnifrom from "../../assets/Sport_uniform.jpg";
import React, { useState } from 'react';

const UniformGuidelines = () => {
  const [activeTab, setActiveTab] = useState(null);

  const uniformTypes = [
    { 
      id: 'sports', 
      name: 'Sports Uniform', 
      icon: '🏅',
      image: sportUnifrom
    },
    { 
      id: 'summer', 
      name: 'Summer Uniform', 
      icon: '☀️',
      image: summerUnifrom
    },
    { 
      id: 'winter', 
      name: 'Winter Uniform', 
      icon: '❄️',
      image: winterUniform
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-12">
     <div className="flex items-center justify-center mb-6 md:mb-10 px-4 md:px-0">
  <div className="w-12 md:w-1/5 lg:w-1/4 h-px bg-gray-300 flex-shrink-0"></div>
  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-2 sm:px-4 md:px-6 text-center">
  School Uniform 
  </h2>
  <div className="w-12 md:w-1/5 lg:w-1/4 h-px bg-gray-300 flex-shrink-0"></div>
</div>
      <p className="text-center text-gray-600 mb-8">
        Our school uniform represents our values and creates a sense of community. 
        Students are expected to wear the appropriate uniform based on the season and activity.
      </p>

    {/* Tabs */}
<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:space-x-4 mb-4 md:mb-8 px-2">
  {uniformTypes.map((uniform) => (
    <button
      key={uniform.id}
      onClick={() => setActiveTab(uniform.id)}
      className={`
        flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg transition-all cursor-pointer duration-300 text-xs sm:text-sm md:text-base
        ${activeTab === uniform.id 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
      `}
    >
      <span className="text-lg sm:text-xl">{uniform.icon}</span>
      <span className="whitespace-nowrap">{uniform.name}</span>
    </button>
  ))}
</div>

{/* Uniform Image Display */}
{activeTab && (
  <div className="max-w-4xl mx-auto px-2 sm:px-4">
    <img 
      src={uniformTypes.find(u => u.id === activeTab).image}
      alt={`${activeTab} uniform`}
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
)}
    </div>
  );
};

export default UniformGuidelines;
