import React , { useEffect, useState, useRef } from 'react';
import Image from '../../assets/c-4.png';
const statsData = [
  { label: 'Students', value: 1200 },
  { label: 'Teachers', value: 120 },
  { label: 'Courses', value: 60 },
  { label: 'Awards', value: 250 },
];
const SchoolHeroSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          statsData.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000; 
            const stepTime = Math.abs(Math.floor(duration / end));
            
            const timer = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });

              if (start === end) clearInterval(timer);
            }, stepTime);
          });
          observer.current.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.current.observe(statsRef.current);
    }
    return () => observer.current && observer.current.disconnect();
  }, []);
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
           src={Image}
          alt="School campus background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/40"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-yellow-400/20 blur-2xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-green-500/10 blur-xl"></div>
      </div>
   
      
      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - School Text */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-blue-600 px-4 py-1 rounded-md text-sm font-bold mb-2">
              ESTABLISHED 1985
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Inspiring <span className="text-yellow-400">Excellence</span> in Every Student
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-lg">
              Our innovative approach to education combines academic rigor with creative exploration, 
              preparing students for success in a rapidly changing world.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="bg-orange-400 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-md transition-colors">
                Schedule a Tour
              </button>
              <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-6 rounded-md transition-colors">
                View Programs
              </button>
            </div>
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <span className="block text-yellow-400 font-bold">4.9/5.0</span>
                <span className="text-sm opacity-80">From 2,000+ parent reviews</span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Promotional Video */}
          <div className="relative">
          <div className="relative w-full max-w-3xl mx-auto">
  <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white/20">
    <iframe 
      src="https://www.youtube.com/embed/z29AKV8rt6o?si=DckRN5jb4_2BmSXO" 
      title="YouTube video player" 
      className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    ></iframe>
                <div className="absolute inset-0 bg-blue-900/30"></div>
                <button className="relative z-10 w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center shadow-xl hover:bg-yellow-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Decorative elements for the video */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-12 bg-orange-400 rounded-lg -z-10"></div>
            <div className="absolute top-1/2 transform -translate-y-1/2 -right-12 bg-white/90 rounded-lg p-4 shadow-lg hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-blue-900">100%</p>
                  <p className="text-sm text-gray-600">College Acceptance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Stats Bar */}
      <div ref={statsRef} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:mt-0">
        <div className="bg-white rounded-xl shadow-xl p-6 backdrop-blur-lg grid grid-cols-2 md:grid-cols-4 gap-6">
         { statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-blue-600">{counts[index]}+</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolHeroSection;