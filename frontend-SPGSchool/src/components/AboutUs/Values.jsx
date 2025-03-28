import React, { useEffect, useRef } from 'react';

const ValuesPage = () => {
  const valuesRef = useRef([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, index * 150);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    valuesRef.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      valuesRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  // Core values derived from the statement
  const coreValues = [
    {
      title: "Integrated Learning",
      description: "Value education is integrally interwoven into the entire fabric of the curriculum.",
      icon: "🧩",
      color: "bg-blue-600"
    },
    {
      title: "Disciplined Approach",
      description: "We focus on developing a methodical and disciplined approach to life.",
      icon: "⏱️",
      color: "bg-green-600"
    },
    {
      title: "Critical Thinking",
      description: "Students are encouraged to develop a discriminating mind that questions and analyzes.",
      icon: "🧠",
      color: "bg-purple-600"
    },
    {
      title: "Courage & Innovation",
      description: "We inspire the courage to tread new paths and explore innovative solutions.",
      icon: "🔍",
      color: "bg-orange-500"
    },
    {
      title: "Moral Integrity",
      description: "Students learn to follow the dictates of their own conscience, even if it means being different.",
      icon: "⭐",
      color: "bg-red-600"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute left-0 top-0 h-full w-full text-blue-800" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 100,20 0,60" opacity="0.2" />
            <polygon points="0,60 100,20 100,70 0,100" opacity="0.3" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
          <div className="h-1 w-20 bg-yellow-400 mb-10"></div>
          <div className="max-w-3xl">
            <p className="text-xl leading-relaxed text-blue-100 italic">
              "Value Education does not form a separate dimension of the curriculum but is integrally interwoven into the entire fabric of the curriculum."
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Holistic Value System</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At our school, we believe that values education is not a standalone subject but an essential component integrated throughout our entire curriculum. Our approach ensures that moral and ethical principles are naturally woven into the everyday learning experience of our students.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We place significant emphasis on fostering a methodical and disciplined approach to life, encouraging students to develop minds that can discern and evaluate thoughtfully. We believe in nurturing the courage to explore uncharted territories and to remain true to one's principles, even when it means standing apart from the crowd.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-blue-300 rounded-lg transform -rotate-3"></div>
              <img 
                src="https://i.pinimg.com/736x/3f/16/0d/3f160d3769fa93ab619b4102d944cf4a.jpg" 
                alt="Students engaged in values-based learning" 
                className="relative rounded-lg shadow-lg z-10"
              />
            </div>
          </div>
        </div>
        
        {/* Core Values Section */}
        <h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <div 
              key={index}
              ref={el => valuesRef.current[index] = el} 
              className="bg-white rounded-lg shadow-md p-6 transform transition duration-700 ease-out opacity-0 translate-y-10"
            >
              <div className={`w-16 h-16 rounded-full ${value.color} text-white flex items-center justify-center text-3xl mb-6`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
        
        {/* Approach Section */}
        <div className="bg-blue-50 rounded-lg p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Approach</h2>
              <div className="h-1 w-20 bg-yellow-400"></div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p>
                  Stress is laid on developing a methodical and disciplined approach to life; to have a discriminating mind, the courage to tread new paths and to follow the dictates of one's own conscience even if it means being different.
                </p>
                <p>
                  Our value education approach includes:
                </p>
                <ul>
                  <li>Integration of values across all subjects and activities</li>
                  <li>Practical application of ethical principles in real-life scenarios</li>
                  <li>Encouraging critical thinking and independent thought</li>
                  <li>Building confidence to stand by one's principles</li>
                  <li>Creating opportunities for character development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-10 h-10 mx-auto mb-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl font-light italic mb-8">
              "The values education at this school has helped my child develop not just academically, but as a thoughtful, principled individual with the courage to stand by their convictions."
            </p>
            <div className="flex items-center justify-center">
              <img src="https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg" alt="Parent" className="rounded-full w-16 h-16 mr-4" />
              <div className="text-left">
                <p className="font-medium">Parent of Class 9 Student</p>
                <p className="text-blue-300">Mother of Arjun S.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values in Action */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Values in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://i.pinimg.com/736x/1c/f2/1e/1cf21e2dd3a9fece42bfe54c065c5ddb.jpg" alt="Community service" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Community Engagement</h3>
              <p className="text-gray-600 mb-4">
                Students apply their values through meaningful community service projects that develop empathy and social responsibility.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">Learn more →</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://i.pinimg.com/736x/08/42/0a/08420a20017446fdda37f5d3f132dc88.jpg" alt="Leadership programs" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Leadership Development</h3>
              <p className="text-gray-600 mb-4">
                Our leadership programs encourage students to make ethical decisions and stand by their principles even in challenging situations.
              </p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition">Learn more →</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Values-Based Education</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100">
            Visit our campus to see how we integrate values education throughout our curriculum and nurture well-rounded individuals.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default ValuesPage;