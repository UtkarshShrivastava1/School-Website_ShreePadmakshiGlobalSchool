// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Calendar,
  Bell,
  User,
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
  Trophy,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile
  const [activeDropdown, setActiveDropdown] = useState(null); // index of opened dropdown
  const navigate = useNavigate();
  const rootRef = useRef(null);

  // refs container for dropdown menu items so we can focus them programmatically
  const dropdownItemRefs = useRef([]); // will store arrays per dropdown

  useEffect(() => {
    // close menus on outside click
    function handleOutsideClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((v) => !v);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown((cur) => (cur === index ? null : index));
    setIsMenuOpen(false); // if desktop dropdown opened, close mobile menu
  };

  const handleNavigation = (path) => {
    // if it's an external URL (starts with http), open in new tab, else navigate with react-router
    if (path && path.startsWith("http")) {
      window.open(path, "_blank", "noopener,noreferrer");
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // keyboard handler for dropdown button on desktop
  const onDropdownButtonKeyDown = (e, dropdownIndex) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown(dropdownIndex);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      // open and focus first item
      setActiveDropdown(dropdownIndex);
      const firstRef =
        dropdownItemRefs.current[dropdownIndex] &&
        dropdownItemRefs.current[dropdownIndex][0];
      if (firstRef && firstRef.focus) {
        // small timeout to ensure DOM updated
        setTimeout(() => firstRef.focus(), 0);
      }
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    }
  };

  // keyboard navigation inside dropdown list
  const onDropdownItemKeyDown = (e, dropdownIndex, itemIndex, link) => {
    const refsForDropdown = dropdownItemRefs.current[dropdownIndex] || [];
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = refsForDropdown[itemIndex + 1] || refsForDropdown[0];
      next && next.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev =
        refsForDropdown[itemIndex - 1] ||
        refsForDropdown[refsForDropdown.length - 1];
      prev && prev.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      refsForDropdown[0] && refsForDropdown[0].focus();
    } else if (e.key === "End") {
      e.preventDefault();
      refsForDropdown[refsForDropdown.length - 1] &&
        refsForDropdown[refsForDropdown.length - 1].focus();
    } else if (e.key === "Escape") {
      setActiveDropdown(null);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigation(link);
    }
  };

  // Reset refs container length whenever navItems change
  const resetDropdownRefsFor = (index, length) => {
    dropdownItemRefs.current[index] =
      dropdownItemRefs.current[index] || new Array(length);
  };

  const navItems = [
    { name: "Home", link: "/", dropdown: false },
    {
      name: "About Us",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Our School",
          link: "/our-school",
          icon: <School className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Our Vision and Mission",
          link: "/our-vision",
          icon: <Eye className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Director Message",
          link: "/director-message",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Director Message",
          link: "/director-message_1",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Principal Message",
          link: "/principal-message",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Value Education",
          link: "/value-education",
          icon: <MessageCircle className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
      ],
    },
    {
      name: "Why Us",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Why SPGS",
          link: "/why-spgs",
          icon: <CircleHelp className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Academics Pre-Primary",
          link: "/academics-pre-primary",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Academics: Primary",
          link: "/academics-primary",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Academics: Middle",
          link: "/academics-middle",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Academics: Secondary",
          link: "/academics-secondary",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Beyond Academics",
          link: "/beyond-academics",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
      ],
    },
    {
      name: "Admissions",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Enquiry Form",
          link: "/enquiry-form",
          icon: <ReceiptText className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
      ],
    },
    {
      name: "Facilities",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Our Campus",
          link: "/our-campus",
          icon: <School className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Sport Facilities",
          link: "/sport-facilities",
          icon: <Medal className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Transport Facilities",
          link: "/transport-facilities",
          icon: <CircleGauge className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "IT Infrastructure",
          link: "/it-infrastructure",
          icon: <HouseWifi className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Extracurricular activities",
          link: "/extracurricular-activities",
          icon: <Trophy className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
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
          icon: <Calendar1 className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Fee Structure",
          link: "/fee-structure",
          icon: <ReceiptText className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Gallery",
          link: "/gallery",
          icon: <Image className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "News & Events",
          link: "/news-events",
          icon: <Mails className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Parent Visiting Hours",
          link: "/parent-visiting-hours",
          icon: <Clock6 className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "House System",
          link: "/house-system",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Guidelines For Parents",
          link: "/guidelines-for-parents",
          icon: <NotebookText className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
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
          icon: <NotebookText className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "School Uniform",
          link: "/school-uniform",
          icon: <ShieldMinus className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "School Timing",
          link: "/school-timing",
          icon: <Clock6 className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Attendance Policy",
          link: "/attendance-policy",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
      ],
    },
    {
      name: "Contact",
      link: "#",
      dropdown: true,
      dropdownItems: [
        {
          name: "Contact",
          link: "/contact",
          icon: <Phone className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Careers",
          link: "/careers",
          icon: <Users className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
        {
          name: "Our Location",
          link: "/our-location",
          icon: <MapPin className="sm:h-5 sm:w-5 md:h-6 md:w-6" />,
        },
      ],
    },
    {
      name: "Mandatory Disclosure",
      link: "/mandatory-disclosure",
      dropdown: false,
    },
  ];

  return (
    <header ref={rootRef} className="w-full">
      {/* Top Navbar - Burgundy Background */}
      <div className="bg-gradient-to-r from-[#191f5d] to-[#191f5d] text-white py-3 px-4 md:px-8 sm:text-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img
              src="/Images/Media.jpg"
              alt="Shree Padmakshi Global School logo"
              className="w-15 h-15 rounded-full bg-white object-cover"
            />
            <div className="hidden md:block">
              <h1 className="text-2xl md:text-3xl font-serif ">
                SHREE PADMAKSHI GLOBAL SCHOOL, BILASPUR
              </h1>
              <p className="text-sm ">CBSE Affiliation No: 3330519</p>
            </div>
          </div>

          {/* Mobile Title - Shown only on smallest screens */}
          <div className="md:hidden text-center absolute left-1/2 transform -translate-x-1/2">
            <p className="text-sm font-serif">
              SHREE PADMAKSHI GLOBAL SCHOOL,BILASPUR
            </p>
            <p className="text-xs text-gray-200">
              CBSE Affiliation No: 3330519
            </p>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Quick Access Icons - Desktop */}
            <nav
              aria-label="Quick actions"
              className="hidden md:flex items-center space-x-6"
            >
              <button
                onClick={() => handleNavigation("/news-eventss")}
                className="flex flex-col items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                aria-label="News"
              >
                <Bell className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">NEWS</span>
              </button>

              <button
                onClick={() => handleNavigation("/school-calendar")}
                className="flex flex-col items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                aria-label="Calendar"
              >
                <Calendar className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">CALENDAR</span>
              </button>

              <div className="flex flex-col items-center">
                <User className="h-5 w-5 text-yellow-200" />
                <a
                  href="https://entab.online/Registration/RegistrationGroupClass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-yellow-200 mt-1"
                >
                  ADMISSION
                </a>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden cursor-pointer">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className="w-full border-b border-gray-200 bg-white relative"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation with Hover & focus */}
            <div className="hidden md:flex space-x-2 lg:space-x-6 justify-center items-stretch">
              {navItems.map((item, index) => {
                // prepare refs for this dropdown (used for keyboard focus)
                if (item.dropdown) {
                  resetDropdownRefsFor(index, item.dropdownItems.length);
                }

                return (
                  <div key={index} className="relative group">
                    {/* If it's a plain link, use a button that navigates */}
                    <button
                      onClick={() =>
                        !item.dropdown && handleNavigation(item.link)
                      }
                      onKeyDown={(e) =>
                        item.dropdown && onDropdownButtonKeyDown(e, index)
                      }
                      onMouseEnter={() =>
                        item.dropdown && setActiveDropdown(index)
                      }
                      onMouseLeave={() =>
                        item.dropdown &&
                        setActiveDropdown((cur) => (cur === index ? null : cur))
                      }
                      aria-haspopup={item.dropdown ? "menu" : undefined}
                      aria-expanded={
                        item.dropdown ? activeDropdown === index : undefined
                      }
                      className="inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 
                        text-gray-800 hover:text-red-700 hover:bg-gray-100 rounded uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                    >
                      <span>{item.name}</span>
                      {item.dropdown && (
                        <svg
                          className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:transform group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden
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

                    {/* Desktop dropdown (visible on hover or when activeDropdown === index) */}
                    {item.dropdown && (
                      <div
                        role="menu"
                        aria-label={`${item.name} submenu`}
                        className={`absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg transition-all duration-200 z-50
                          ${
                            activeDropdown === index
                              ? "opacity-100 visible"
                              : "opacity-0 invisible group-hover:visible group-hover:opacity-100"
                          }`}
                        onMouseEnter={() => setActiveDropdown(index)}
                        onMouseLeave={() =>
                          setActiveDropdown((cur) =>
                            cur === index ? null : cur
                          )
                        }
                      >
                        <div className="py-2 w-full flex flex-col">
                          {item.dropdownItems.map(
                            (dropdownItem, dropdownIndex) => (
                              <button
                                key={dropdownIndex}
                                role="menuitem"
                                ref={(el) => {
                                  dropdownItemRefs.current[index][
                                    dropdownIndex
                                  ] = el;
                                }}
                                onKeyDown={(e) =>
                                  onDropdownItemKeyDown(
                                    e,
                                    index,
                                    dropdownIndex,
                                    dropdownItem.link
                                  )
                                }
                                onClick={() =>
                                  handleNavigation(dropdownItem.link)
                                }
                                className="w-full flex items-center px-6 py-3 gap-3 text-left cursor-pointer text-gray-800 hover:text-red-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                              >
                                {dropdownItem.icon}
                                <span>{dropdownItem.name}</span>
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white border-t"
            role="dialog"
            aria-modal="false"
          >
            {/* Mobile Quick Icons */}
            <div className="flex justify-around py-4 border-b">
              <button
                onClick={() => handleNavigation("/news-eventss")}
                className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                aria-label="Open news"
              >
                <Bell size={20} className="text-red-900" />
                <span className="text-xs mt-1">NEWS</span>
              </button>
              <button
                onClick={() => handleNavigation("/school-calendar")}
                className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                aria-label="Open calendar"
              >
                <Calendar size={20} className="text-red-900" />
                <span className="text-xs mt-1">CALENDAR</span>
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://entab.online/Registration/RegistrationGroupClass",
                    "_blank"
                  )
                }
                className="flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                aria-label="Open admission portal"
              >
                <User size={20} className="text-red-900" />
                <span className="text-xs mt-1">ADMISSION</span>
              </button>
            </div>

            {/* Mobile Nav Items with Dropdowns */}
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      if (item.dropdown) {
                        setActiveDropdown((cur) =>
                          cur === index ? null : index
                        );
                      } else {
                        handleNavigation(item.link);
                      }
                    }}
                    aria-expanded={
                      item.dropdown ? activeDropdown === index : undefined
                    }
                    aria-controls={
                      item.dropdown ? `mobile-submenu-${index}` : undefined
                    }
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 uppercase
                      ${
                        activeDropdown === index
                          ? "text-blue-700 bg-gray-50"
                          : "text-gray-700"
                      } 
                      hover:text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-200`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.name}</span>
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
                          aria-hidden
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
                    <div
                      id={`mobile-submenu-${index}`}
                      className="bg-white py-2"
                      role="region"
                      aria-label={`${item.name} mobile submenu`}
                    >
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <button
                          key={dropdownIndex}
                          onClick={() => handleNavigation(dropdownItem.link)}
                          className="w-full flex items-center gap-2 px-4 py-3 text-sm text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-200 border-b border-gray-200"
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
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
    </header>
  );
};

export default Navbar;
