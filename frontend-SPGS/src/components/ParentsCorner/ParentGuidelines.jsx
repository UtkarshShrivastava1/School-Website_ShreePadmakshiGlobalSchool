import React from 'react';

const ParentGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col justify-center items-center">
      <div className="w-4/5 mb-6 text-center mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Parents Guidelines</h2>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto">
        In order to achieve the common Bilaspur of satisfactory education and promoting the all-round development for your child here are few vital instructions for you to follow
        </p>
      </div>
      
      <div className="w-4/5 mx-auto">
        <div className="border border-blue-200 rounded-lg bg-white shadow-sm">
          <div className="bg-blue-50 p-4 flex items-center space-x-3 border-b border-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h2 className="text-lg font-semibold text-blue-800">Kindly read them carefully</h2>
          </div>
          
          <div className="p-4 space-y-4">
            {[
             " Kindly note that the school premises and the surrounding areas are under surveillance of CCTV cameras.",
              "Submit all the required documents/ certificate and photos etc. in time to avoid any inconveniences.",
             " Kindly insure prompt and timely payment of school fee/dues.",
              "School has an active SMS service to communicate with the parents on all school matters, kindly be active and alert to check all the messages received on your phone from the school.",
             " Any change in the correspondence address/ phone number/email id etc. should be promptly communicated to the school office for updating the school records.",
             " It is must for all the parents to attend PTM after every examination/ assessment to acquaint themselves with the latest progress of their wards in academics and co- scholastic activities.",
             " Please check your ward's almanac daily and sign the remarks if any to take necessary action.",
            "  Please ensure that your ward carries books/exercise books according to the timetable for the day.",
             " Kindly check the school bag, haircut, nails, uniform and punctuality of your ward in the morning before sending him/her in the school.",
             " Please be present at the school bus stop in the morning as well as in the afternoon when the school bus picks up and drops your ward at your respective bus stop."
            ].map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-base">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentGuidelines;