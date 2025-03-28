import img from "../assets/c-3.png"
import { ArrowRight, BookOpen, Brain, Users, Award, Calendar } from "lucide-react"

export default function PrimarySchoolProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=600&dpr=2"
            alt="Primary School Children Learning"
            fill
            className="object-cover w-full h-[100%] brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Primary School Program</h1>
          <p className="mt-6 max-w-2xl text-xl">
            Focusing on the child's potential both inside and outside the classroom, delivered using the Litera Octave
            Approach.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">MLZS-Bilaspur Primary</h2>
            <p className="text-lg text-gray-700 mb-6">
              At the second phase of schooling, as the I.Q. level of the child increases, the teaching-learning
              methodology takes a step ahead. Our purpose is to make these years as exciting as the previous years and
              at the same time fulfilling & productive too.
            </p>
            <p className="text-lg text-gray-700">
              The children are encouraged to participate in the broad spectrum of co-curricular activities. The
              evaluation procedure is named CCE i.e. Continuous & Comprehensive Evaluation. Activities and projects are
              conducted from time to time. This makes the child constantly alert about his performance without any
              laxity.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={img}
              alt="Students engaged in learning activities"
              fill
              className="object-cover h-[100%]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Teachers create all learning experiences covering a range of learning needs. By the time children move
              from the Primary School Program to the Middle School Program, they will have 'learnt to learn'.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#800000]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                A well-rounded curriculum designed to develop academic excellence and practical skills.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Litera Octave Approach</h3>
              <p className="text-gray-600">
                A unique teaching methodology that enhances the child's intellectual capabilities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Co-curricular Activities</h3>
              <p className="text-gray-600">Broad spectrum of activities to develop talents beyond academics.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Evaluation</h3>
              <p className="text-gray-600">
                CCE methodology ensures consistent monitoring and improvement of performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/8926556/pexels-photo-8926556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Interactive classroom learning"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Methodology</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our teaching-learning methodology is designed to make these formative years exciting, fulfilling, and
              productive. We focus on creating an environment where children develop a love for learning.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-[#800000]" />
                </div>
                <p className="text-gray-700">Interactive classroom sessions that encourage participation</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-[#800000]" />
                </div>
                <p className="text-gray-700">Project-based learning to develop practical skills</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-[#800000]" />
                </div>
                <p className="text-gray-700">Regular activities that make learning enjoyable</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-[#800000]" />
                </div>
                <p className="text-gray-700">Continuous assessment to track and improve performance</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-[#800000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Primary School Program</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Give your child the foundation they need for a successful academic journey. Our Primary School Program is
            designed to nurture young minds and develop their full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#800000] font-semibold rounded-md hover:bg-gray-100 transition-colors">
              Enroll Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white font-semibold rounded-md hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our school activities and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-[#800000] mr-2" />
              <span className="text-sm text-gray-500">May 15, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Science Exhibition</h3>
            <p className="text-gray-600 mb-4">Students showcase their innovative science projects and experiments.</p>
            <a href="#" className="text-[#800000] font-medium hover:text-blue-800 flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Event 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-[#800000] mr-2" />
              <span className="text-sm text-gray-500">June 5, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Parent-Teacher Meeting</h3>
            <p className="text-gray-600 mb-4">
              Discuss your child's progress and development with our experienced teachers.
            </p>
            <a href="#" className="text-[#800000] font-medium hover:text-[#800000] flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>

          {/* Event 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-[#800000] mr-2" />
              <span className="text-sm text-gray-500">July 10, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Fest</h3>
            <p className="text-gray-600 mb-4">A celebration of art, music, dance, and cultural diversity.</p>
            <a href="#" className="text-[#800000] font-medium hover:text-blue-800 flex items-center">
              Learn more <ArrowRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Parents Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from parents whose children have thrived in our Primary School Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Parent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 3 student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The primary program has been transformative for my child. The teachers are dedicated and the curriculum
                is engaging. I've seen remarkable improvement in both academic skills and confidence."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Parent"
                    width={48}
                    height={50}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 4 student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "What sets MLZS-Bilaspur apart is their holistic approach to education. My son not only excels
                academically but has also discovered his passion for music through their co-curricular activities."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Parent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Anita Patel</h4>
                  <p className="text-sm text-gray-500">Parent of Grade 2 student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The continuous evaluation system has helped my daughter stay motivated throughout the year. The
                teachers provide detailed feedback which has been instrumental in her growth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to give your child the best education?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our Primary School Program and admission process.
          </p>
          <button className="px-8 py-3 bg-[#800000] text-white font-semibold rounded-md hover:bg-red-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}

