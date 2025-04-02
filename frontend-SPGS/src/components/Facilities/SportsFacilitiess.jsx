import React from 'react';
import football from '../../assets/football.jpg';
import basketball from '../../assets/basketball.jpg';
import kidsPark from '../../assets/kids-park.jpg';
import racingTrack from '../../assets/racing-track.jpg';
import sketing from '../../assets/sketing.jpg';
import swimming from '../../assets/swimming.jpg';

const SportsFacilities = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <h1 className="text-4xl font-bold text-center mb-4">Sports Facilities</h1> */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Sports Facilities</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
      
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Our comprehensive sports infrastructure promotes physical fitness, teamwork, and healthy
        competition among students.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basketball Courts */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={basketball}
              alt="Basketball Courts" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10" />
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Basketball Courts</h2>
            </div>
            <p className="text-gray-600">
              Professional-grade basketball courts with high-quality flooring and adjustable hoops for different age groups.
            </p>
          </div>
        </div>
        
        {/* Racing Track */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={racingTrack}
              alt="Racing Track" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M6 12h12" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Racing Track</h2>
            </div>
            <p className="text-gray-600">
              400-meter synthetic running track with multiple lanes for athletics training and competitions.
            </p>
          </div>
        </div>
        
        {/* Swimming Pool */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={swimming} 
              alt="Swimming Pool" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h20M7 21l1-1M12 21v-1M17 21l-1-1M7 3l1 1M12 3v1M17 3l-1 1" />
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Swimming Pool</h2>
            </div>
            <p className="text-gray-600">
              Temperature-controlled swimming pool with trained instructors and safety measures for all age groups.
            </p>
          </div>
        </div>
        
        {/* Skating Rink */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={sketing}
              alt="Skating Rink" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Skating Rink</h2>
            </div>
            <p className="text-gray-600">
              Smooth skating surface with safety barriers and equipment for beginners to advanced skaters.
            </p>
          </div>
        </div>
        
        {/* Football Field */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={football}
              alt="Football Field" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Football Field</h2>
            </div>
            <p className="text-gray-600">
              Well-maintained football field with natural grass and proper drainage system for year-round play.
            </p>
          </div>
        </div>
        
        {/* Kids Park */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 w-full overflow-hidden">
            <img 
              src={kidsPark}
              alt="Kids Park" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v8M5 5.2l1.6 1.6M19 5.2L17.4 6.8M4 13h16M15.5 13v4M8.5 13v4M12 21v-4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold">Kids Park</h2>
            </div>
            <p className="text-gray-600">
              Age-appropriate playground equipment in a safe, cushioned environment for younger students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsFacilities;