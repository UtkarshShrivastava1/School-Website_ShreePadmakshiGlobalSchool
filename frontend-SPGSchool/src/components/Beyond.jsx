import React, { useState } from 'react';

const BeyondAcademic = () => {
  const [activeTab, setActiveTab] = useState('campus');
  
  const facilities = [
    {
      id: 'campus',
      title: 'Our Campus',
      icon: '🏫',
      image: 'http://mlzsbilaspur.com/Assets/Images/Ourcampus.jpg',
      description: 'MLZS boasts of a large campus with state of the art building for academic instruction. The building is complete with offices for Trustee, Principal, Relationship Manager and Administration on the ground floor. The with pre-primary classrooms alongwith Library, Math Lab, Science lab and the computer lab constitute the first floor. The staff room along with senior grades rest on second floor. The floors are connected with wide stairs with clean washrooms at each floor for easy access, airy corridors and well-ventilated classrooms. The classrooms also have been equipped with smart boards for interactive learning. The playground area is equally attractive. Large, open area, surrounded by natural beauty offers a breathtaking sight. The playground gives access to sports like Cricket, Football, Hockey and basketball.'
    },
    {
      id: 'language-lab',
      title: 'Language Lab',
      icon: '🗣️',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/Lang-Lab.jpg',
      description: 'Language is the torch that enlightens the way to knowledge. An indispensable part of the students training, our language labs are well- equipped with polished study material, smart-interactive boards, headphones and projectors for a splendid experience. Learning language enables a child to understand the world in a much better manner. The child is thus exposed to unfamiliar cultures and traditions, comes to know about the variations of ethnicities around the globe and interacts with people with a wider assortment of knowledge and awareness. The language faculty with innovative active sessions and motivating guidance instill the love for languages in our students. Technological assistance helps the child to not only understand the language but also to experience it a never-happened-before mode.'
    },
    {
      id: 'science-lab',
      title: 'Science Lab',
      icon: '🧪',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/science.jpg',
      description: 'Young students always relish being exposed to miracles of scientific experimentation. Science is always better learnt when the knowledge acquired in theory classes is realized in laboratories. Exploration and discovery are the mainstay for scientific development in todays world. They can only be accomplished if the child is open to the elements of both, the classroom drill along with experimentation in the laboratories. Our laboratories are well designed and follow all international norms and rules to enable a child to explore and dazzle the world with her discovery.'
    },
    {
      id: 'math-lab',
      title: 'Math Lab',
      icon: '🔢',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/math-Lab.jpg',
      description: 'From time immemorial, mathematics has been the tool to decode greatest mysteries of the world and the universe. With development in teaching methods, which have become more and more experimental, learning mathematical concepts requires special training. This intricate puzzle needs to be solved outside the classroom, away from mere theoretical approach. MLZS makes this work even easier with its math lab which endows the child with insight into mathematical formulae, collection of data and rectifying errors through experimentation. The math lab consists of all the required material for a fascinating experience of the subject making mathematical studies a piece of cake.'
    },
    {
      id: 'music-room',
      title: 'Music Room',
      icon: '🎵',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/music.jpg',
      description: 'Music rejuvenates the mind and soul and refreshes it. At MLZS, we encourage students to express themselves in the language of melody. With a fully equipped music room with all instruments intact, we push the bar higher and higher. Our skilled vocals and instrumental trainers make sure that music in the heart never ceases to enthrall the world.'
    },
    {
      id: 'library',
      title: 'Library',
      icon: '📚',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/library.jpg',
      description: 'A book is a mans best friend. The library is a place where imagination is let loose to fly. Believing in this philosophy, we have created a stock-pile of books by eminent authors on various subjects to enlighten our young students. Newspapers and national and regional periodicals are readily available. The students develop a great habit of reading which inevitably improves their skills in language and reasoning.'
    },
    {
      id: 'art-craft',
      title: 'Art & Craft',
      icon: '🎨',
      image: 'http://mlzsbilaspur.com/Assets/Images/beyound/Art.jpg',
      description: 'At MLZS, we encourage students to be creative and imaginative. It is said that a childs world is best understood when he carves out his imagination with tints of his selection. The students love to play with colours and act like demigods, creating something new every day. Support and technical guidance helps them to appreciate art work by great artists and insists them to generate new art works and then take pride in it.'
    }
  ];

  const activeFacility = facilities.find(f => f.id === activeTab);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Beyond Academics</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto opacity-90">
            Explore the exceptional facilities at MLZS designed to nurture well-rounded, creative, and confident individuals.
          </p>
        </div>
        
        {/* Curved separator */}
        <div className="h-16 bg-gradient-to-r from-purple-800 to-indigo-700 relative">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-indigo-50" style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}></div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Tab navigation */}
        <div className="flex overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex space-x-2 md:space-x-4 mx-auto">
            {facilities.map(facility => (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`flex items-center px-4 py-3 md:px-6 md:py-4 rounded-lg transition-all whitespace-nowrap ${
                  activeTab === facility.id 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-indigo-100 shadow'
                }`}
              >
                <span className="text-xl md:text-2xl mr-2">{facility.icon}</span>
                <span className="font-medium">{facility.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active facility content */}
        {activeFacility && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-indigo-100 relative overflow-hidden">
                  <img 
                    src={activeFacility.image} 
                    alt={activeFacility.title} 
                    className="w-full h-[100%] object-cover object-center transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <h2 className="text-white text-3xl md:text-4xl font-bold p-6">
                      {activeFacility.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-10">
                <p className="text-gray-700 leading-relaxed">
                  {activeFacility.description}
                </p>
                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Facilities overview cards */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">All Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map(facility => (
              <div 
                key={facility.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setActiveTab(facility.id)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{facility.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600 line-clamp-3">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Campus</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            See our world-class facilities in person and discover how MLZS can provide your child with an exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Schedule a Tour
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MLZS</h3>
              <p className="text-gray-400">
                Providing exceptional education and facilities to nurture the leaders of tomorrow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Life</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@mlzs.edu</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: MLZS Campus, Education City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} MLZS. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default BeyondAcademic;