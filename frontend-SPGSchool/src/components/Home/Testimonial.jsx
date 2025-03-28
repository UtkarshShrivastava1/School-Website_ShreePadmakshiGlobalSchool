import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Kate',
    role: 'Photographer',
    image: '/api/placeholder/150/150',
    text: 'In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium condimentum nulla.',
    rating: 4
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Designer',
    image: '/api/placeholder/150/150',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Developer',
    image: '/api/placeholder/150/150',
    text: 'Phasellus ac velit euismod, ultricies ipsum nec, efficitur sapien. Nullam in tortor eget quam pulvinar finibus. Cras efficitur, nisl in bibendum vestibulum, nibh nunc fermentum neque, vitae euismod sapien mauris a sapien.',
    rating: 3
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
     <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-black px-6">Parents <span className='text-red-800'>Testimonials </span> </h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>

      <div className="relative h-full">
        {/* Testimonial Card */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-gray-200">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
          <p className="text-gray-500 mb-4">{testimonials[currentIndex].role}</p>

          <div className="text-center mb-4 px-4 md:px-12 lg:px-24">
            <p className="text-gray-600 italic">
              <span className="text-3xl text-gray-400">"</span>
              {testimonials[currentIndex].text}
              <span className="text-3xl text-gray-400">"</span>
            </p>
          </div>

          <div className="flex justify-center mb-4">
            {renderStars(testimonials[currentIndex].rating)}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={goToPrevious}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={goToNext}
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;