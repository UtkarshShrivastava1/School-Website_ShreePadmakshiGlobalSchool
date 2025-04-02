import React from 'react';
import { Link } from 'react-router-dom';
import image4 from '../../assets/c-4.png';

const PrincipalWelcome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center lg:text-left">
            <div className="border-l-4 border-orange-500 pl-4">
              <p className="text-orange-500 font-medium uppercase tracking-wide text-sm">Welcome Message</p>
              <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold text-navy-900 mt-2">From the Principal</h1>
       
            </div>
            
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-gray-800">Mrs. Sweta Singh</h2>
        
              <p className="mt-3 text-gray-600 leading-relaxed">
                On behalf of MLGS community, I would like to welcome all our new families to MLGS to allow you a
                chance to get to know what makes MLGS a very special place for students and families...
              </p>
              
              <div className="mt-6">
                <Link 
                  to="/principal-message" 
                  className="group inline-flex items-center border border-gray-800 px-6 py-2 transition-colors duration-300 
                  hover:bg-orange-500 hover:text-white cursor-pointer rounded-2xl font-medium"
                >
                  READ MORE
                  <svg 
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-full">
              <img 
                src={image4} 
                alt="Principal portrait" 
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalWelcome;