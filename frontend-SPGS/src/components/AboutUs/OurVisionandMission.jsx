import React from 'react';
import School from "../../assets/School.jpg";
import FancyDress from "../../assets/P_And_H/FancyDress.jpeg"
import classroom from "../../assets/Classroom/ClassN1.jpg"

const OurVisionAndMission= () => {
  // Animation for vision/mission items on scroll
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.vision-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30">
          <div className="w-full h-full bg-[url('/api/placeholder/1920/600')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Vision & Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">Nurturing Future Leaders Through Holistic Education</p>
          <div className="mt-10 flex justify-center">
            <a href="#vision" className="animate-bounce bg-gray-400 bg-opacity-20 p-3 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16" id="vision">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Guiding Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing a holistic education that nurtures the intellectual, physical, emotional, and spiritual growth of every child.
            </p>
          </div>
          
          {/* Vision & Mission Items */}
          <div className="space-y-8">
            {[
              {
                title: "Holistic Development",
                description: "To prescribe and implement a curriculum for physical, mental, emotional, spiritual and intellectual enlistment for achieving multifaceted development and growth of the younger generation.",
                icon: "🧠"
              },
              {
                title: "Leadership & Teamwork",
                description: "To foster an environment for the development of leadership qualities, team spirit, sportsmanship, self-esteem and other social attributes to prepare children for facing real life challenges.",
                icon: "👥"
              },
              {
                title: "Creativity & Innovation",
                description: "To create an ambience that provides a continuous encouragement and motivation for enhancing initiative and drive, innovativeness, creativity, original thinking and insatiable appetite for knowledge.",
                icon: "💡"
              },
              {
                title: "Future-Ready Education",
                description: "To prepare the future generation to face the challenges of globalization, galloping technology and social changes in the 21st century.",
                icon: "🌐"
              },
              {
                title: "Cultural Values",
                description: "To nurture in every child conventional Indian ethics, culture and ethos with a judicious blend of modern values and technology to churn out a perfect global citizen.",
                icon: "🏛️"
              },
              {
                title: "Heritage with Modernity",
                description: "Blend modern education with our rich heritage ensuring a gradual metamorphosis in thought and action to prepare the new generation to lead our country into the future.",
                icon: "🔄"
              },
              {
                title: "Environmental Awareness",
                description: "To make children aware of the significance of an eco-friendly environment.",
                icon: "🌱"
              },
              {
                title: "Individual Potential",
                description: "To nurture the unique potential in every child.",
                icon: "⭐"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="vision-item bg-white p-6 rounded-lg shadow-md transition-all duration-500 opacity-0 translate-y-4 flex items-start"
              >
                <div className="flex-shrink-0 bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center mr-6 text-2xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-600 mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Quote Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl font-light italic mb-6">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>
            <p className="font-medium text-white">- William Butler Yeats</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Educational Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover how our approach to education can help your child thrive and reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-900 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
              Schedule a Visit
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-8 rounded-lg transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Teaser */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Campus Life</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-lg shadow-md h-64">
            <img src={School} alt="Campus" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md h-64">
            <img src={classroom} alt="Classroom" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md h-64">
            <img src={FancyDress} alt="Activities" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVisionAndMission;