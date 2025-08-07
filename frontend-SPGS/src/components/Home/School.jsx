import Primary_School from "../../assets/c-2.jpg";
import Lower_School from "../../assets/c-1.jpg";
import Middle_School from "../../assets/c-4.jpg";
import Upper_School from "../../assets/c-3.jpg";
import { NavLink } from "react-router-dom";

const CommunityVoices = () => {
  const sections = [
    {
      title: "Pre-Primary School",
      imgSrc: Primary_School,
      alt: "Primary School Students",
      description:
        "Experience the joy of early learning in our nurturing environment where young minds flourish through discovery and play.",
      class: "Nursery to KG-2",
      link: "/academics-pre-primary",
    },
    {
      title: "Primary School",
      imgSrc: Lower_School,
      alt: "Lower School Students",
      description:
        "Lower School fosters curiosity and growth through personalized learning, supportive relationships, and joyful discovery.",
      class: "1 to 5",
      link: "/academics-primary",
    },
    {
      title: "Middle School",
      imgSrc: Middle_School,
      alt: "Middle School Students",
      description:
        "Our Middle School empowers students to explore their passions, develop independence, and grow as young leaders.",
      class: "6 to 8",
      link: "/academics-middle",
    },
    {
      title: "Secondary School",
      imgSrc: Upper_School,
      alt: "Upper School Students",
      description:
        "Upper School students thrive in a rigorous academic environment that prepares them for college and life beyond.",
      class: "9 to 12",
      link: "/academics-upper",
    },
  ];

  return (
    <div className="bg-amber-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6 text-center">
            Our Educational Programs
          </h2>
          <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="md:flex">
                <div className="md:w-2/5 relative">
                  <img
                  lazyLoading="lazy"
                    src={section.imgSrc}
                    alt={section.alt}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{section.description}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-5">
                      <span className="text-orange-700">Class:</span>{" "}
                      {section.class}
                    </p>
                  </div>
                  <NavLink
                    to={section.link}
                    className="inline-flex items-center text-red-700 font-medium hover:text-amber-600 transition-all duration-200"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityVoices;
