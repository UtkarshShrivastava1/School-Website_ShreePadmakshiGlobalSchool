import React from 'react'

const Extracurricular_activities = () => {
  return (
   <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Extracurricular Activities
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          We believe that education extends beyond the classroom. Our extensive extracurricular 
          programs allow students to explore their interests, develop new skills, and build 
          meaningful relationships with peers who share their passions.
        </p>

        {/* Athletics & Clubs Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Athletics */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-blue-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Athletics</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Our athletic program includes varsity and junior varsity teams competing in 
                regional and state competitions. We foster sportsmanship, teamwork, and 
                physical fitness through a variety of sports.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Basketball", "Soccer", "Swimming", "Tennis", "Track & Field", "Volleyball"].map((sport, idx) => (
                  <div key={idx} className="bg-gray-100 rounded-lg py-2 text-center text-sm font-medium text-gray-700">
                    {sport}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clubs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-48 bg-green-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">Clubs & Organizations</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Students can choose from over 40 clubs and organizations ranging from academic 
                competition teams to service organizations and special interest groups.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Debate Team", "Robotics Club", "Model UN", "Student Govt", "Enviro Club", "Literary Mag"].map((club, idx) => (
                  <div key={idx} className="bg-gray-100 rounded-lg py-2 text-center text-sm font-medium text-gray-700">
                    {club}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Programs */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Arts */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-32 bg-purple-600 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Arts Program</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Visual arts, theater, music, and dance programs with professional-grade 
                facilities and annual showcases.
              </p>
            </div>
          </div>

          {/* Community Service */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-32 bg-yellow-600 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Community Service</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Students complete 100+ service hours through local partnerships and 
                international service trips.
              </p>
            </div>
          </div>

          {/* Leadership */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-32 bg-red-600 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Leadership Development</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-600">
                Dedicated leadership courses and opportunities to lead initiatives and mentor 
                younger students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extracurricular_activities
