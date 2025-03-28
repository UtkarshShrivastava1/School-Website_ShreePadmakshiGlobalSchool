import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ icon, endValue, suffix, title, inView }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return; // Start animation only when in view

    const numericValue = parseInt(endValue.toString().replace(/[^0-9]/g, ''));
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    const increment = numericValue / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep += 1;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(numericValue);
        clearInterval(timer);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [inView, endValue]);

  return (
    <div className="flex flex-col items-center p-4 transition-opacity duration-500 ease-in-out">
      <div className="bg-blue-100 p-4 rounded-lg mb-3">
        {icon}
      </div>
      <div className="text-4xl font-bold mb-1">{count}{suffix}</div>
      <div className="text-gray-700 text-center">{title}</div>
    </div>
  );
};

const StatisticsCounter = () => {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    { icon: <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, endValue: 98, suffix: '%', title: "Graduate Success" },
    { icon: <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12ZM16 6C16 3.8 14.2 2 12 2C9.8 2 8 3.8 8 6H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, endValue: 50, suffix: '+', title: "Expert Teachers" },
    { icon: <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, endValue: 30, suffix: '+', title: "Programs" },
    { icon: <svg className="w-6 h-6 text-red-800" fill="currentColor" viewBox="0 0 24 24"><path d="M8 21H16M12 17V21M6.8 17H17.2C18.8802 17 19.7202 17 20.362 16.673C20.9265 16.3854 21.3854 15.9265 21.673 15.362C22 14.7202 22 13.8802 22 12.2V7.5C22 7.35178 22 7.27768 21.9978 7.21296C21.9674 6.7471 21.7529 6.31155 21.4047 5.99568C21.3563 5.95168 21.2896 5.90995 21.1562 5.82649L12.5795 1.08379C12.4363 1.0028 12.3647 0.962312 12.2903 0.945483C12.0997 0.897117 11.9003 0.897117 11.7097 0.945483C11.6353 0.962312 11.5637 1.0028 11.4205 1.08379L2.84383 5.82649C2.71038 5.90995 2.64366 5.95168 2.59526 5.99568C2.24712 6.31155 2.03258 6.7471 2.00221 7.21296C2 7.27768 2 7.35178 2 7.5V12.2C2 13.8802 2 14.7202 2.32698 15.362C2.6146 15.9265 3.07354 16.3854 3.63803 16.673C4.27976 17 5.11984 17 6.8 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>, endValue: 100, suffix: '+', title: "Awards Won" }
  ];

  return (
    <div ref={statsRef} className="w-full max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
            <StatItem 
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              title={stat.title}
              inView={inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsCounter;
