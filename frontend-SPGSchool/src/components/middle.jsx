import ArtRoom from "../assets/LabAndLibrary/ArtRoom2.jpg"
import classRoom from "../assets/Classroom/ClassN1.jpg"
import image from "../assets/c-2.png"
import { ArrowRight, BookOpen, Brain, Users, Award, Trophy, Target, Lightbulb } from "lucide-react"

export default function MiddleSchoolProgram() {
  return (
    <div className="min-h-screen bg-white">
    
{/* Hero Section */}
<section className="relative">
  {/* Background Image Wrapper */}
  <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
    <img
      src={image}
      alt="Middle School Students Learning"
      className="absolute inset-0 w-full h-[60vh] object-cover brightness-[0.7]"
      priority
    />
  </div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-2 sm:px-6 lg:px-5">
    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
      Middle School Program
    </h1>
    <p className="mt-6 max-w-2xl text-xl">
      Classes VI - VIII: Guiding students toward independent learning and greater responsibility
    </p>
  </div>
</section>




      {/* Introduction Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">SPGS-Bilaspur Middle School</h2>
            <p className="text-lg text-gray-700 mb-6">
              At this age, children begin to connect themselves with the community in a larger sense. An integrated
              package of teaching, learning and assessment is delivered through the Litera Octave approach; the child is
              directed towards independent learning and is guided to take on more responsibility.
            </p>
            <p className="text-lg text-gray-700">
              The main objective of this stage is to help the children make experiences in life and the courses of the
              study. The learner is equipped with 'learning skills' and is ready to move on to the Secondary School
              program.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={ArtRoom}
              alt="Middle school students engaged in learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900"></h2>
            <div className="flex items-center justify-center mb-10">
              <div className="w-1/4 h-px bg-gray-300"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
             
                Our Approach
              </h2>
              <div className="w-1/4 h-px bg-gray-300"></div>
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We aim to prepare our children to be healthy and active with a passion for developing their physical
              abilities and to achieve high standards and high levels of attainment in academics, and extra curricular
              activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Learning</h3>

              
              <p className="text-gray-600">
                A comprehensive approach that combines teaching, learning, and assessment through the Litera Octave
                method.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Independent Learning</h3>
              <p className="text-gray-600">
                Students are guided to take responsibility for their own learning and development.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Connection</h3>
              <p className="text-gray-600">
                Students begin to understand their role in the larger community and society.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Evaluation</h3>
              <p className="text-gray-600">CCE methodology ensures holistic assessment of each student's progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={classRoom}
              alt="Students taking assessments"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Evaluation System</h2>
            <p className="text-lg text-gray-700 mb-6">
              The evaluation is done through CCE i.e. Continuous & Comprehensive Evaluation. It consists of cycle tests,
              programmed curricular activities and projects to assess children holistically which are conducted time to
              time.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This makes the child constantly alert about his performance without any laxity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-gray-700">Regular cycle tests to assess academic progress</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-gray-700">Project-based assessments to develop practical skills</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-gray-700">Programmed curricular activities for holistic development</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 mt-1">
                  <ArrowRight className="h-4 w-4 text-indigo-600" />
                </div>
                <p className="text-gray-700">Continuous feedback to ensure consistent improvement</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900"></h2>
            <div className="flex items-center justify-center mb-10">
              <div className="w-1/4 h-px bg-gray-300"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
       
                Inter-house Competitions
              </h2>
              <div className="w-1/4 h-px bg-gray-300"></div>
            </div>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the importance of competitions for the children especially as they progress and develop
              through the school.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Competition Category 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sports Competitions</h3>
              
              <p className="text-gray-600 mb-4">
                Students compete in various sports activities including cricket, football, basketball, athletics, and
                more.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Annual Sports Day</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Seasonal Tournaments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Inter-house Matches</span>
                </li>
              </ul>
            </div>

            {/* Competition Category 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Competitions</h3>
              <p className="text-gray-600 mb-4">
                Students showcase their intellectual abilities through debates, quizzes, science exhibitions, and more.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Debate Competitions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Quiz Contests</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Science & Math Olympiads</span>
                </li>
              </ul>
            </div>

            {/* Competition Category 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Competitions</h3>
              <p className="text-gray-600 mb-4">
                Students express their creativity through dance, music, art, dramatics, and other cultural activities.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Annual Cultural Fest</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Dance & Music Competitions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                  <span>Art & Drama Contests</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All the students are divided into four clubs and four houses and they are given opportunities to compete
              in Inter-house Competitions. Every child has the opportunity to compete against other children in the
              school.
            </p>
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-10">
              <div className="w-1/4 h-px bg-gray-300"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
                {" "}
                Our House System
              </h2>
              <div className="w-1/4 h-px bg-gray-300"></div>
            </div>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Students are divided into four houses, fostering a sense of belonging and healthy competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* House 1 */}
          <div className="bg-red-50 p-6 rounded-lg shadow-md border border-red-100">
            <div className="h-24 w-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-red-600">House 1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Red House</h3>
            <p className="text-gray-600 text-center">Representing courage, determination, and leadership</p>
          </div>

          {/* House 2 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md border border-yellow-100">
            <div className="h-24 w-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">House 2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Yellow House</h3>
            <p className="text-gray-600 text-center">Representing wisdom, intellect, and creativity</p>
          </div>

          {/* House 3 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-100">
            <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">House 3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Green House</h3>
            <p className="text-gray-600 text-center">Representing growth, harmony, and perseverance</p>
          </div>

          {/* House 4 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-100">
            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">House 4</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Blue House</h3>
            <p className="text-gray-600 text-center">Representing loyalty, integrity, and excellence</p>
          </div>
        </div>
      </section>

      {/* Preparing for Secondary */}
      <section className="py-16 bg-[#191f5d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Preparing for Secondary School</h2>
              <p className="text-xl mb-6">
                The Middle School Program equips students with essential 'learning skills' that prepare them for the
                challenges of secondary education.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p>Development of critical thinking and problem-solving abilities</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p>Building strong foundations in core academic subjects</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p>Fostering independence and responsibility</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1">
                    <ArrowRight className="h-4 w-4 text-indigo-600" />
                  </div>
                  <p>Developing effective communication and collaboration skills</p>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <img
                src={ArtRoom}
                alt="Students preparing for secondary school"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-10">
              <div className="w-1/4 h-px bg-gray-300"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
                {" "}
                What Students & Parents Say
              </h2>
              <div className="w-1/4 h-px bg-gray-300"></div>
            </div>

            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our community about their experiences with the Middle School Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Student"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arjun Singh</h4>
                  <p className="text-sm text-gray-500">Class VIII Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The inter-house competitions have helped me discover my talents in debating and public speaking. I've
                gained so much confidence and made great friends across different houses."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Parent"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Meera Kapoor</h4>
                  <p className="text-sm text-gray-500">Parent of Class VII student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The CCE system has been excellent for my daughter's development. The regular feedback helps us
                understand her progress, and the project-based learning has made her more independent and responsible."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=48&width=48"
                    alt="Teacher"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mr. Ravi Verma</h4>
                  <p className="text-sm text-gray-500">Middle School Coordinator</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Our middle school program focuses on developing the whole child. We see remarkable transformations as
                students discover their strengths and develop the skills they'll need for secondary education and
                beyond."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to join our Middle School Program?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about admissions for Classes VI - VIII.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-[#191f5d] text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors">
              Apply Now
            </button>
            <button className="px-8 py-3 bg-white border border-[#191f5d] text-[#191f5d] font-semibold rounded-md hover:bg-indigo-50 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

