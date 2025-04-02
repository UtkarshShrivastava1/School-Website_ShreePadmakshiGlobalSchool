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
     <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">School Unifrom</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
      <p className="text-center text-gray-600 mb-8">
        Our school uniform represents our values and creates a sense of community. 
        Students are expected to wear the appropriate uniform based on the season and activity.
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {uniformTypes.map((uniform) => (
          <button
            key={uniform.id}
            onClick={() => setActiveTab(uniform.id)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-lg transition-all cursor-pointer duration-300
              ${activeTab === uniform.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}
          >
            <span className="text-xl">{uniform.icon}</span>
            <span>{uniform.name}</span>
          </button>
        ))}
      </div>

      {/* Uniform Image Display */}
      {activeTab && (
        <div className="max-w-4xl mx-auto">
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
