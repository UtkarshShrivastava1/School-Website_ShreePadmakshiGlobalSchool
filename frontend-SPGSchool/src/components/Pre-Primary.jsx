import img from "../assets/c-3.png"
// import { Button } from "../components/button"
import { Card, CardContent } from "../components/WhyCards"
import { BookOpen, Users, Brain, Music, Clock, Calendar, PlayCircle, CheckCircle, Star } from "lucide-react"

export default function PrePrimaryPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      

      {/* Hero Section */}
      <section id="program" className="py-12 md:py-20 bg-gradient-to-r from-blue-100 to-teal-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Pre-Primary School Program</h1>
              <p className="text-lg text-gray-700">
                The Pre-Primary School Program at Mount Litera Zee School, Bilaspur comprises
                <span className="font-semibold"> Nursery, Jr.kg & Sr.kg</span>.
              </p>
              <p className="text-gray-600">
                Early childhood education serves as the foundation for all future learning. These are the formative
                years of learning which play vital role in the life a child.
              </p>
              <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Learn More</button>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/sub-banner1.jpg"
                alt="Mount Litera Zee School Pre-Primary Program"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ILLUME Approach Section */}
      <section id="illume" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The 'ILLUME' Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The pre-primary curriculum is delivered through the 'ILLUME' approach based on the following premise:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <IllumeCard
              icon={<Star className="h-10 w-10 text-yellow-500" />}
              title="Child Unique"
              color="from-yellow-400 to-yellow-300"
            />
            <IllumeCard
              icon={<Brain className="h-10 w-10 text-purple-500" />}
              title="Infinite Potential"
              color="from-purple-400 to-purple-300"
            />
            <IllumeCard
              icon={<BookOpen className="h-10 w-10 text-blue-500" />}
              title="Desire to Learn"
              color="from-blue-400 to-blue-300"
            />
            <IllumeCard
              icon={<CheckCircle className="h-10 w-10 text-green-500" />}
              title="Best Observation"
              color="from-green-400 to-green-300"
            />
            <IllumeCard
              icon={<Users className="h-10 w-10 text-red-500" />}
              title="Own Knowledge"
              color="from-red-400 to-red-300"
            />
          </div>

          <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              The 'ILLUME' curriculum focuses on the milestones in the area of cognitive, linguistic, creative, social
              and physical development. The learning design leads a child to inquire and seek answers. Questions become
              the order of the day causing thinking and creativity to be the norms. A variety of experiential activities
              are planned for delivering themes based concepts. Curriculum provides numerous exposures to nurture
              sensory and gross motor skills, and also small muscle and large muscle activities for physical development
              of children. To cater to educational needs of children, the school has multiple teaching aids like
              interesting audio – visual aids, interactive white board, various toys and games for cognitive development
              and a series of teaching material for introducing concept that build strong recognition among children.
            </p>
          </div>
        </div>
      </section>

      {/* img Gallery 1 */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/pp-program.jpg"
                alt="Mount Litera Zee School Bilaspur Primary"
                fill
                className="w-full object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/prePrimaryClass.jpg"
                alt="Mount Litera Zee School Bilaspur Primary"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              The integrated method is holistic, child centered with no compartmentalization of subjects. It seeks to
              give a complete experience to the child within the child's range of experiences and understanding. This
              approach goes a long way towards shaping a whole some and healthy personality and prepares each child for
              primary school.
            </p>
          </div>
        </div>
      </section>

      {/* Free Play Section */}
      <section id="schedule" className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <PlayCircle className="h-8 w-8 text-blue-500" />
                <h2 className="text-3xl font-bold text-gray-800">Free Play</h2>
              </div>
              <p className="text-gray-700">
                A day at school begins with Free play where the children are allowed to initiate and direct their own
                learning styles by choosing from a range of learning material and equipments displayed in the four
                corners of the class rooms.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/pp1.jpg"
                alt="Mount Litera Zee School Bilaspur Play"
                fill
                className="w-full h-auto object-cover rounded-lg"

              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md order-1 md:order-1">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/pp2.jpg"
                alt="Mount Litera Zee School Bilaspur Play"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-6 order-2 md:order-2">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-blue-500" />
                <h2 className="text-3xl font-bold text-gray-800">Attendance And Assembly</h2>
              </div>
              <p className="text-gray-700">
                This is followed by Attendance and Assembly where the children learn to self-register through activities
                such as by printing their finger or sticking their picture next to their name. Children also discuss the
                previous day's activities and teacher tells them about the day's events.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/pp2.jpg"
                alt="Mount Litera Zee School Bilaspur Play"
                fill
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
              <img
                src="http://mlzsbilaspur.com/Assets/Images/sub-banner1.jpg"
                alt="Mount Litera Zee School Bilaspur Play"
                fill
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-gray-800">Daily Schedule</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScheduleCard
                icon={<Brain className="h-6 w-6 text-blue-500" />}
                title="Concept Time (Nursery) / (Jr.kg & Sr.kg)"
                description="These involve activities based in the month's theme and are planned to meet the unique learning styles of the children. The facilitator may sing a rhyme with actions, show charts / flash cards, play a game, take the children for a walk outdoors or do an art activity to introduce and reinforce concepts. The revision will also provide a range of pathways for the children to explore."
              />
              <ScheduleCard
                icon={<Music className="h-6 w-6 text-purple-500" />}
                title="Music And Movement Time"
                description="Children engage in musical activities that help develop rhythm, coordination, and creative expression."
              />
              <ScheduleCard
                icon={<Clock className="h-6 w-6 text-orange-500" />}
                title="Tummy Time"
                description="A dedicated period for nutritious snacks and meals, teaching children about healthy eating habits."
              />
              <ScheduleCard
                icon={<BookOpen className="h-6 w-6 text-green-500" />}
                title="Language & Number Skills"
                description="Focused activities to develop early literacy and numeracy skills through interactive learning."
              />
              <ScheduleCard
                icon={<PlayCircle className="h-6 w-6 text-yellow-500" />}
                title="Outdoor play / Sand Play / Water Play"
                description="Supervised outdoor activities that promote physical development, sensory exploration, and social interaction."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Assessment In Pre Primary School</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">MLZS Assessment Card is called Milestones</p>
          </div>

          <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  'Milestones' is an observation based evaluation system and does not require the children to go through
                  tests and exams.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Milestones allows for children to develop at their own pace. It is continuous and includes parental
                  inputs and anecdotal evidence.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Children are assessed individually and the assessment is inclusive of the learning experience and
                  understanding.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-bold">Mount Litera Zee School</h3>
              </div>
              <p className="text-gray-300">
                Shaping young minds through holistic education and innovative learning approaches.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#program" className="text-gray-300 hover:text-white">
                    Program
                  </a>
                </li>
                <li>
                  <a href="#illume" className="text-gray-300 hover:text-white">
                    ILLUME Approach
                  </a>
                </li>
                <li>
                  <a href="#curriculum" className="text-gray-300 hover:text-white">
                    Curriculum
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-gray-300 hover:text-white">
                    Daily Schedule
                  </a>
                </li>
                <li>
                  <a href="#assessment" className="text-gray-300 hover:text-white">
                    Assessment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-gray-300 not-italic">
                Mount Litera Zee School
                <br />
                Bilaspur
                <br />
                <a href="tel:+911234567890" className="hover:text-white">
                  Phone: 123-456-7890
                </a>
                <br />
                <a href="mailto:info@mlzsbilaspur.com" className="hover:text-white">
                  Email: info@mlzsbilaspur.com
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mount Litera Zee School, Bilaspur. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

function IllumeCard({ icon, title, color }) {
  return (
    <div className={`bg-gradient-to-b ${color} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center`}>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  )
}

function ScheduleCard({ icon, title, description }) {
  return (
    <Card className="hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="mt-1">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

