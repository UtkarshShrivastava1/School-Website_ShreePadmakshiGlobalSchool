import React from 'react';

const CampusFeatures = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11a1 1 0 0 0 1.52 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7Z" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
      title: "Hi-Tech Classrooms",
      description: "Spacious and well-lit classrooms equipped with Interactive Whiteboards (IWB) and advanced educational software to enhance the learning experience.",
      bgColor: "bg-blue-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      ),
      title: "Value-Based Education",
      description: "We shape global minds with an Indian soul, firmly upholding a belief in our moral values and ethics to create responsible global citizens.",
      bgColor: "bg-purple-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 3a8 8 0 0 0-8 8v1h6.67c-.73 1.76-2 3.33-3.67 4.67 1 .9 2 1.33 3 1.33 2.67 0 5.33-2.67 6.67-4 1.33 1.33 4 4 6.67 4 1 0 2-.43 3-1.33-1.67-1.34-2.94-2.91-3.67-4.67H22v-1a8 8 0 0 0-8-8h-3Z" />
        </svg>
      ),
      title: "Eco-Friendly Campus",
      description: "Our sustainable campus promotes environmental consciousness through green initiatives, renewable energy, and eco-friendly practices.",
      bgColor: "bg-green-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M5 22v-3a7 7 0 0 1 14 0v3" />
        </svg>
      ),
      title: "Expert Faculty",
      description: "Our trained and experienced faculty undergoes a minimum of 60 hours of professional development training every year to stay updated with the latest teaching methodologies.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Comprehensive Health Program",
      description: "We prioritize student wellbeing through regular health check-ups, nutritional guidance, and mental health support to ensure overall wellness.",
      bgColor: "bg-red-100",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 7h-8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
          <path d="M5 15h4" />
          <path d="M7 13v4" />
          <path d="M13 6v4" />
          <path d="M15 3h4v4" />
        </svg>
      ),
      title: "Sports & Extra-curricular",
      description: "A wide range of sports and extra-curricular activities cater to the holistic development of students, fostering teamwork, leadership, and physical fitness.",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Where Learning Comes to Life</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>

      
      <p className="text-center mb-12 max-w-3xl mx-auto">
        Our campus is designed to provide students with a stimulating environment that fosters
        academic excellence, personal growth, and holistic development. We believe in creating
        spaces that inspire creativity, collaboration, and a love for learning.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className={`${feature.bgColor} p-8 flex items-center justify-center rounded-t-lg`}>
              {feature.icon}
            </div>
            <div className="border border-t-0 border-gray-200 p-6 rounded-b-lg flex-grow">
              <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusFeatures;