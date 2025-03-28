import React, { useState } from 'react';

const AttendanceMatters = () => {
    const [activeTab, setActiveTab] = useState('general');

  return (
    <>
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          The Importance
        </span>
        <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Why Attendance Matters
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
       
        <p className="text-gray-600 max-w-2xl mx-auto">
          Regular attendance is directly linked to academic achievement and social development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Academic Success Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-orange-50 p-4 inline-block rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Academic Success</h2>
          <p className="text-gray-600">
            Students who attend regularly achieve higher grades and develop stronger understanding of material.
          </p>
        </div>

        {/* Skill Development Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-orange-50 p-4 inline-block rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Skill Development</h2>
          <p className="text-gray-600">
            Consistent attendance helps build essential skills like time management and responsibility.
          </p>
        </div>

        {/* Legal Requirement Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="bg-orange-50 p-4 inline-block rounded-lg mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-4">Legal Requirement</h2>
          <p className="text-gray-600">
            School attendance is mandated by state law and is monitored by educational authorities.
          </p>
        </div>
      </div>
    </div>

    {/* //AttandancePolicy  */}
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Policy Details
        </span>
        <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Our Attendance Policy
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
        
       
        <p className="text-gray-600">
          Clear guidelines to ensure consistent attendance and academic success.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
  <div className="flex space-x-2">
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium ${
        activeTab === 'general' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}
      onClick={() => setActiveTab('general')}
    >
      General Policy
    </button>
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium ${
        activeTab === 'absences' ? 'bg-orange-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}
      onClick={() => setActiveTab('absences')}
    >
      Absences
    </button>
    {/* <button
      className={`px-6 py-3 rounded-full text-sm font-medium ${
        activeTab === 'tardiness' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}
      onClick={() => setActiveTab('tardiness')}
    >
      Tardiness
    </button> */}
  </div>
</div>


      {/* General Policy Content */}
      {activeTab === 'general' && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">General Attendance Requirements</h2>
          <p className="text-gray-600 mb-6">The foundation of our attendance policy</p>

          <div className="space-y-6">
            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Daily Attendance</h3>
                <p className="text-gray-600">Students are expected to attend school every day that school is in session.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Minimum Attendance Rate</h3>
                <p className="text-gray-600">Students must maintain a minimum attendance rate of 90% throughout the academic year.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Reporting Absences</h3>
                <p className="text-gray-600">Parents/guardians must notify the school of any absence by 9:00 AM on the day of absence.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Documentation</h3>
                <p className="text-gray-600">Medical documentation or other official documentation is required for absences exceeding three consecutive days.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other tabs */}
      {activeTab === 'absences' && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">Excused vs. Unexcused Absences</h2>
          <p className="text-gray-600">Understanding the different types of absences</p>

          <div className="space-y-6 p-5">
            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Late to school</h3>
                <p className="text-gray-600">
                The school takes the absence of students from school on regular working days, very seriously. We appreciate parental help in ensuring all students reach school regularly and on time. Latecomers will not be allowed to enter school. Parents will be notified and the student will be marked as absent from school.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Permission for absence</h3>
                <p className="text-gray-600">
                A written application for absenting themselves from school has to be sought in case students have an important family occasion. Preferably, family functions should be limited to weekends or school holidays. The holiday list is given to the students at the beginning of the session.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Excused Absence</h3>
                <p className="text-gray-600">
                In case of an illness, death or other unexpected circumstances, an application for absence should accompany the student on the day they re-join school. A medical leave certificate from the doctor needs to be presented to substantiate a medical leave.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Excessive Absence</h3>
                <p className="text-gray-600">A fair number of students are found to be regularly absent before or during exams, during school excursions, School Sports day, picnics etc. The school does not condone any absence in such cases. Students who are regular with their work are able to cope up with the demands of their courses. As far as activities are concerned, these are a regular part of the school curriculum and all students are expected to take part in them.</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-800 font-medium">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Home Schooling</h3>
                <p className="text-gray-600">
                Many self-driven students prefer to go for special classes during school hours. Parents are requested to ensure that such classes do not clash with school. Students found playing truant, either for pleasure or for attending other courses are liable to be suspended or expelled from school.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {activeTab === 'tardiness' && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-2xl font-bold mb-2">Tardiness Policy</h2>
          <p className="text-gray-600">This section would contain details about the tardiness policy.</p>
        </div>
      )} */}
    </div>

    </>
  );
};


export default AttendanceMatters;