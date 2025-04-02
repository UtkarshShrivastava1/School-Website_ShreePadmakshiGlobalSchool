import React from 'react';

const StudentGuidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10 flex flex-col justify-center items-center">
      <div className="w-4/5 mb-6 text-center mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">Student Guidelines</h2>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
        <p className="text-gray-600 max-w-4xl mx-auto">
        Shree Padmakshi Global School is an institution for teaching and education wherein we have a set of rules to ensure discipline and safety of all members of our educational community. Every student’s enrolment at Shree Padmakshi Global School means adhering to the defined set of rules and a commitment towards respecting them. Parents are advised to explain to their children about these rules and help them understand its virtue in establishing harmony. These rules include:
        </p>
      </div>
      
      <div className="w-4/5 mx-auto">
        <div className="border border-blue-200 rounded-lg bg-white shadow-sm">
          <div className="bg-blue-50 p-4 flex items-center space-x-3 border-b border-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h2 className="text-lg font-semibold text-blue-800">School Rules</h2>
          </div>
          
          <div className="p-4 space-y-4">
            {[
              "Every student should carry the Almanac to the School daily.",
              "Students who come to the School through Private transport should arrive at the School five minutes before the bell rings",
              "Students should be habitually clean and always neatly dressed.",
              "The School uniform must be worn on all working days.",
              "Girls should not apply nail polish or mehndi during School session. Nails to be trimmed at least once a week.",
              "Girls can wear very small studs or ear rings in gold or silver.",
              "It is not advisable to bring valuable articles to the School.",
              "Students are not allowed to bring mobile phones/iPods/cameras etc. into the School campus. These gadgets, if found in possession of the students within the School campus, will be confiscated.",
              "The name, class and section of the pupil should be clearly marked on all the belongings of the student.",
              "Changing classrooms between periods, where necessary, should be done silently and in an orderly manner.",
              "Care must be taken of all School property and no student should scratch or spoil the desks or charts or damage any furniture, write or draw anything on the walls or damage things belonging to others.",
              "Damage done should be reported at once to the class teacher or Admin department. Any damage caused will have to be made good by the student(s) concerned.",
              "The School reserves the right to suspend/ expel students whose conduct is harmful to other students or to the School.",
              "Students are not permitted to buy eatables from vendors outside the School premises.",
              "The School students should be proud of their school and uphold the values and ethics. Their code of conduct is the reflection of their education in school.",
              "Senior students should be responsible to take care of the junior students within the premises and in the school bus. Bullying in any form is not acceptable.",
              "It is mandatory to wear Identity cards everyday to school."
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

export default StudentGuidelines;