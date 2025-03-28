import React from 'react';
import image4 from '../../assets/c-4.png';

const PrincipalWelcome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg  overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <div className="border-l-4 border-red-700 pl-4">
              <p className="text-red-700 font-medium uppercase tracking-wide text-sm">WELCOME MESSAGE</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mt-2">From the Principal</h1>
            </div>
            
            <div className="mt-8">
              <h2 className="font-semibold text-lg text-gray-800">Ms. xyz</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                On behalf of mlgs community, I would like to welcome all our new families to mlgs to allow you a
                chance to get to know what makes mlgs a very special place for students and families...
              </p>
              
              <div className="mt-8">
                <button className="group inline-flex items-center border border-gray-800 px-6 py-2 transition-colors hover:bg-gray-800 hover:text-white">
                  <span className="font-medium">READ MORE</span>
                  <svg 
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-2 -right-2 w-full h-full bg-red-700 rounded-tr-lg rounded-br-lg"></div>
            <div className="relative h-64 md:h-80 lg:h-full overflow-hidden">
              <img 
                src={image4} 
                alt="Principal portrait" 
                className="w-[87vh] h-full object-cover object-center"
              />
              {/* School building overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalWelcome;