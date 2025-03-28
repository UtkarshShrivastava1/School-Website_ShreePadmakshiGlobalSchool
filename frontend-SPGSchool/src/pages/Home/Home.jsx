import React from 'react'
import News from '../../components/Home/News'
import Carousel from '../../components/Home/Carousal'
import School from '../../components/Home/School'
// import AnimatedTestimonials from '../../components/AnimatedTestimonials'
import Gallery from '../../components/Gallery'
import OurVideos from '../../components/Home/OurVideos'
import Apply from '../../components/Home/Apply'
import Welcome from '../../components/Home/Welcome'
import Principle from '../../components/Home/principle'

// import WhyChooseUs from "../../components/WhyChooseUS";
import Testimonial from '../../components/Home/Testimonial'

import Calendar from '../../components/Home/Calendar'
import Testimonials from '../../components/Home/Testimonial'
import TestimonialSlider from '../../components/Home/Testimonial'


const Home = () => {
  const cards = [
    {
      id: 1,
      imageUrl: "https://images.pexels.com/photos/12935123/pexels-photo-12935123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected
      content: "Annual Day",
      description: "Slogan writing competition",
    },
    {
      id: 2,
      imageUrl: "https://images.pexels.com/photos/31003854/pexels-photo-31003854/free-photo-of-high-school-rugby-match-in-action-on-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected
      content: "Sports Day",
      description: "Football Match",
    },
    {
      id: 3,
      imageUrl: "https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // ✅ Corrected (changed `thumbnail` to `image`)
      content: "Semeniar",
      description: "Semeniar on Science",
    },
    {
      id: 4,
      imageUrl: "https://images.pexels.com/photos/5530483/pexels-photo-5530483.jpeg?auto=compress&cs=tinysrgb&w=600", // ✅ Corrected
      content: "Computer Lab",
      description: "Computer Lab",
    },
  ];

  
  return (
    <>
       {/* <Navbar /> */}
      
    
      <Carousel />
      <Welcome />
      <Principle />
      <News />
      <Calendar />
      <Gallery cards={cards} />
      <School /> 
      <OurVideos />
      <Testimonials />

      <Apply />
      {/* <WhyChooseUs/> */}
   
     
     
    </>
  )
}

export default Home