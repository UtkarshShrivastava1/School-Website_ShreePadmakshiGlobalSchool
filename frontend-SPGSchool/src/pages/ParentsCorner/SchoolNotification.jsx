import { useEffect, useState } from "react";
import { getAllEvents, getNotices } from "../../services/NotificationService";
import api from "../../services/api";

const SchoolNotification = () => {
  const [events, setEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [eventsData, noticesData] = await Promise.all([
          getAllEvents(),
          getNotices()
        ]);
        setEvents(eventsData);
        setNotices(noticesData);
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load notifications. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center h-64">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600 text-lg animate-pulse">Loading notifications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded animate-bounce">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  const NotificationCard = ({ title, count, items, type, emptyIcon, emptyText }) => (
    <div className={`bg-gradient-to-br ${type === 'event' ? 'from-blue-50 to-indigo-50' : 'from-green-50 to-teal-50'} shadow-lg rounded-xl p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-full max-w-2xl mx-auto`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-2xl font-bold ${type === 'event' ? 'text-blue-800' : 'text-green-800'} flex items-center`}>
          <span className={`inline-block w-3 h-8 ${type === 'event' ? 'bg-blue-500' : 'bg-green-500'} mr-3 rounded`}></span>
          {title}
        </h3>
        <span className={`${type === 'event' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'} text-xs font-medium px-3 py-1 rounded-full`}>
          {count} {title}
        </span>
      </div>
      
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item, index) => (  
            <li 
              key={item._id} 
              className={`bg-white border-l-4 ${type === 'event' ? 'border-blue-500' : 'border-green-500'} rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.5s ease-out forwards"
              }}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <h4 className={`font-semibold ${type === 'event' ? 'text-blue-800' : 'text-green-800'} text-lg`}>{item.title}</h4>
                <span className={`text-sm ${type === 'event' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'} px-3 py-1 rounded-full mt-2 sm:mt-0`}>
                  {formatDate(item.date)}
                </span>
              </div>
              <p className="text-gray-700 mt-2">{item.description}</p>
              {type === 'notice' && item.fileUrl && (
                <a
                  href={`http://localhost:5000${item.fileUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  View Attachment
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-40 text-gray-500 animate-pulse">
          <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {emptyIcon}
          </svg>
          <p>{emptyText}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="text-center mb-8 transform transition-all hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6 my-2">School Events & Notification</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
        {/* <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2 rounded-full"></div> */}
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === "all" 
                ? "bg-white shadow-md text-blue-600 font-medium" 
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === "events" 
                ? "bg-white shadow-md text-blue-600 font-medium" 
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Events
          </button>
          <button 
            onClick={() => setActiveTab("notices")}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeTab === "notices" 
                ? "bg-white shadow-md text-blue-600 font-medium" 
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Notices
          </button>
        </div>
      </div>
      
      {/* Display content based on active tab */}
      {activeTab === "all" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Events Section */}
          <NotificationCard 
            title="Upcoming Events"
            count={events.length}
            items={events}
            type="event"
            emptyIcon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>}
            emptyText="No upcoming events available."
          />
          
          {/* Notices Section */}
          <NotificationCard 
            title="Notices"
            count={notices.length}
            items={notices}
            type="notice"
            emptyIcon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>}
            emptyText="No notices available."
          />
        </div>
      ) : activeTab === "events" ? (
        <div className="flex justify-center">
          <NotificationCard 
            title="Upcoming Events"
            count={events.length}
            items={events}
            type="event"
            emptyIcon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>}
            emptyText="No upcoming events available."
          />
        </div>
      ) : (
        <div className="flex justify-center">
          <NotificationCard 
            title="Notices"
            count={notices.length}
            items={notices}
            type="notice"
            emptyIcon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>}
            emptyText="No notices available."
          />
        </div>
      )}
      
      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SchoolNotification;