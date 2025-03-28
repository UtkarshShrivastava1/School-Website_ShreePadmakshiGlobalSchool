import React, { useEffect, useState } from 'react';
import image1 from '../../assets/c-1.png';
import { getAllEvents, getNotices } from "../../services/NotificationService";

const NewsSection = () => {
   const [events, setEvents] = useState([]);
  

  const fetchEvents = async ()=>{
    try {
      const [eventsData, noticesData] = await Promise.all([
        getAllEvents(),
        // getNotices()
      ]);
      setEvents(eventsData);
      console.log(eventsData);
      // console.log(events)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchEvents();
  },[]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading with decorative lines */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-red-800 px-6">Latest News</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
       
      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Featured Article */}
        <div className="lg:col-span-2 relative">
          <div className="relative h-80 md:h-96 lg:h-120 overflow-hidden rounded-xl shadow-lg border border-gray-200">
            <img 
              src={image1} 
              alt="Black Alumni Alliance Summit" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-xl">
              <h3 className="text-xl md:text-3xl font-bold text-white drop-shadow-lg">
                The 2025 Black Alumni Alliance Hosts Its Fourth Summit
              </h3>
            </div>
          </div>
        </div>
        
        {/* Sidebar - Recent Stories */}
        <div className="bg-gray-50 p-6 border border-gray-200 rounded-xl shadow-md">
          <h4 className="text-gray-600 font-semibold mb-4 border-b pb-2">RECENT STORIES</h4>
          
          <div className="space-y-6">
            {events.map((title, index) => (
              <div key={index} className="pb-4 border-b border-gray-200 last:border-none">
                <a 
                  href="#" 
                  className="block text-lg font-medium text-gray-600 hover:text-orange-800 transition-colors"
                >
                  {title.title} - {title.description}
                </a>
                  <p className='text-gray-600 text-sm'>{title.date}</p>
              </div>
            ))}
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-block px-5 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200 rounded-lg"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
