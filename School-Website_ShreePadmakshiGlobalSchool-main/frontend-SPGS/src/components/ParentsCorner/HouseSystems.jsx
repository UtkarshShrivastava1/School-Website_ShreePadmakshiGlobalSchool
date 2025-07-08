import React, { useState } from 'react';
import { Users, Star, Award, BookOpen, Flame, Music, Zap, Leaf ,Trophy} from 'lucide-react';

const HouseSystem = () => {
  const [selectedHouse, setSelectedHouse] = useState(null);
const topPerformers = [
  { name: "Yajur Veda", points: 1920, position: "1st" },
  { name: "Rig Veda", points: 1800, position: "2nd" },
  { name: "Sam Veda", points: 1780, position: "3rd" },
  { name: "Atharva Veda", points: 1690, position: "4th" },
];

  const houses = [
    {
      id: 1,
      name: "Rig Veda",
      sanskrit: "ऋग्वेद",
      meaning: "The Veda of Praise",
      description: "The oldest of the four Vedas, containing hymns of praise and wisdom. Represents knowledge, learning, and spiritual enlightenment.",
      color: "from-orange-400 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-500",
      textColor: "text-orange-700",
      icon: BookOpen,
      students: 245,
      achievements: ["Academic Excellence", "Debate Championship", "Quiz Masters"],
      motto: "Knowledge is Light",
      element: "Fire",
      symbol: "🔥"
    },
    {
      id: 2,
      name: "Sam Veda",
      sanskrit: "सामवेद",
      meaning: "The Veda of Melodies",
      description: "The musical Veda containing chants and melodies. Represents harmony, creativity, and artistic expression.",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-500",
      textColor: "text-blue-700",
      icon: Music,
      students: 220,
      points: 1780,
      achievements: ["Cultural Festival Winners", "Music Competition", "Drama Excellence"],
      motto: "Harmony in Unity",
      element: "Water",
      symbol: "🌊"
    },
    {
      id: 3,
      name: "Yajur Veda",
      sanskrit: "यजुर्वेद",
      meaning: "The Veda of Sacrifice",
      description: "The procedural Veda containing rituals and ceremonies. Represents discipline, dedication, and service.",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-500",
      textColor: "text-green-700",
      icon: Leaf,
      students: 235,
      points: 1920,
      achievements: ["Community Service", "Environmental Champions", "Leadership Excellence"],
      motto: "Service Above Self",
      element: "Earth",
      symbol: "🌱"
    },
    {
      id: 4,
      name: "Atharva Veda",
      sanskrit: "अथर्ववेद",
      meaning: "The Veda of Everyday Life",
      description: "The practical Veda containing daily life wisdom. Represents innovation, healing, and practical knowledge.",
      color: "from-purple-400 to-violet-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
      borderColor: "border-purple-500",
      textColor: "text-purple-700",
      icon: Zap,
      students: 210,
      points: 1690,
      achievements: ["Innovation Award", "Science Fair Winners", "Technology Excellence"],
      motto: "Innovation Through Wisdom",
      element: "Air",
      symbol: "⚡"
    }
  ];



  const HouseCard = ({ house, index }) => {
    const Icon = house.icon;
    return (
      <div 
        className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
          selectedHouse === house.id ? 'scale-105 z-10' : ''
        }`}
        onClick={() => setSelectedHouse(selectedHouse === house.id ? null : house.id)}
      >
        <div className={`${house.bgColor} rounded-3xl shadow-xl border-2 ${house.borderColor} overflow-hidden`}>
          {/* Header with gradient */}
          <div className={`bg-gradient-to-r ${house.color} p-6 text-white relative overflow-hidden`}>
            <div className="absolute top-0 right-0 text-6xl opacity-20">
              {house.symbol}
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <Icon className="h-8 w-8" />
                <span className="text-2xl font-bold">#{index + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{house.name}</h3>
              <p className="text-xl opacity-90 mb-1">{house.sanskrit}</p>
              <p className="text-sm opacity-80">{house.meaning}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className={`${house.textColor} mb-4 text-sm leading-relaxed`}>
              {house.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${house.textColor}`}>{house.students}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${house.textColor}`}>{house.points}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>

            {/* Motto */}
            <div className={`text-center p-3 rounded-lg ${house.bgColor} border ${house.borderColor} mb-4`}>
              <div className="text-sm font-semibold text-gray-600">House Motto</div>
              <div className={`font-bold ${house.textColor}`}>"{house.motto}"</div>
            </div>

            {/* Achievements - Show only if selected */}
            {selectedHouse === house.id && (
              <div className="animate-fadeIn">
                <h4 className={`font-semibold ${house.textColor} mb-2`}>Recent Achievements</h4>
                <div className="space-y-2">
                  {house.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Award className={`h-4 w-4 ${house.textColor}`} />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            House System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our four houses are named after the sacred Vedas, each representing unique values and traditions that guide our students' journey.
          </p>
        </div>

        {/* Current Rankings */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Current Rankings</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {topPerformers.map((house, index) => {
              const houseData = houses.find(h => h.name === house.name);
              return (
                <div key={house.name} className={`relative p-6 rounded-2xl ${houseData.bgColor} border-2 ${houseData.borderColor}`}>
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${houseData.textColor} mb-2`}>
                      {house.position}
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">{house.name}</div>
                    <div className={`text-lg font-bold ${houseData.textColor}`}>
                      {house.points} pts
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-yellow-500 text-white rounded-full p-2">
                        <Trophy className="h-4 w-4" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* House Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {houses.map((house, index) => (
            <HouseCard key={house.id} house={house} index={index} />
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Click on any house card to view detailed achievements and information
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Total Students: {houses.reduce((sum, house) => sum + house.students, 0)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>Total Points: {houses.reduce((sum, house) => sum + house.points, 0)}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HouseSystem;