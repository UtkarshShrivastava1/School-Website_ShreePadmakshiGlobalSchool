import React from "react";
// import image4 from "../assets/";
import { User, BookOpen, GraduationCap, Users } from "lucide-react"

const PrincipalWelcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Principal's Message</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">A warm welcome from our school leadership</p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* School Values Banner */}
          <div className="bg-[#f25811] text-white py-3 px-6 flex justify-center space-x-8 md:space-x-16 text-sm">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              <span>Excellence</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>Community</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Achievement</span>
            </div>
          </div>

          <div className="md:flex">
      {/* Principal Info */}
      <div className="md:w-1/3 bg-gray-50 p-6 flex flex-col items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center mb-6 border-4 border-primary/20 overflow-hidden shadow-md">
          {/* Principal's photo */}
          <img 
            src="https://mlz.epfuture.in/SMSImages/StaffDocuments//EMUG128110035/PH_PHOTO.jpeg" 
            alt="Mrs. Sweta Singh"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <User className="w-24 h-24 text-gray-400" style={{ display: 'none' }} />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">Mrs. Sweta Singh</h2>
        <p className="text-primary font-medium mb-3">Principal</p>
      </div>
    

            {/* Message Content */}
            <div className="md:w-2/3 p-6 md:p-10">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Dear Parents, Students, and Community Members,
                </h3>

                <p className="mb-4">
                I am delighted to welcome you to Shree Padmakshi Global School, a vibrant and inclusive community of learners. 
                As Principal, I am committed to providing a world-class education that prepares students for success in an eve-changing world.
                </p>

                <p className="mb-4">
                At Shree Padmakshi Global School, we believe that every child is unique and deserves a personalized learning 
experience. Our dedicated and experienced faculty are passionate about teaching and learning, and are committed 
to helping each student reach their full potential.
                </p>

                <p className="mb-4">
                Our school offers a rigorous and well-rounded curriculum, state-of-the-art facilities, and a wide range of 
extracurricular activities. We strive to create a safe, supportive, and inclusive environment that fosters social, 
emotional, and academic growth
                </p>

                <p className="mb-4">
                As you explore our prospectus, I invite you to discover the many opportunities and experiences that Shree 
Padmakshi Global School has to offer. I am confident that our school community will provide your child with a rich 
and rewarding educational experience.
                </p>

                <p className="mb-6">
                  I invite you to explore our website to learn more about our programs, achievements, and the vibrant
                  community that makes our school special. Should you have any questions or wish to visit our campus,
                  please do not hesitate to contact us.
                </p>
                <p className="mb-2">
                Thank you for considering Shree Padmakshi Global School as your partner in education.
                
                </p>

                <p className="mb-2">Sincerely,,</p>
                <p className="italic font-medium">Mrs. Sweta Singh</p>
                <p className="text-sm text-muted-foreground">Principal, Shree Padmakshi Global Schoo</p>
              </div>

              {/* Signature Image Placeholder */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="h-16 w-48 bg-gray-100 rounded flex items-center justify-center text-gray-400 italic text-sm">
                  Signature
                </div>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <div className="bg-gray-50 border-t border-gray-200 p-4 text-center text-sm text-muted-foreground">
            "Education is the most powerful weapon which you can use to change the world." — Nelson Mandela
          </div>
        </div>

        {/* Contact Button */}
        <div className="text-center mt-8">
          <button className="bg-[#f25811] hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full shadow-md transition-all flex items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact the Principal
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PrincipalWelcome;
