import React from 'react';
import transport from '../../assets/transport.jpg';

const TransportFacilities = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* <div className="flex items-center justify-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
          <rect x="7" y="14" width="4" height="4" />
          <rect x="13" y="14" width="4" height="4" />
        </svg> */}
        <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Transport Facilities</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      {/* </div> */}
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-1/2">
          <div className="w-full p-8">
            <img src={transport} alt="School Bus" className="w-full h-auto rounded" />
          </div>
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12V19C4 19.5523 4.44772 20 5 20H6C6.55228 20 7 19.5523 7 19V18H17V19C17 19.5523 17.4477 20 18 20H19C19.5523 20 20 19.5523 20 19V12L18 6C17.8162 5.44752 17.2915 5 16.7103 5H7.2897C6.70852 5 6.18384 5.44752 6 6L4 12Z" />
                <circle cx="7.5" cy="15.5" r="1.5" />
                <circle cx="16.5" cy="15.5" r="1.5" />
                <path d="M3 12H21" />
                <path d="M7 5V8" />
                <path d="M17 5V8" />
              </svg>
              <h2 className="text-2xl font-bold">School Transport</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Our fleet of modern, well-maintained buses provides safe and reliable transportation for students across the city.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>GPS-enabled buses with real-time tracking for parents</span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Experienced drivers and attendants on every bus</span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Regular maintenance and safety inspections</span>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Comfortable seating with seat belts for all students</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right section */}
        <div className="bg-white rounded-lg shadow-md p-6 md:w-1/2">
        <div className="flex items-center justify-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-500 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="M3 9V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" />
          <rect x="7" y="14" width="4" height="4" />
          <rect x="13" y="14" width="4" height="4" />
        </svg>
        <h1 className="text-xl font-bold ">Transport Guidelines</h1>
      </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Safety Protocols</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>All buses equipped with first-aid kits and fire extinguishers</li>
              <li>Regular safety drills conducted for students and transport staff</li>
              <li>Strict speed limits enforced for all school vehicles</li>
              <li>CCTV cameras installed in all buses for enhanced security</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Bus Routes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comprehensive coverage of all major residential areas</li>
              <li>Optimized routes to minimize travel time</li>
              <li>Route maps available on the school website and parent portal</li>
              <li>Special routes available for after-school activities</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Pick-up and Drop-off</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Students must be at designated stops 5 minutes before scheduled time</li>
              <li>Parents/guardians must be present at drop-off points for younger students</li>
              <li>ID cards mandatory for all students using transport facilities</li>
              <li>Mobile app notifications sent before bus arrival at each stop</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Bus Conduct</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Students must remain seated with seatbelts fastened at all times</li>
              <li>Respectful behavior towards drivers, attendants, and fellow students</li>
              <li>No eating or drinking allowed on the bus</li>
              <li>Personal belongings must be kept secure and aisles clear</li>
            </ul>
          </div>
          
          {/* <div className="mt-4">
            <a href="#" className="text-blue-500 flex items-center">
              View Complete Transport Policy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TransportFacilities;