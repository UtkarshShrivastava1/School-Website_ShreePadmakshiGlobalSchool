import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log("Form submitted:", formData);
  };

  const handleRegistrationClick = () => {
    window.open(
      "https://entab.online/Registration/RegistrationGroupClass",
      "_blank"
    );
  };

  // Add useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen p-15">
      {/* Page Title Section */}
      <div className="flex items-center justify-center mb-6 md:mb-10 px-4 md:px-0">
        <div className="w-12 md:w-1/5 lg:w-1/4 h-px bg-gray-300 flex-shrink-0"></div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-2 sm:px-4 md:px-6 text-center">
          Contact Us
        </h2>
        <div className="w-12 md:w-1/5 lg:w-1/4 h-px bg-gray-300 flex-shrink-0"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column with Contact Information */}
        <div className="lg:w-1/2 border-2 border-[#f25811]/20 rounded-lg p-6 bg-white shadow-lg">
          <div className="mb-6">
            <button className="bg-[#f25811]/10 text-[#f25811] px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-[#191f5d]">
            Have Questions?
          </h2>

          <p className="text-gray-600 mb-8">
            Our team is here to help you with any questions about admissions and
            academics at Shree Padmakshi Global School
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-[#f25811]/5 transition duration-300">
              <div className="w-10 h-10 bg-[#f25811]/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#f25811]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#191f5d]">Visit Us</h3>
                <p className="text-gray-600">
                  Near over bridge, Uslapur, Bilaspur C.G., Pincode- 495001.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-lg hover:bg-[#f25811]/5 transition duration-300">
              <div className="w-10 h-10 bg-[#f25811]/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#f25811]"
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
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#191f5d]">
                  Contact Info
                </h3>
                <p className="text-gray-600">admin@spgsbilaspur.com</p>
                <p className="text-gray-600">9111777295, 9424130028</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Registration Section */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-[#f25811] to-[#f25811]">
              <h2 className="text-3xl font-bold text-white mb-2">
                Get Started
              </h2>
              <p className="text-white text-opacity-80">
                Start your journey with Shree Padmakshi Global School
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#191f5d] mb-3">
                    Connect with us{" "}
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      Have questions about admissions? Fill in the form and
                      we’ll guide you.
                    </li>
                    <li>
                      Looking for the right start for your child’s future?
                      Connect with us today
                    </li>
                    <li>
                      Want to explore our curriculum and facilities? Just drop
                      your information below
                    </li>
                    <li>
                      We’re here to answer all your admission-related
                      queries—tell us how we can help
                    </li>
                  </ul>
                </div>

                <button
                  onClick={handleRegistrationClick}
                  className="w-full bg-gradient-to-r from-[#f25811] to-[#f25811] text-white py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span className="text-lg font-semibold">Register Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </button>

                <p className="text-sm text-gray-500">
                  By registering, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
