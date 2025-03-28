import { FaWifi, FaInternetExplorer, FaFingerprint } from "react-icons/fa";

export default function ITInfrastructure() {
  return (
    <div className="h-100% w-100% bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white p-10 rounded-2xl ">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">
          School IT Infrastructure
        </h1>
        <p className="text-gray-700 text-lg text-center mb-8">
          At <span className="font-bold">Mount Litera Zee School, Bilaspur</span>, we offer the best facilities that today's education system can deliver. We pride ourselves in bringing the latest tools and techniques to augment the academic and overall development of your child. Here are some of the premier facilities that are offered.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {/* WiFi Campus */}
          <div className="flex flex-col items-center bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaWifi className="text-5xl text-blue-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">WiFi Campus</h2>
            <p className="text-gray-600 text-center">High-speed internet available across the campus for seamless learning.</p>
          </div>
          {/* Indoor Internet */}
          <div className="flex flex-col items-center bg-green-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaInternetExplorer className="text-5xl text-green-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">Indoor Internet</h2>
            <p className="text-gray-600 text-center">Connected classrooms with smart boards and internet-enabled learning.</p>
          </div>
          {/* Biometric Attendance */}
          <div className="flex flex-col items-center bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <FaFingerprint className="text-5xl text-yellow-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-800">Biometric Attendance</h2>
            <p className="text-gray-600 text-center">Advanced biometric system ensuring accurate student attendance tracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
