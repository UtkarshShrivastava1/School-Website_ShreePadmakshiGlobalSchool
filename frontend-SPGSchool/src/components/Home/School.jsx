import React from 'react';
import image1 from '../../assets/c-1.png';
import image2 from '../../assets/c-2.png';
import image3 from '../../assets/c-3.png';
import image4 from '../../assets/c-4.png';

const CommunityVoices = () => {
  const sections = [
    {
      title: "Primary School",
      imgSrc:"https://images.pexels.com/photos/5530484/pexels-photo-5530484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Lower School Students",
      description: "Experience the joy of early learning in our nurturing Lower School environment where young minds flourish through discovery and play.",
      class:"Nursery to kg-2"
    },
    {
      title: "Lower School",
      imgSrc: "https://images.pexels.com/photos/4486783/pexels-photo-4486783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  ",
      alt: "Middle School Students",
      description: "Our Middle School program empowers students to explore their interests while developing critical thinking and leadership skills."
    ,
      class:"1 to 5"
    },
    {
      title: "Middle School",
      imgSrc: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Upper School Students",
      description: "Upper School students engage in rigorous academics, innovative research, and meaningful community engagement.",
      class:"6 to 8"
    },
    {
      title: "Upper School",
      imgSrc: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Upper School",
      description: "Our alumni network continues to make lasting impacts across the globe, carrying forward our values of excellence and service.",
      class:"9 to 12"
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Practice Areas Badge */}
       
        
        {/* Main Heading */}
         {/* Heading with decorative lines */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-Black px-6">Our <span className="text-amber-800"> Educational Programs</span></h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
        <h1 className="text-4xl md:text-5xl font-serif text-center font-bold text-gray-900 mb-16">
 
        </h1>

        {/* <div className="flex justify-center mb-6">
        <p className="mt-1 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive approach to education across all age groups, fostering growth, curiosity, and excellence.
          </p>

        </div> */}
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {sections.map((service, index) => (
    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
      <div className="p-8 flex-1">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-3">
          {service.title}
        </h2>
        <p className="text-gray-600 mb-2">
          {service.description}
        </p>
        <div className="flex items-center space-x-2 mb-6">  
          <label className="text-gray-600 text-lg font-bold">Class:</label>
          <p className="text-gray-600 text-md font-bold">
            {service.class}
          </p>
        </div>
        
        <a 
          href="#" 
          className="inline-flex items-center text-red-700 font-medium hover:text-amber-600"
        >
          Learn More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </a>
      </div>
      <div className="md:w-2/5 relative">
        <div className="w-full h-full overflow-hidden rounded-r-lg">
          <img 
            src={service.imgSrc}
            alt={service.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default CommunityVoices;