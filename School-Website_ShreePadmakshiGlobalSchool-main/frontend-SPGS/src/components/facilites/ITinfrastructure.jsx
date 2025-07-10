import React from 'react';
import { Globe, Fingerprint, Server, Wifi } from 'lucide-react';

const ITInfrastructure = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-4">IT Infrastructure</h1> */}
      <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-red-800 px-6">IT Infrastructure</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
      
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Our state-of-the-art IT infrastructure supports digital learning and administrative efficiency
        across the campus.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Campus-Wide WiFi Section */}
        <div className="bg-blue-50 rounded-lg overflow-hidden shadow-sm">
          <div className="p-8 flex flex-col items-center justify-center h-64">
            <Wifi className="text-teal-500 w-16 h-16 mb-4" />
          </div>
          <div className="bg-white p-6">
            <h2 className="text-xl font-bold mb-2">Campus-Wide WiFi</h2>
            <p className="text-gray-700 mb-4">
              Our entire campus is equipped with high-speed WiFi connectivity, enabling
              seamless digital learning experiences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mt-1 mr-2">
                  <span className="text-teal-500 text-xs">✓</span>
                </div>
                <span className="text-gray-700">High-speed fiber optic backbone network</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mt-1 mr-2">
                  <span className="text-teal-500 text-xs">✓</span>
                </div>
                <span className="text-gray-700">Secure, content-filtered internet access</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mt-1 mr-2">
                  <span className="text-teal-500 text-xs">✓</span>
                </div>
                <span className="text-gray-700">Dedicated bandwidth for educational applications</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center mt-1 mr-2">
                  <span className="text-teal-500 text-xs">✓</span>
                </div>
                <span className="text-gray-700">100% campus coverage with no dead zones</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Right Column Features */}
        <div className="space-y-8">
          {/* Indoor Internet Labs */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Globe className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Indoor Internet Labs</h2>
              <p className="text-gray-700">
                Dedicated computer labs with high-speed wired internet connections for
                specialized digital learning activities and research.
              </p>
            </div>
          </div>
          
          {/* Biometric Attendance System */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <Fingerprint className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Biometric Attendance System</h2>
              <p className="text-gray-700">
                Advanced biometric attendance tracking for students and staff with real-time
                notifications to parents about their child's arrival and departure.
              </p>
            </div>
          </div>
          
          {/* Digital Learning Infrastructure */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex gap-4">
            <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Server className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-1">Digital Learning Infrastructure</h2>
              <p className="text-gray-700">
                Cloud-based learning management system, digital libraries, and online
                assessment platforms to support modern educational practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITInfrastructure;