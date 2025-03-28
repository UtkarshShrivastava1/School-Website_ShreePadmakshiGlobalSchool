import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8 md:mb-12">
          {/* Get Connected Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-[#f25811] font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">
              Get Connected
            </h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/ShreePadmakshiGlobalSchoolBilaspur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/shree_padmakshi_global_school/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-600 hover:text-blue-900 transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
            </div>

            <div className="mt-8">
              <img
                src={Logo}
                alt="GEMS Education Logo"
                className="w-16 md:w-20 rounded-full"
              />
              <p className="text-xs md:text-sm mt-2">
                We see <span className="font-semibold">genius</span> in every
                child
              </p>
            </div>
          </div>

          {/* Our School Section */}
          <div className="flex flex-col">
            <h3 className="text-[#f25811] font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">
              Our School
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/our-school" className="text-gray-600 hover:text-blue-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-campus" className="text-gray-600 hover:text-blue-700">
                  Facilities and Campus
                </a>
              </li>
              <li>
                <a href="/our-location" className="text-gray-600 hover:text-blue-700">
                  Our Location
                </a>
              </li>
              <li>
                <a href="/faculty" className="text-gray-600 hover:text-blue-700">
                  Our Faculty
                </a>
              </li>
              <li>
                <a href="/transport-facilities" className="text-gray-600 hover:text-blue-700">
                  School Transportation
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Section */}
          <div className="flex flex-col">
            <h3 className="text-[#f25811] font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">
              Admissions
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/fee-structure" className="text-gray-600 hover:text-blue-700">
                  Fees and Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  Book a tour
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-700">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-700">
                  Enroll Online
                </a>
              </li>
            </ul>
          </div>

          {/* Explore More Section */}
          <div className="flex flex-col">
            <h3 className="text-[#f25811] font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">
              Explore More
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="why-mlzs" className="text-gray-600 hover:text-blue-700">
                  Learning Overview
                </a>
              </li>
              <li>
                <a href="/house-system" className="text-gray-600 hover:text-blue-700">
                  Extra Curricular Activities
                </a>
              </li>
              <li>
                <a href="/school-calendar" className="text-gray-600 hover:text-blue-700">
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="/school-notification" className="text-gray-600 hover:text-blue-700">
                  SPGS Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* School Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-[#f25811] font-semibold mb-4 pb-2 border-b-2 border-blue-900 inline-block">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin
                  className="text-blue-700 mr-2 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-gray-600">
                  Shree Padmakshi Global School Main road, near over bridge, Uslapur, Bilaspur C.G., Pincode-
                  495001.
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a
                  href="mailto:spgsbilaspur@gmail.com"
                  className="text-gray-600 hover:text-blue-700"
                >
                 spgsbilaspur@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a
                  href="tel:9111777295"
                  className="text-gray-600 hover:text-blue-700"
                >
                   9111777295
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-700 mr-2 flex-shrink-0" size={20} />
                <a
                  href="tel:9424130028"
                  className="text-gray-600 hover:text-blue-700"
                >
                  9424130028
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Policy Links and Powered By */}
        <div className="border-t border-gray-300 pt-4 flex flex-col sm:flex-row justify-between text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0 items-center">
            <div className="flex items-center gap-4">
              <a href="/policy" className="text-gray-600 hover:text-blue-700">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="/terms" className="text-gray-600 hover:text-blue-700">
                Terms & Conditions
              </a>
              <span className="text-gray-400">•</span>
              <a
                href="/admin-login"
                className="text-gray-600 hover:text-blue-700"
              >
                Admin
              </a>
            </div>
            <div className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-0 sm:ml-4">
              Powered by 
              <a 
                href="https://www.zager.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-1 text-blue-700 hover:underline transition-colors duration-300 ease-in-out hover:text-blue-900 font-semibold"
              >
                Zager Digital Services
              </a>
            </div>
          </div>
          <div className="text-gray-500 mt-2 sm:mt-0">
            Copyright © 2025 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;