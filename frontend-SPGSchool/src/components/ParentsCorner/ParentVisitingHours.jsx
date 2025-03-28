import React, { useState, useEffect } from "react";
import { Clock, Info, MapPin, ExternalLink, Phone } from "lucide-react";

const VisitingHoursPage = () => {
  const [activeTab, setActiveTab] = useState("principal");
  const [animate, setAnimate] = useState(false);

  // Add animation on page load
  useEffect(() => {
    setAnimate(true);
  }, []);

  const staffInfo = {
    principal: {
      title: "Available Hours",
      hours: "9:00 AM to 3:00 PM (Monday - Friday)",
      description:
        "The Principal is available to discuss academic policies, student performance, and school-wide initiatives.",
    },
    coordinator: {
      title: "Office Hours",
      hours: "12:00 PM to 3:00 PM (Monday - Friday)",
      description:
        "The School Coordinator assists with program enrollment, curriculum questions, and parent-teacher coordination.",
    },
    administration: {
      title: "Front Desk Hours",
      hours: "9:00 AM to 3:00 PM (Monday - Friday)",
      description:
        "Administration staff can help with general inquiries, forms, attendance, and scheduling appointments with other staff members.",
    },
  };

  return (
    <div
      className={`max-w-6xl mx-auto p-6 ${
        animate ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-12">
        <div
          className={`flex-1 ${
            animate
              ? "translate-x-0 transition-transform duration-1000 delay-300"
              : "-translate-x-10"
          }`}
        >
          <div className="flex justify-center mb-4">
            <span
              className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium 
              hover:bg-orange-200 hover:text-orange-800 transition-colors duration-300"
            >
              Parent Resources
            </span>
          </div>
          <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
              Visiting Hours For Parents
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>

          {/* <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Visiting Hours <span className="text-orange-600 hover:text-orange-800 transition-colors duration-300">For Parents</span>
          </h1>
           */}
          <p className="text-slate-700 mb-6">
            The school would like parents to maintain a close rapport with their
            children's teachers and meet them periodically. Apart from PTM, the
            Principal and members of the faculty will make every effort to make
            themselves available to meet parents on request, at mutually
            convenient times on working days, by prior appointment. Parents
            should please call up the school in advance to ask for an
            appointment with the principal and can meet the teachers at the time
            mentioned below.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="flex items-center bg-slate-900 text-white px-4 py-2 rounded-md
              hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Schedule Appointment
            </button>
            <button
              className="flex items-center border border-slate-300 px-4 py-2 rounded-md
              hover:bg-slate-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {["Important Notice", "Location", "E-Mail"].map((title, i) => (
          <div
            key={title}
            className={`border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform
              ${
                animate
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            style={{ transitionDelay: `${700 + i * 200}ms` }}
          >
            <div className="flex items-start mb-4">
              {i === 0 && <Info className="w-5 h-5 text-orange-600 mr-2" />}
              {i === 1 && <MapPin className="w-5 h-5 text-orange-600 mr-2" />}
              {i === 2 && (
                <ExternalLink className="w-5 h-5 text-orange-600 mr-2" />
              )}
              <h2 className="text-xl font-semibold text-orange-600">{title}</h2>
            </div>
            <p className="text-slate-700">
              {i === 0 &&
                "All important information from the school is communicated through the school website, email, and SMS."}
              {i === 1 &&
                "Our school is located at Mount Litera Zee School Uslapur, Bilaspur C.G., Pincode- 495001."}
              {i === 2 &&
                "You may contact the school through e-mails to Mlzs.bilaspur@mountlitera.com"}
            </p>
          </div>
        ))}
      </div>

      {/* Staff Availability Section */}
      <div
        className={`border border-gray-200 rounded-lg p-6 mb-12 ${
          animate
            ? "translate-y-0 opacity-100 transition-all duration-1000 delay-1300"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Staff Availability Hours
        </h2>
        <p className="text-slate-700 mb-6">
          Parents should call the school in advance to schedule an appointment
          with our staff.
        </p>

        {/* Staff Tab Navigation */}
        <div className="grid grid-cols-3 mb-6 rounded-t-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("principal")}
            className={`py-3 text-center font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "principal"
                ? "bg-white border-b-2 border-orange-600 text-orange-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Principal
          </button>
          <button
            onClick={() => setActiveTab("coordinator")}
            className={`py-3 text-center font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "coordinator"
                ? "bg-white border-b-2 border-orange-600 text-orange-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            School Coordinator
          </button>
          <button
            onClick={() => setActiveTab("administration")}
            className={`py-3 text-center font-medium transition-all duration-300 cursor-pointer ${
              activeTab === "administration"
                ? "bg-white border-b-2 border-orange-600 text-orange-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Administration
          </button>
        </div>

        {/* Staff Availability Content */}
        <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg transition-all duration-500">
          <div className="bg-orange-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">
              {staffInfo[activeTab].title}
            </h3>
            <p className="text-slate-700 mb-4 font-bold">
              {staffInfo[activeTab].hours}
            </p>
            <p className="text-slate-700">{staffInfo[activeTab].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitingHoursPage;
