import React from 'react';

const SchoolTimings = () => {
  const timingsSections = [
    {
      title: 'School Office Hours',
      timing: '9:00AM TO 3:00PM',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-200',
      iconClass: 'text-blue-500'
    },
    {
      title: 'Pre-Primary Timing',
      timing: '9:00AM TO 12:00PM',
      colorClass: 'bg-green-50 text-green-600 border-green-200',
      iconClass: 'text-green-500'
    },
    {
      title: 'Primary Timing',
      timing: '9:00AM TO 3:00PM',
      colorClass: 'bg-purple-50 text-purple-600 border-purple-200',
      iconClass: 'text-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">School Timing</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
      <p className="text-center text-gray-600 mb-8">
        Please note the following operating hours for different sections of our school.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {timingsSections.map((section, index) => (
          <div 
            key={index} 
            className={`
              ${section.colorClass} 
              border rounded-lg 
              p-6 
              text-center 
              shadow-sm 
              transition-all 
              duration-300 
              hover:shadow-md
            `}
          >
            <div className="flex justify-center items-center mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-8 w-8 ${section.iconClass}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            
            <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
            <p className="font-bold text-xl">{section.timing}</p>
          </div>
        ))}
      </div>

      {/* Important Notice Section */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-yellow-700 mb-2">Important Notice</h3>
          <p className="text-yellow-600">
            Students should arrive at least 15 minutes before their scheduled start time.
          </p>
        </div>
        {/* <button 
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
        >
          Contact Administration
        </button> */}
      </div>
    </div>
  );
};

export default SchoolTimings;