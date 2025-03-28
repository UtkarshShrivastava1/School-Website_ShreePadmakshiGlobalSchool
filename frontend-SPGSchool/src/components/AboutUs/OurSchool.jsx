import React from 'react';
import school from '../../assets/c-3.png';
import Count from './Count';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header/Navigation would typically go here */}
      
      {/* Hero Section */}
      <div className="relative bg-amber-50 text-gray-600">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[url('/api/placeholder/1920/600')] bg-cover bg-center"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Mount Litera Zee School</h1>
          <p className="text-xl max-w-3xl mx-auto">Building the foundation for tomorrow's leaders through holistic education.</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Est. 2014</h3>
              <div className="border-l-4 border-red-800 pl-4 mb-6">
                <p className="italic text-gray-700">
                  "We believe that there is no activity more self-rewarding than service to the child."
                </p>
              </div>
              
              <h4 className="font-bold text-lg text-red-800 mb-2">Quick Facts</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-800 font-bold mr-2">•</span>
                  <span>Pan India Chain of K12 Schools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 font-bold mr-2">•</span>
                  <span>Universal Learning System</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 font-bold mr-2">•</span>
                  <span>State-of-the-art Infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 font-bold mr-2">•</span>
                  <span>Smart Classrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-800 font-bold mr-2">•</span>
                  <span>I-Care Program for Child Safety</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <img 
                src={school} 
                alt="School Campus" 
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Our modern campus in Bilaspur</p>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-red-800 mb-4">Our Legacy</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Mount Litera Zee School Bilaspur is a member of the K12 Pan India chain of Mount Litera Zee Schools under the aegis of Zee Learn Limited. The Mount Litera Zee School chain has many laurels in its cap for exemplary achievements in the Education sector. MLZS has a Pan India presence and a Universal learning system where the divide of big and small cities is bridged as all the students study the same curricula at the same time and the same pace.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2014, Mount Litera Zee School Bilaspur is a visionary attempt to empower children - the BUILDERS OF HUMANITY. The school aims at providing holistic development and nurturing the unique potential of every child.
              </p>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-red-800 mb-4">Infrastructure & Safety</h2>
              <p className="text-gray-700 leading-relaxed">
                Mount Litera Zee School – Bilaspur houses state of the art infrastructure with the latest technological knowhow for holistic growth of the students. Security is of paramount importance and Mount Litera Zee School Bilaspur practices I-Care, a program dedicated to child safety.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-red-800 text-xl font-bold">🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">Smart Classrooms</h3>
                  <p className="text-gray-700">
                    Our students study in Smart classrooms wherein technology and knowledge are blended for retention and application.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-red-800 text-xl font-bold">🔒</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 mb-2">I-Care Program</h3>
                  <p className="text-gray-700">
                    Our dedicated program ensures the highest standards of security and child safety throughout the campus.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-red-800 mb-4">Our Unique Approach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mount Litera Zee School is an aspiration of new learning's and new exploration of talent without the constraints of Rote learning where understanding and clarity rules the day and mindless cramming is a thing of the past. Socio Emotional skills are honed through various Clubs- and a plethora of personality building activities make 'Learning Fun'.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4">Special Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <h4 className="font-bold text-red-800 ">FLIP</h4>
                    <p className="text-gray-700 text-sm">
                      Enables students to explore their entrepreneurship skills through continuous activities.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded border border-blue-100">
                    <h4 className="font-bold text-red-800 ">DCP</h4>
                    <p className="text-gray-700 text-sm">
                      Helps children become cyber smart and counteract technological challenges in today's digital world.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Count */}
      <Count />
      {/* Call to Action */}
      <div className="bg-red-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience firsthand how we nurture young minds and build tomorrow's leaders. Schedule a visit today.
          </p>
          <button className="bg-white text-red-800 font-bold py-3 px-8 rounded-full hover:bg-red-100 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Footer would typically go here */}
    </div>
  );
};

export default AboutPage;