import React from 'react';

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
     
      

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">Our Mission</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          It is a well-known fact that no two thumbprints are alike. Like the thumbprints, we believe that every child is born with a unique personality. Each child has a unique DNA print and brain network that dictates the manner in which the child assimilates processes and reacts to stimuli. We aim to translate our belief that ‘Every Child is Unique’ into a pedagogy that adapts to the child’s unique learning style.
          </p>
        </div>
      </section>

      {/* Mission Points */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src="c1.jpg" alt="Every Child is Unique" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto -mt-16 border-4 border-white shadow">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Every Child is Unique</h2>
                <p className="text-gray-600 text-center">
                Understanding is different from knowledge. While knowledge relies on memory, understanding relies on conceptual clarity. We aim to apply our belief that ‘Education Should Foster Real Understanding’ through our proprietary content and assessment tools.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src="c2.jpg" alt="Education Should Foster Real Understanding" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto -mt-16 border-4 border-white shadow">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Education Should Foster Real Understanding</h2>
                <p className="text-gray-600 text-center">
                  We go beyond rote memorization to develop critical thinking and deep comprehension. Our students learn to connect concepts, ask meaningful questions, and apply knowledge to real-world situations.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src="c3.jpg" alt="Real Understanding through an Integrated Approach" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto -mt-16 border-4 border-white shadow">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">Real Understanding through an Integrated Approach</h2>
                <p className="text-gray-600 text-center">
                A school is a micro-system where different factors have an effect on the child. The teachers, the curriculum, the examinations, the environment, the infrastructure, the activities, all come together to nurture the unique potential of the child. Our philosophy of ‘Real Understanding through an Integrated Approach’ is implemented through our Litera Octave approach towards education. We aim to blend technology into the teaching method of the students in a manner that they learn to consider it as an aid /tool for development and productivity, rather as an asset or object of luxury
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      
      
    </div>
  );
};

export default MissionPage;