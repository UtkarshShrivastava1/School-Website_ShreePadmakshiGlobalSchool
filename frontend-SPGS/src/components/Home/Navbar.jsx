import React, { useState } from "react";
import { Menu, X, Calendar, Bell, User, Icon, icons } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Media.jpg";
import {
  School,
  MessageCircle,
  NotebookText,
  Scale,
  Eye,
  ShieldMinus,
  CircleGauge,
  Medal,
  Cctv,
  HouseWifi,
  CircleHelp,
  Users,
  MapPin,
  Phone,
  ReceiptText,
  Calendar1,
  Mails,
  Image,
  Clock6,
  Wifi,
  SquareUserRound,
  Newspaper,
  Bug,
  Braces,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu on mobile when navigating
  };

  const navItems = [
    { name: "Home", link: "/", dropdown: false },
    {
      name: "About Us",
      link: "#",
      dropdown: true,
      dropdownItems: [
        { name: "Our School", link: "/our-school", icon: <School className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
       
        { name: "Our Vision and Mission",
           link: "/our-vision",
           icon: <Eye className="sm:h-5 sm:w-5 md:h-6 md:w-6" /> },

        {
          name: "Director Message",
          link: "/director-message",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Director Message",
          link: "/director-message_1",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Principal Message",
          link: "/principal-message",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Value Education",
          link: "/value-education",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
      ],
    },
    {
      name: "Why Us",
      link: "#",
      dropdown: true,
      dropdownItems: [
        { name: "Why SPGS", link: "/why-mlzs", icon: <CircleHelp  className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        {
          name: "Academics Pre-Primary",
          link: "/academics-pre-primary",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Academics: Primary",
          link: "/academics-primary",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Academics: Middle",
          link: "/academics-middle",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Beyond Academics",
          link: "/beyond-academics",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
      ],
    },
    {
      name: "Admissions",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Guidelines & Procedures",
          link: "/guidelines-procedures",
          icon: <NotebookText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "School Rules & Regulations",
          link: "/school-rules-regulations",
          icon: <Scale className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Withdrawal Policy",
          link: "/withdrawal-policy",
          icon: <ReceiptText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        { name: "Enquiry Form", link: "/enquiry-form", icon: <ReceiptText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
      ],
    },
    {
      name: "Facilities",
      link: "#",
      dropdown: true,
      dropdownItems: [
        { name: "Our Campus", link: "/our-campus", icon: <School className="sm:h-5 sm:w-5 md:h-6 md:w-6" /> },
        // { name: "Hi-Tech Classes", link: "/hi-tech-classes", icon: <Wifi className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        { name: "Faculty", link: "/faculty", icon: <SquareUserRound className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        // {
        //   name: "Security & CCTV Surveillance",
        //   link: "/security-cctv-surveillance",
        //   icon: <Cctv className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        // },
        {
          name: "Sport Facilities",
          link: "/sport-facilities",
          icon: <Medal className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Transport Facilities",
          link: "/transport-facilities",
          icon: <CircleGauge className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "IT Infrastructure",
          link: "/it-infrastructure",
          icon: <HouseWifi className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
      ],
    },
    {
      name: "Parent Corner",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "School Calendar",
          link: "/school-calendar",
          icon: <Calendar1 className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "Fee Structure",
          link: "/fee-structure",
          icon: <ReceiptText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        { name: "Gallery", link: "/gallery", icon: <Image className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        { name: "News & Events", link: "/news-events", icon: <Mails className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        {
          name: "School Notification",
          link: "/school-notification",
          icon: <Bell className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        // { name: "EPFUTURE", link: "/epfuture", icon: <Braces className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        {
          name: "Parent Visiting Hours",
          link: "/parent-visiting-hours",
          icon: <Clock6 className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        // { name: "Accolades", link: "/accolades", icon: <Medal className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        { name: "House System", link: "/house-system", icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        // { name: "View Issued Tcs", link: "/view-issued-tcs", icon: <Bug className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        {
          name: "Guidelines For Parents",
          link: "/guidelines-for-parents",
          icon: <NotebookText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
      ],
    },
    {
      name: "Student Corner",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Student Guidelines",
          link: "/student-guidelines",
          icon: <NotebookText className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        {
          name: "School Uniform",
          link: "/school-uniform",
          icon: <ShieldMinus className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
        { name: "School Timing", link: "/school-timing", icon: <Clock6 className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        {
          name: "Attendance Policy",
          link: "/attendance-policy",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/>,
        },
      ],
    },
    {
      name: "Contact",
      link: "#",
      dropdown: true,
      dropdownItems: [
        { name: "Contact", link: "/contact", icon: <Phone className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        { name: "Careers", link: "/careers", icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
        { name: "Our Location", link: "/our-location", icon: <MapPin className="sm:h-5 sm:w-5 md:h-6 md:w-6"/> },
      ],
    },
    {
      name: "Mandatory Disclosure",
      link: "/mandatory-disclosure",
      dropdown: false,
    },
  ];

  return (
    <div className="w-full ">
      {/* Top Navbar - Burgundy Background */}
      <div className="bg-gradient-to-r from-[#191f5d] to-[#191f5d] text-white py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="School Logo"
              className="w-15 h-full rounded-full bg-white"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl md:text-3xl font-serif ">
              SHREE PADMAKSHI GLOBAL SCHOOL Bilaspur
              </h1>
              <p className="text-sm ">CBSE Affiliation No: 3330519</p>
            </div>
          </div>

          {/* Mobile Title - Shown only on smallest screens */}
          <div className="md:hidden text-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl font-serif">
            SHREE PADMAKSHI GLOBAL SCHOOL Bilaspur
            </h1>
            <p className="text-xs text-gray-200">
              CBSE Affiliation No: 3330519
            </p>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Quick Access Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {/* News Icon */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleNavigation("/school-notifications")}
              >
                <Bell className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">NEWS</span>
              </div>

              {/* Calendar Icon */}
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleNavigation("/school-calendar")}
              >
                <Calendar className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">CALENDAR</span>
              </div>

              {/* Directory Icon */}
              <div className="flex flex-col items-center cursor-pointer">
                <User className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">ADMISSION</span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden cursor-pointer">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-yellow-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b border-gray-200 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation with Hover Effect */}
            <div className="hidden md:flex space-x-2 lg:space-x-6 justify-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button
                    onClick={() =>
                      !item.dropdown && handleNavigation(item.link)
                    }
                    className="inline-flex items-center px-1 py-2 text-sm font-medium transition-colors duration-200 
                    text-gray-800 hover:text-red-700 hover:bg-gray-100 rounded uppercase cursor-pointer"
                  >
                    {item.name}
                    {item.dropdown && (
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:transform group-hover:rotate-180 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>

                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100 z-50 flex flex-col  cursor-pointer ">
                      <div className="py-2 w-full flex flex-col items-center">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <button
                              key={dropdownIndex}
                              onClick={() =>
                                handleNavigation(dropdownItem.link)
                              }
                              className="w-full flex items-center px-6 py-3 gap-2 cursor-pointer text-gray-800 hover:text-red-700 hover:bg-gray-200"
                            >
                              {dropdownItem.icon}
                              {dropdownItem.name}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            {/* Mobile Quick Icons */}
            <div className="flex justify-around py-4 border-b">
              <div className="flex flex-col items-center">
                <Bell size={20} className="text-red-900" />
                <span className="text-xs mt-1">NEWS</span>
              </div>
              <div className="flex flex-col items-center">
                <Calendar size={20} className="text-red-900" />
                <span className="text-xs mt-1">CALENDAR</span>
              </div>
              <div className="flex flex-col items-center">
                <User size={20} className="text-red-900" />
                <span className="text-xs mt-1">ADMISSION</span>
              </div>
            </div>

            {/* Mobile Nav Items with Dropdowns */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => item.dropdown && toggleDropdown(index)}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 uppercase
                    ${
                      activeDropdown === index
                        ? "text-blue-700 bg-gray-50"
                        : "text-gray-700"
                    } 
                    hover:text-blue-700 hover:bg-gray-50`}
                  >
                    <div className="flex justify-between items-center">
                      {item.name}
                      {item.dropdown && (
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === index
                              ? "transform rotate-90"
                              : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="bg-white py-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          onClick={() => handleNavigation(dropdownItem.link)}
                          className="w-full flex flex-row gap-2 items-center   px-4 py-3 md:hover:bg-gray-200 sm:hover:bg-gray-200  text-sm text-black hover:text-black hover:bg-gray-200 border-b border-gray-600"
                        >
                          {dropdownItem.icon}
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
