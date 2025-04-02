import React from 'react'
import News from '../../components/Home/News'
import Carousel from '../../components/Home/Carousal'
import School from '../../components/Home/School'
// import AnimatedTestimonials from '../../components/AnimatedTestimonials'
import Gallery from '../../components/Gallery'
// import OurVideos from '../../components/Home/OurVideos'
import Apply from '../../components/Home/Apply'
import Welcome from '../../components/Home/Welcome'
import Principle from '../../components/Home/principle'
// import basketball from '../../assets/basketball.jpg'
// import football from '../../assets/football.jpg'
// import FancyDress from '../../assets/P_And_H/FancyDress.jpeg'
// import Student_Palnt from '../../assets/P_And_H/student_Plant_1.jpeg'
// import Student from '../../assets/P_And_H/Students.jpeg'
// import Teacher from '../../assets/P_And_H/Teacher.jpeg'

// import WhyChooseUs from "../../components/WhyChooseUS";
import Testimonial from '../../components/Home/Testimonial'

import Calendar from '../../components/Home/Calendar'
import Testimonials from '../../components/Home/Testimonial'
import TestimonialSlider from '../../components/Home/Testimonial'


const Home = () => {
   
  return (
    <>
       {/* <Navbar /> */}
      
    
      <Carousel />
      <Welcome />
      <Principle />
      <News />
      <Calendar />
      <Gallery  />
      <School /> 
      {/* <OurVideos /> */}
      <Testimonials />

      <Apply />
      {/* <WhyChooseUs/> */}
   
     
     
    </>
  )
}

export default Home