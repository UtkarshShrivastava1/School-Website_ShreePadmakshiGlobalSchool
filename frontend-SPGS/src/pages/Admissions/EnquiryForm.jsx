import React from "react";

const EnquiryDesignRedirect = () => {
  const redirectToRegistration = () => {
    window.location.href = "https://entab.online/Registration/RegistrationGroupClass";
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[#191f5d]">Enquiry Form</h2>

      <div className="space-y-4">
        <div className="bg-gray-100 px-4 py-2 rounded-md text-gray-500">Full Name</div>
        <div className="bg-gray-100 px-4 py-2 rounded-md text-gray-500">Email Address</div>
        <div className="bg-gray-100 px-4 py-2 rounded-md text-gray-500">Phone Number</div>

        <button
          onClick={redirectToRegistration}
          className="w-full bg-[#191f5d] hover:bg-[#2f3489] text-white py-2 px-4 rounded-md transition duration-300"
        >
          Submit Enquiry
        </button>
      </div>
    </div>
  );
};

export default EnquiryDesignRedirect;
