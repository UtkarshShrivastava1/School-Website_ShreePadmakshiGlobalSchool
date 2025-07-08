import AnimatedTestimonials from "../ui/animated-testimonial";

function Testimonial() {
  const testimonials = [
    {
      quote:
        "Ever since my son joined this school, I've seen remarkable growth in his confidence and discipline. Truly a nurturing environment.",
      name: "Anita Verma",
      designation: "Parent of Class 6 Student",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "We love how the teachers are so involved and genuinely care about the kids’ progress. A wonderful place for learning and growing.",
      name: "Ramesh Iyer",
      designation: "Parent of Class 4 Student",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The school's focus on values and life skills is exactly what we were looking for. My daughter is thriving here.",
      name: "Meena Sharma",
      designation: "Parent of Class 8 Student",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Excellent infrastructure, great academics, and a strong support system for students. I'm proud to be part of this school community.",
      name: "Amit Desai",
      designation: "Parent of Class 10 Student",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "This school has helped shape my child into a responsible and curious learner. Couldn't have asked for better teachers.",
      name: "Kavita Patel",
      designation: "Parent of Class 2 Student",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
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
