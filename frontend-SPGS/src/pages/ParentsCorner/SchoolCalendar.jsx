import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { Clock, Calendar as CalendarIcon, BookOpen, User } from "lucide-react";



const thoughts = [
  "Stay positive, work hard, make it happen! 💪",
  "Every day is a fresh start. 🌅",
  "Believe in yourself and all that you are. ✨",
  "Success is the sum of small efforts, repeated daily. 🔄",
  "The only way to do great work is to love what you do. ❤️"
];

const getRandomThought = () => thoughts[Math.floor(Math.random() * thoughts.length)];

const SchoolCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [event, setEvent] = useState(null);
  const [leave, setLeave] = useState(null);
  const [events, setEvents] = useState({});
  const [leaves, setLeaves] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));
  const navigate = useNavigate();


  useEffect(() => {
    if (selectedDate) {
      fetchData(selectedDate);
    }
  }, [selectedDate]);

  const fetchData = async (date) => {
    if (!date) {
      console.error("Selected date is undefined");
      return;
    }

    setLoading(true);
    try {
      const formattedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .split("T")[0];

      console.log("Fetching data for:", formattedDate);

      const response = await axios.get(`http://localhost:3000/details/${formattedDate}`);

      console.log("Response data:", response.data);

      setEvent(response.data.event || null);
      setLeave(response.data.leave || null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setEvent(null);
      setLeave(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (date) => {
    if (!date) {
      console.error("handleDateChange: Selected date is undefined");
      return;
    }

    console.log("Selected Date:", date);
    setSelectedDate(date);
    fetchData(date);
  };
  
  const onActiveStartDateChange = ({ activeStartDate }) => {
    if (activeStartDate) {
      setCurrentMonth(activeStartDate.toLocaleString('default', { month: 'long' }));
    }
  };
  
  // Get day ordinal (1st, 2nd, 3rd, etc.)
  const getDayOrdinal = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1: return `${day}st`;
      case 2: return `${day}nd`;
      case 3: return `${day}rd`;
      default: return `${day}th`;
    }
  };

  return (
    <div className="min-h-screen  text-slate-800">
      {/* Navbar */}
      {/* <div className="bg-white border-b border-teal-100 px-4 sm:px-8 py-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <CalendarIcon className="text-teal-500" size={24} />
            <h1 className="text-lg font-medium tracking-tight">EduPlanner</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
              <User size={16} />
            </div>
          </div>
        </div>
      </div> */}

      <main className="max-w-7xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="mb-8 sm:mb-12 mt-2 sm:mt-4 text-center">
          <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Academic Calendar
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
          {/* <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800">
            Academic Calendar
          </h2> */}
          <p className="mt-2 sm:mt-3 text-slate-500 max-w-xl mx-auto">
            Track your schedule, manage events, and plan your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Calendar Column */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-teal-100 rounded-xl overflow-hidden shadow-md">
              <div className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between border-b border-teal-100">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                  <h3 className="font-medium">{currentMonth} {selectedDate.getFullYear()}</h3>
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal-500 mr-1"></span>
                  <span className="mr-3">Event</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1"></span>
                  <span>Leave</span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                {/* Custom styling for the calendar */}
                <style jsx>{`
                  .react-calendar {
                    width: 100%;
                    border: none;
                    background: transparent;
                    color: #334155;
                    font-family: system-ui, sans-serif;
                  }
                  .react-calendar__navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                  }
                  .react-calendar__navigation button {
                    color: #334155;
                    font-weight: 500;
                    font-size: 14px;
                    padding: 4px 8px;
                  }
                  @media (min-width: 640px) {
                    .react-calendar__navigation button {
                      font-size: 16px;
                      padding: 6px 12px;
                    }
                  }
                  .react-calendar__navigation button:enabled:hover,
                  .react-calendar__navigation button:enabled:focus {
                    background-color: rgba(20, 184, 166, 0.1);
                  }
                  .react-calendar__tile {
                    padding: 8px;
                    color: #64748b;
                    font-weight: 500;
                    font-size: 14px;
                  }
                  @media (min-width: 640px) {
                    .react-calendar__tile {
                      padding: 12px;
                      font-size: 16px;
                    }
                  }
                  .react-calendar__tile:enabled:hover,
                  .react-calendar__tile:enabled:focus {
                    background-color: rgba(20, 184, 166, 0.1);
                    color: #334155;
                  }
                  .react-calendar__tile--now {
                    background: rgba(20, 184, 166, 0.1);
                    color: #0f766e;
                  }
                  .react-calendar__tile--active {
                    background: #14b8a6;
                    color: white;
                    border-radius: 8px;
                  }
                  .react-calendar__month-view__weekdays {
                    color: #64748b;
                    font-weight: 600;
                    text-transform: uppercase;
                    font-size: 0.7rem;
                  }
                  @media (min-width: 640px) {
                    .react-calendar__month-view__weekdays {
                      font-size: 0.75rem;
                    }
                  }
                  .react-calendar__month-view__days__day--weekend {
                    color: #94a3b8;
                  }
                  .react-calendar__month-view__days {
                    row-gap: 4px;
                  }
                `}</style>
                <Calendar
                  onChange={handleDateChange}
                  value={selectedDate}
                  onActiveStartDateChange={onActiveStartDateChange}
                  className="custom-calendar"
                  tileClassName={({ date }) => {
                    const formattedDate = date.toISOString().split("T")[0];
                    if (events[formattedDate]) return "event-tile";
                    if (leaves[formattedDate]) return "leave-tile";
                    return null;
                  }}
                  tileContent={({ date }) => {
                    const formattedDate = date.toISOString().split("T")[0];
                    return events[formattedDate] ? (
                      <div className="flex justify-center mt-1">
                        <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                      </div>
                    ) : leaves[formattedDate] ? (
                      <div className="flex justify-center mt-1">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      </div>
                    ) : null;
                  }}
                />
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-teal-100 rounded-xl overflow-hidden h-full shadow-md">
              <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-teal-100 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <Clock size={16} className="text-teal-500" />
                  <h3 className="font-medium">Details</h3>
                </div>
                <div className="px-3 py-1 bg-teal-50 rounded-full text-xs text-teal-700">
                  {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-1.5 mb-2 text-sm text-slate-500">
                  <CalendarIcon size={14} />
                  <span>
                    {selectedDate.toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      year: 'numeric' 
                    })}, {getDayOrdinal(selectedDate.getDate())}
                  </span>
                </div>

                <div className="min-h-64">
                  {loading ? (
                    <div className="flex justify-center items-center h-40">
                      <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : event ? (
                    <div className="mt-4">
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
                        <div className="flex items-center mb-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          <h4 className="text-lg font-semibold text-teal-700">{event.title}</h4>
                        </div>
                        <p className="text-slate-700">{event.description}</p>
                        
                        <div className="mt-4 pt-4 border-t border-teal-100 flex items-center gap-2 text-sm text-slate-500">
                          <BookOpen size={14} />
                          <span>School Event</span>
                        </div>
                      </div>
                    </div>
                  ) : leave ? (
                    <div className="mt-4">
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                        <div className="flex items-center mb-3">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                          <h4 className="text-lg font-semibold text-amber-700">{leave.title}</h4>
                        </div>
                        <p className="text-slate-700">{leave.description}</p>
                        
                        <div className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-2 text-sm text-slate-500">
                          <User size={14} />
                          <span>School Holiday</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4">
                      <div className="p-4 bg-gradient-to-r from-teal-50 to-amber-50 rounded-lg border border-teal-100">
                        <div className="flex items-center mb-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          <h4 className="text-lg font-semibold text-teal-700">Daily Inspiration</h4>
                        </div>
                        <p className="text-slate-700 font-medium text-lg italic">{getRandomThought()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolCalendar;