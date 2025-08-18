import React from 'react';
// import picture from '../../assets/Picture1.jpg';
const DirectorsMessagePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section with Director's Photo */}
      <div className="relative bg-gradient-to-r from-[#191f5d] to-indigo-800 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('/api/placeholder/1920/600')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Director's Message</h1>
              <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
              <p className="text-xl text-white">Words of wisdom and vision from our leader</p>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-red-100 to-transparent opacity-30 rounded-full"></div>
                <img 
                  src='/Picture1.jpg'
                  alt="Dr. Sanjana Tiwari" 
                  className="rounded-full h-64 w-64 object-cover border-4 border-white shadow-xl"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white py-2 px-6 rounded-full shadow-lg">
                  <p className="text-orange-500 text-sm font-bold">Since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Director's Information Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16 transform -translate-y-16">
            <div className="bg-blue-50 p-8 text-center">
              <h2 className="text-3xl font-bold text-orange-500 ">Dr. Sanjana Tiwari</h2>
              <p className="text-red-600  text-lg mt-2">Director, SPGS Bilaspur</p>
            </div>
            <div className="p-8 text-center">
              <blockquote className="italic text-xl text-gray-700 mb-4">
                "An Investment in knowledge pays the best interest"
              </blockquote>
              <div className="h-0.5 w-20 bg-orange-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Message Content */}
          <div className="prose prose-lg max-w-none ">
            <div className="relative mb-10 shadow-2xl m-2.5 p-6 bg-white rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-6">
                  Dear Parents, Students, and Community Members,
                </h3>

                <p className="mb-4">
                It is with great pleasure that I welcome you to Shree Padmakshi Global School, a community of
                learners dedicated to academic excellence, personal growth, and social responsibility.
                </p>

                <p className="mb-4">
                At Shree Padmakshi Global School, we believe that education should be a transformative
                experience .That prepares students for success in an ever-changing world. We strive to instil in
                our students a love of learning, a strong sense of values, and the skills and confidence to make
                a positive impact in their communities.

                </p>

                <p className="mb-4">
                I invite you to explore our prospectus and discover the many opportunities and experiences that
                Shree Padmakshi Global School has to offer. I am confident that our school community will
                provide your child with a rich and rewarding educational experience
                </p>

                
                <p className="mb-2">
                Thank you for considering Shree Padmakshi Global School as your partner in education.
                
                </p>

                <p className="mb-2">Sincerely,</p>
                <p className="italic font-medium">Dr. Sanjana Tiwari</p>
                <p className="text-sm text-muted-foreground">Director, Shree Padmakshi Global School</p>
             

            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-500  mb-4">Our Campus</h3>
                <p className="text-gray-700">
                  The ambience of the school is away from the hustle and bustle of city life and is congenial for academics. The school is equipped with world-class ultra modern learning facilities. The classrooms are fully Air conditioned, spacious and equipped with all modern facilities of smart classes.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-500  mb-4">Our Philosophy</h3>
                <p className="text-gray-700">
                  At Shree Padmakshi Global School, Bilaspur we believe that every child has a right to live in calm, orderly, safe and secure environment essential for development to fullest potential. As a progressive, learning centric co-educational school we provide all necessary facilities for overall development of students.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-orange-500 flex items-start">
              <div className="text-4xl text-blue-500 mr-4">💡</div>
              <div>
                <p className="text-gray-800 mb-2">
                  I feel proud to state that school is adequately equipped to offer your child the best scholastic training with the help of dedicated team of qualified staff. We look forward for your association and continuous support.
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <img src='/Picture1.jpg' alt="Signature" className="rounded-full" />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-orange-500 ">Dr. Sanjana Tiwari</p>
                    <p className="text-sm text-gray-600">Director,  SHREE PADMAKSHI GLOBAL SCHOOL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#191f5d] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Vision In Person</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Visit our campus to see how we're creating a nurturing environment for your child's education and development.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-orange-400 hover:text-amber-50 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Schedule a Visit
            </button>
            <button className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Journey Under Dr. Tiwari's Leadership</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {[
              { year: '2014', title: 'School Founding', description: 'Shree Padmakshi Global School Bilaspur was established' },
              { year: '2016', title: 'Infrastructure Expansion', description: 'Addition of state-of-the-art facilities' },
              { year: '2018', title: 'Educational Excellence', description: 'Recognition for academic achievements' },
              { year: '2021', title: 'Digital Transformation', description: 'Implementation of advanced smart classrooms' }
            ].map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left '}`}>
                  <h3 className="text-xl font-bold text-orange-500 ">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
                
                <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[#191f5d] text-white flex items-center justify-center font-bold shadow-lg">
                  {item.year}
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessagePage;