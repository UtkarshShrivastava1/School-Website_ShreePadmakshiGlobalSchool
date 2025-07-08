import React from 'react'
import { useState } from 'react';
import Class from '../../assets/Classroom/ClassN3.jpg'
import { Link } from 'react-router-dom';
import image from "../../assets/c-2.png";

const AcademicUpper = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const academicPrograms = [
    { title: "Advanced Placement (AP)", description: "We offer over 15 AP courses including Calculus, Biology, Chemistry, Physics, Literature, History, and Computer Science." },
    { title: "Honors Courses", description: "Challenging courses designed for students who excel academically and seek deeper understanding of subject matter." },
    { title: "STEM Program", description: "Specialized curriculum focusing on robotics, programming, engineering, and advanced mathematics." },
    
    { title: "Dual Enrollment", description: "Partnership with local colleges allowing students to earn college credits while completing high school." }
  ];


  const upcomingEvents = [
    { name: "College Application Workshop", date: "April 15, 2025", location: "Main Hall" },
    { name: "AP Exam Prep Session", date: "April 22, 2025", location: "Library" },
    { name: "Spring Arts Festival", date: "May 2, 2025", location: "Campus Quad" },
    { name: "Senior Research Symposium", date: "May 12, 2025", location: "Science Building" }
  ];

  const testimonials = [
    { quote: "The rigorous curriculum and supportive teachers helped me secure admission to my dream Ivy League university.", author: "Emma J., Class of 2024" },
    { quote: "The STEM program provided hands-on experience that prepared me for my engineering major in college.", author: "David L., Class of 2023" }
  ];
  return (
    <div>
       <div className="min-h-screen bg-gray-50">
         
      {/* Hero Section */}
      {/* <div className="relative bg-[#191f5d] text-white"> */}
        {/* Background Image Wrapper */}
       <div
  className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat flex items-center"
  style={{ backgroundImage: `url(${image})` }}
>
  <div className="w-full h-full bg-black/50 flex items-center">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 text-white text-center sm:text-left">
      <div className="max-w-3xl mx-auto sm:mx-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Secondary School</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
          Grades 9-12: Preparing Students for College and Beyond
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto sm:mx-0">
          Our Upper School provides a rigorous college preparatory experience in a supportive
          environment, empowering students to develop academic excellence, leadership skills,
          and personal growth.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {['overview', 'academics', 'faculty', 'extracurricular', 'college'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-4 font-medium text-sm uppercase tracking-wider cursor-pointer ${
                  activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'overview' ? 'Overview' : 
                 tab === 'academics' ? 'Academic Program' : 
                 tab === 'faculty' ? 'Faculty & Staff' :
                 tab === 'extracurricular' ? '' :
                 'College Prep'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the Secondary School</h2>
              <p className="text-gray-600 mb-4">
                Our Upper School serves students in grades 9-12, offering a challenging academic program 
                designed to prepare graduates for success in college and beyond. With a focus on academic 
                excellence, character development, and leadership skills, we create a transformative 
                educational experience.
              </p>
              <p className="text-gray-600 mb-6">
                Small class sizes enable our faculty to provide individualized attention and create a 
                supportive learning environment where students can thrive intellectually and personally.
              </p>

              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-4xl font-bold text-blue-600">12:1</p>
                    <p className="text-sm text-gray-600">Student-to-Teacher Ratio</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600">98%</p>
                    <p className="text-sm text-gray-600">College Acceptance Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600">25+</p>
                    <p className="text-sm text-gray-600">AP & Honors Courses</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-blue-600">40+</p>
                    <p className="text-sm text-gray-600">Clubs & Activities</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-800">Upcoming Events</h3>
                <ul className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="border-b border-blue-100 pb-2 last:border-0">
                      <p className="font-medium text-gray-800">{event.name}</p>
                      <p className="text-sm text-gray-600">{event.date} | {event.location}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={Class} alt="Students in classroom" className="w-full h-81  object-full" />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Student Testimonials</h3>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <p className="italic text-gray-600 mb-2">"{testimonial.quote}"</p>
                    <p className="text-sm font-medium text-gray-800">— {testimonial.author}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-green-800">Schedule a Visit</h3>
                <p className="text-gray-600 mb-4">
                  Experience our Upper School firsthand by scheduling a campus tour or shadow day.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
                  Request Information
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Academic Program Section */}
        {activeTab === 'academics' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Academic Program</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Our college preparatory curriculum is designed to challenge students intellectually, 
              foster critical thinking skills, and prepare them for success in higher education. 
              We offer a wide range of courses including Advanced Placement, Honors, and electives 
              tailored to various interests and career paths.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {academicPrograms.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Graduation Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-700">English</h4>
                    <p className="text-gray-600">4 credits (including Literature and Composition)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Mathematics</h4>
                    <p className="text-gray-600">4 credits (through at least Pre-Calculus)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Science</h4>
                    <p className="text-gray-600">3 credits (including Biology, Chemistry, and Physics)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Social Studies</h4>
                    <p className="text-gray-600">3 credits (including World History and US History)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">World Languages</h4>
                    <p className="text-gray-600">3 credits (of the same language)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Arts</h4>
                    <p className="text-gray-600">1 credit (Visual or Performing Arts)</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Physical Education/Health</h4>
                    <p className="text-gray-600">1 credit</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700">Electives</h4>
                    <p className="text-gray-600">5 credits</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Academic Support</h3>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">Advisory Program</h4>
                  <p className="text-gray-600 mb-4">
                    Each student is assigned a faculty advisor who provides academic guidance, 
                    monitors progress, and serves as the primary liaison between school and family.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">Learning Center</h4>
                  <p className="text-gray-600 mb-4">
                    Our Learning Center offers individualized support, study skills workshops, 
                    and accommodations for students with diverse learning needs.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-gray-700 mb-2">Tutoring Services</h4>
                  <p className="text-gray-600 mb-4">
                    Free peer tutoring is available for all subjects, and faculty members 
                    hold regular office hours for additional help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Extracurricular Section */}
        {activeTab === 'extracurricular' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Extracurricular Activities</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              We believe that education extends beyond the classroom. Our extensive extracurricular 
              programs allow students to explore their interests, develop new skills, and build 
              meaningful relationships with peers who share their passions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-blue-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Athletics</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Our athletic program includes varsity and junior varsity teams competing in 
                    regional and state competitions. We foster sportsmanship, teamwork, and 
                    physical fitness through a variety of sports.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 rounded p-2 text-center">Basketball</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Soccer</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Swimming</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Tennis</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Track & Field</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Volleyball</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-green-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Clubs & Organizations</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Students can choose from over 40 clubs and organizations ranging from academic 
                    competition teams to service organizations and special interest groups.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 rounded p-2 text-center">Debate Team</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Robotics Club</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Model UN</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Student Government</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Environmental Club</div>
                    <div className="bg-gray-100 rounded p-2 text-center">Literary Magazine</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-purple-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Arts Program</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-2">
                    Visual arts, theater, music, and dance programs with professional-grade facilities and annual showcases.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-yellow-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Community Service</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-2">
                    Students complete 100+ service hours through local partnerships and international service trips.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-32 bg-red-600 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">Leadership Development</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-2">
                    Dedicated leadership courses and opportunities to lead initiatives and mentor younger students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* College Prep Section */}
        {activeTab === 'college' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">College Preparation</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Our comprehensive college counseling program guides students through every step of the 
              college application process, from selecting the right schools to writing compelling essays 
              and preparing for interviews.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">College Counseling</h3>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">9th Grade</h4>
                  <p className="text-gray-600">
                    Introduction to college counseling, academic planning, and exploring extracurricular interests.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">10th Grade</h4>
                  <p className="text-gray-600">
                    PSAT preparation, preliminary college exploration, and guidance on course selection.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h4 className="font-bold text-gray-700 mb-2">11th Grade</h4>
                  <p className="text-gray-600">
                    Individual counseling meetings, standardized test preparation, college visits, and creating a college list.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold text-gray-700 mb-2">12th Grade</h4>
                  <p className="text-gray-600">
                    Application strategy, essay workshops, interview preparation, and financial aid guidance.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">College Acceptances</h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-600 mb-4">
                    Recent graduates have been accepted to prestigious institutions including:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Harvard University</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Stanford University</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">MIT</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Yale University</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Princeton University</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Duke University</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">UC Berkeley</div>
                    <div className="bg-blue-50 rounded p-2 text-center text-blue-800">Johns Hopkins</div>
                  </div>
                </div>

                <div className="mt-8 bg-blue-600 text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">College Counseling Resources</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Dedicated college counselors (1:30 counselor-to-student ratio)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>College admission representative visits</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>SAT/ACT prep courses</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>College essay writing workshops</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Financial aid and scholarship guidance</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span>Interview preparation and mock interviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-[#191f5d] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a campus visit, attend an open house, or speak with our admissions team 
            to learn more about our Upper School program.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition">
              <Link to="https://entab.online/Registration/RegistrationGroupClass">
               Apply Now
              </Link>
             
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-medium transition">
              <Link to=" ">
                Request Information
              </Link>
           
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AcademicUpper


