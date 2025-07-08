// import React from 'react'
import News from '../../components/Home/News'
import Carousel from '../../components/Home/Carousal'
import School from '../../components/Home/School'
// import AnimatedTestimonials from '../../components/AnimatedTestimonials'
// import Gallery from '../../components/Gallery'
// import OurVideos from '../../components/Home/OurVideos'
import Apply from '../../components/Home/Apply'
import Welcome from '../../components/Home/Welcome'
import Principle from '../../components/Home/principle'

// import Testimonial from '../../components/Home/Testimonial'

import Calendar from '../../components/Home/Calendar'
import Testimonials from '../../components/Home/Testimonial'
// import TestimonialSlider from '../../components/Home/Testimonial'
import ValuesInActionPage from '../../components/NewGallery'


const Home = () => {
   
  return (
    <>
       {/* <Navbar /> */}
      
    
      <Carousel />
      <Welcome />
      <Principle />
      <News />
      <Calendar />
      {/* <Gallery  /> */}
      <ValuesInActionPage />
      <School /> 
      {/* <OurVideos /> */}
      <Testimonials />

      <Apply />
      {/* <WhyChooseUs/> */}
   
     
     
    </>
  )
}

export default Home