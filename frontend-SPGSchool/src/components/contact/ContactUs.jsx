import React from "react";

const LocationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-10">
          <div className="w-1/4 h-px bg-gray-300"></div>
          <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
            Our Location
          </h2>
          <div className="w-1/4 h-px bg-gray-300"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Location Information - Left Side */}
        <div>
          <div className="space-y-6 border-2 border-red-600 rounded-lg p-6 shadow-md">
            <p className="text-xl md:text-3xl font-medium text-[#f25811]">
            Shree Padmakshi Global School
            </p>

            <p className="text-base md:text-lg">
              You can find{" "}
              <span className="font-semibold">Shree Padmakshi Global School</span> at
              Main road, near over bridge, Uslapur, Bilaspur C.G., Pincode- 495001..
            </p>

            <p className="text-base md:text-lg">
              For directions, please contact{" "}
              <a
                href="tel:9406430027"
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                9111777295, 9424130028
              </a>{" "}
              or please refer to the map.
            </p>
          </div>
        </div>

        {/* Map - Right Side */}
        <div className="w-full h-96 bg-gray-200 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d41462.84320624708!2d82.13888371396226!3d22.098369066162103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a280d5707b8343d%3A0xb4ce01d89a86f6b9!2sMount%20Litera%20Zee%20School%20Bilaspur%20Uslapur%20Bilaspur%2C%20Chhattisgarh%20495001!3m2!1d22.1006911!2d82.11006359999999!5e0!3m2!1sen!2sin!4v1740726352171!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            title="Mount Litera Zee School Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
