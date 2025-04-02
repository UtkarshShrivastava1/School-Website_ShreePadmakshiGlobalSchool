import React, { useState } from "react";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen p-15">
      {/* Page Title Section */}
      <div className="text-center mb-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Contact Us</h2>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column with Border */}
        <div className="lg:w-1/2 border-2 border-[#f25811]/20 rounded-lg p-6 bg-white shadow-lg">
          <div className="mb-6">
            <button className="bg-[#f25811]/10 text-[#f25811] px-4 py-2 rounded-full text-sm font-medium">
              Get In Touch
            </button>
          </div>

          <h2 className="text-3xl font-bold mb-4 text-[#191f5d]">Have Questions?</h2>

          <p className="text-gray-600 mb-8">
            Our HR team is here to help you with any questions about careers at
            Shree Padmakshi Global School 
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-lg text-[#191f5d]">
                  Human Resources Department
                </h3>
                <p className="text-gray-600">Shree Padmakshi Global School</p>
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
                <h3 className="font-medium text-lg text-[#191f5d]">Shree Padmakshi Global School</h3>
                <p className="text-gray-600">
                  near over bridge, Uslapur, Bilaspur C.G., Pincode- 495001.
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
                  spgsbilaspur@gmail.com
                </h3>
                <p className="text-gray-600">9111777295, 9424130028</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Modern Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-[#f25811] to-[#f25811]">
              <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-white text-opacity-80">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="firstName" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="lastName" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#f25811] to-[#f25811] text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;