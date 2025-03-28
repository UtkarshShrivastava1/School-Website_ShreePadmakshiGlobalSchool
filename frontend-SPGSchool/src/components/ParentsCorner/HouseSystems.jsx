import React from 'react'
import { BookOpen, Award, Users, Target, ArrowRight, CheckCircle, Lightbulb, Trophy } from "lucide-react"

const HouseSystems = () => {
  return (
    <div>
       {/* House System & Competitions */}
       <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Competitions
        </span>
            <div className="flex items-center justify-center mb-10">
        <div className="w-1/4 h-px bg-gray-300"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6"> Inter-house Competitions</h2>
        <div className="w-1/4 h-px bg-gray-300"></div>
      </div>
           
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              We understand the importance of competitions for children as they progress through school
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* House 1 */}
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="absolute inset-0 bg-red-100 flex flex-col items-center justify-center p-6">
                    <div className="h-24 w-24 rounded-full bg-red-200 flex items-center justify-center mb-4">
                      <Trophy className="h-12 w-12 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Red House</h3>
                    <p className="text-center text-gray-600">Representing courage, determination, and leadership</p>
                  </div>
                </div>
              </div>

              {/* House 2 */}
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="absolute inset-0 bg-yellow-100 flex flex-col items-center justify-center p-6">
                    <div className="h-24 w-24 rounded-full bg-yellow-200 flex items-center justify-center mb-4">
                      <Trophy className="h-12 w-12 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Yellow House</h3>
                    <p className="text-center text-gray-600">Representing wisdom, intellect, and creativity</p>
                  </div>
                </div>
              </div>

              {/* House 3 */}
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="absolute inset-0 bg-green-100 flex flex-col items-center justify-center p-6">
                    <div className="h-24 w-24 rounded-full bg-green-200 flex items-center justify-center mb-4">
                      <Trophy className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Green House</h3>
                    <p className="text-center text-gray-600">Representing growth, harmony, and perseverance</p>
                  </div>
                </div>
              </div>

              {/* House 4 */}
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md">
                  <div className="absolute inset-0 bg-blue-100 flex flex-col items-center justify-center p-6">
                    <div className="h-24 w-24 rounded-full bg-blue-200 flex items-center justify-center mb-4">
                      <Trophy className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Blue House</h3>
                    <p className="text-center text-gray-600">Representing loyalty, integrity, and excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Competition Category 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-500 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Target className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-gray-900">Sports</h3>
                    </div>
                    <div className="mt-5">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Annual Sports Day</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Cricket & Football</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Basketball & Athletics</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Swimming & Gymnastics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Competition Category 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-500 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Lightbulb className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-gray-900">Academics</h3>
                    </div>
                    <div className="mt-5">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Debate Competitions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Quiz Contests</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Science Exhibitions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Math Olympiads</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Competition Category 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-indigo-500 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Users className="h-6 w-6 text-indigo-600" />
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-gray-900">Cultural</h3>
                    </div>
                    <div className="mt-5">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Dance Competitions</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Music Performances</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Drama & Theater</span>
                        </li>
                        <li className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-600">Art & Craft Exhibitions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
            </section>

    </div>
  )
}

export default HouseSystems
