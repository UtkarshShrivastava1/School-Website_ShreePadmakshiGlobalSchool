import React from 'react';

const WhyMountLetraZee = () => {
  const reasons = [
    {
      title: "Unique Skills Programme",
      description: "Our specialized curriculum develops essential life skills, leadership qualities, and practical knowledge that prepares students for real-world challenges.",
      icon: "🔧",
      image: "c1.jpg"
    },
    {
      title: "Technology Enabled Learning",
      description: "We integrate cutting-edge technology into our classrooms, providing students with innovative learning experiences and digital literacy skills.",
      icon: "💻",
      image: "c2.jpg"
    },
    {
      title: "ESP - Emerging Student Profile",
      description: "Our personalized approach identifies and nurtures each student's unique talents, abilities, and potential through customized learning paths.",
      icon: "👤",
      image: "c3.jpg"
    },
    {
      title: "Litera Octave",
      description: "Our holistic educational framework harmonizes academic excellence with creative expression, physical development, and emotional intelligence.",
      icon: "🎵",
      image: "c4.jpg"
    },
    {
      title: "Well Trained Teachers",
      description: "Our faculty undergoes rigorous professional development to implement innovative teaching methodologies that inspire and engage students.",
      icon: "👩‍🏫",
      image: "c5.jpg"
    },
    {
      title: "Assessments, Evaluations & Parents",
      description: "We employ comprehensive evaluation systems with regular parent communication to ensure continued growth and academic success.",
      icon: "📊",
      image: "c6.jpg"
    },
    {
      title: "Community Connect",
      description: "Students actively participate in community service projects, developing empathy, social responsibility, and leadership skills.",
      icon: "🤝",
      image: "c7.jpg"
    },
    {
      title: "Social Awareness",
      description: "We instill a strong sense of social consciousness, encouraging students to become thoughtful, ethical citizens who contribute positively to society.",
      icon: "🌿",
      image: "c8.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Mount Letra Zee School?</h1>
              <p className="text-xl md:text-2xl">
                Empowering young minds to excel in academics and life with our comprehensive approach to education.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/api/placeholder/500/300" 
                alt="Mount Letra Zee School campus" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">A Legacy of Excellence in Education</h2>
          <p className="text-lg text-gray-600">
            At Mount Letra Zee School, we believe in nurturing not just academic brilliance but also character, creativity, and confidence. Our educational philosophy combines traditional values with modern teaching approaches to prepare students for the challenges of tomorrow.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={`/api/placeholder/400/300`} 
                  alt={reason.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-3xl mr-3">{reason.icon}</span>
                  <h3 className="text-xl font-semibold text-indigo-700">{reason.title}</h3>
                </div>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Litera Octave Feature Section */}
        <div className="bg-indigo-50 rounded-xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="md:w-1/3">
              <img 
                src="/api/placeholder/400/400" 
                alt="Litera Octave Program" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-800">The Litera Octave Advantage</h2>
              <p className="text-lg text-gray-700">
                Our signature Litera Octave program balances eight key dimensions of student development, creating a harmonious educational experience that nurtures the whole child.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Academic Excellence", "Creative Expression", "Physical Fitness", "Emotional Intelligence", "Digital Literacy", "Critical Thinking", "Social Skills", "Ethical Values"].map((pillar, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-indigo-600 font-medium">{pillar}</div>
              </div>
            ))}
          </div>
        </div>

    
      

       
       

       
        
       
       
      </div>

      
    </div>
  );
};

export default WhyMountLetraZee;