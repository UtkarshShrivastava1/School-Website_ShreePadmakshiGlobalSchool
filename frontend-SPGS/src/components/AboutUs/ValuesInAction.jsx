import { useState } from "react";
import {
  BookOpen,
  Users,
  Award,
  Heart,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function SchoolValuesPage() {
  const [activeValue, setActiveValue] = useState(null);

  const values = [
    {
      id: 1,
      title: "Excellence",
      icon: <Award className="w-12 h-12 text-yellow-500" />,
      description:
        "We strive for excellence in all aspects of education, challenging our students to reach their highest potential academically, socially, and emotionally.",
      examples: [
        "Academic competitions with 25+ awards this year",
        "Advanced placement programs with 90% success rate",
        "Faculty professional development program",
        "Student achievement recognition programs",
      ],
    },
    {
      id: 2,
      title: "Respect",
      icon: <Users className="w-12 h-12 text-blue-500" />,
      description:
        "We foster a community built on mutual respect, where diversity is celebrated and every individual is valued for their unique contributions.",
      examples: [
        "Cultural diversity celebrations throughout the year",
        "Peer mediation program led by student ambassadors",
        "Community service initiatives",
        "Inclusive classroom practices",
      ],
    },
    {
      id: 3,
      title: "Integrity",
      icon: <Heart className="w-12 h-12 text-red-500" />,
      description:
        "We uphold the highest standards of honesty, ethics, and responsibility in all our actions and decisions.",
      examples: [
        "Student honor code developed collaboratively",
        "Character education integrated into curriculum",
        "Transparency in school governance",
        "Ethical decision-making framework for students",
      ],
    },
    {
      id: 4,
      title: "Innovation",
      icon: <Lightbulb className="w-12 h-12 text-green-500" />,
      description:
        "We embrace creativity and forward-thinking approaches to prepare our students for an ever-changing world.",
      examples: [
        "Technology integration across all subjects",
        "Student-led innovation lab and maker space",
        "Design thinking workshops for real-world problems",
        "Entrepreneurship program for young innovators",
      ],
    },
    {
      id: 5,
      title: "Growth Mindset",
      icon: <BookOpen className="w-12 h-12 text-purple-500" />,
      description:
        "We believe in the power of yet - that abilities can be developed through dedication, hard work, and a positive attitude toward learning from mistakes.",
      examples: [
        "Reflection practices embedded in assessments",
        "Growth-focused feedback rather than grades-only approach",
        "Goal-setting and progress monitoring",
        "Celebration of effort and improvement",
      ],
    },
  ];

  const toggleValue = (id) => {
    setActiveValue(activeValue === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Our Values in Action
          </h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto">
            At our school, we don't just talk about values - we live them every
            day. Discover how our core principles shape everything we do.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {values.map((value) => (
            <div
              key={value.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() => toggleValue(value.id)}
              >
                <div className="flex items-center">
                  <div className="mr-6">{value.icon}</div>
                  <h3 className="text-2xl font-semibold">{value.title}</h3>
                </div>
                {activeValue === value.id ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </div>

              {activeValue === value.id && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 mb-4">{value.description}</p>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      How We Live This Value:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2">
                      {value.examples.map((example, index) => (
                        <li key={index} className="text-gray-700">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Community Speaks
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-gray-700 mb-4">
                "Our school's commitment to excellence has pushed me to achieve
                things I never thought possible. The teachers believe in us and
                help us grow every day."
              </p>
              <p className="font-semibold">- Sarah J., 12th Grade Student</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-gray-700 mb-4">
                "I've watched my son develop not just academically, but as a
                person with strong values and character. The school's focus on
                integrity and respect is evident in everything they do."
              </p>
              <p className="font-semibold">- Michael P., Parent</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic text-gray-700 mb-4">
                "Having taught at several schools, I can say that the innovation
                and growth mindset here creates an exceptional learning
                environment where both students and faculty thrive."
              </p>
              <p className="font-semibold">- Ms. Rodriguez, Science Faculty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Experience Our Values Firsthand
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          We invite you to visit our campus and see our values in action.
          Schedule a tour, attend an event, or speak with our community members.
        </p>
        {/* <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          Schedule a Visit
        </button> */}
      </div>
    </div>
  );
}
