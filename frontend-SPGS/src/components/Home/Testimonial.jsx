import AnimatedTestimonials from "../ui/animated-testimonial";
import SPGS16 from "../../assets/Testimonial/SPGS16.jpg";
import SPGS07 from "../../assets/Testimonial/SPGS07.jpg";
import SPGS10 from "../../assets/Testimonial/SPGS10.jpg";
import SPGS06 from "../../assets/Testimonial/SPGS06.jpg";
import SPGS18 from "../../assets/Testimonial/SPGS18.jpg";

function Testimonial() {
  const testimonials = [
    {
      quote:      
      `It was really an entertaining program. Enthusiastic efforts show by all the 
participants and the fecilitators.as it was my daughter's first performance on the stage we got 
overwhelmed to see her performing on the stage without any  hesitation our deepest thanks 
to lekhni mam for grooming her in this way .The time will remain memorable in our life as she 
got her first recognition on this platform.`,
      name: "ISHANVI SRIWASTAV ",
      designation: "Nursery Student",
      src: SPGS16,
    },
    {
      quote:
        ` 
The teachers at the school are excellent.
My son receives excellent support beyond what I expected at the outset.
Yesterday excellent annual function
Thanks `,
      name: " Harsh Ratre",
      designation: "Class – Nursery",
      src: SPGS18,
    },
    {
      quote:
        `Good evening everyone.
I would like to take a moment to Thank The principal Mam, Teachers and All the staff for
organizing such a wonderful annual function.
It is evident that a lot of effort, Time & Dedication have gone into making this event
successful.

These kinds of events provide a great platform for our children to showcase their talents and
build their confidence.
As a parent,it fills my heart with immense Pride to see my daughter participating with such
enthusiasm.
The constant support and encouragement from her teachers brought out the best in her .
Thanks & Regards`,
      name: `Satya prakash pandey`,
      designation: "Father of - Shravya Pandey",
      src: SPGS07,
    },
    {
      quote:
       `Good evening ma’am.
Thank you so much for organising such an amazing show yesterday. We were left awestruck
with the entire performance. We can clearly see how much hard work, organising and
coordinating must have gone into it by all the teachers and staffs. The whole show was
breathtaking!❤
Many many congratulations to you and entire school team
 `,
      name: "Prisha Pandey",
      designation: "Parent of Prisha Pandey",
      src: SPGS10,
    },
    {
      quote:
        `The Annual Function at Shree Padmakshi Global Mount Litera School was a fantastic
event! My Son, Aadvik Todekar, had an incredible time performing alongside his friends. The
performances were well-organized. showcasing the students' talents and creativity. The
inspiring theme and vibrant decorations added to the excitement. It was wonderful to see
Aadvik shine on stage, reflecting the hard work and dedication of both students and teachers.
Kudos to the entire staff for making it such a memorable and enjoyable experience for
everyone. A proud moment for us parents!
Thanks And Regards
`,
      name: "Sourabh Todekar",
      designation: "F/O Aadvik Todekar Class 5 B",
      src: SPGS06,
    },
    
  ];

  return (
    <>
      <div className="flex items-center justify-center mb-8 md:mb-10 mt-4">
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-3 md:px-6 text-center">
          Testimonials
        </h2>
        <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      </div>

      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}

export default Testimonial;
