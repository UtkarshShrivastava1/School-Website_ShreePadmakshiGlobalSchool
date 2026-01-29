// import React, { useState } from 'react'
// import {  Calendar, Bell, User } from 'lucide-react';
// import { LogOut, Menu, X } from "lucide-react"
// import { FaCalendarAlt } from "react-icons/fa";
// import { IoMdNotifications } from "react-icons/io";
// import { MdPhotoLibrary } from "react-icons/md";
// import { FaUmbrellaBeach } from "react-icons/fa";
// import { MdNotificationImportant } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import NoticeForm from './NoticeForm';
// import EventForm from './EventForm';
// import GalleryForm from './GalleryForm';
// import HolidayForm from './HolidayForm';
// import MandatoryDisclosureForm from './MandatoryDisclosureForm';
// import CandidateList from './CandidateList';

// function AdminDashboard() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState("events");
//     const navigate = useNavigate();

//     const menuItems = [
//         { name: "events", icon: FaCalendarAlt },
//         { name: "notice", icon: IoMdNotifications },
//         { name: "gallery", icon: MdPhotoLibrary },
//         { name: "holidays", icon: FaUmbrellaBeach },
//         { name: "Mandatory Disclosure", icon: MdNotificationImportant },
//         {name:"candidate list", icon:User}
//     ];

//     const handlelogout = () => {
//         localStorage.clear();
//         window.location.href = "/";
//     }

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     }

//     return (
//         <div className="flex flex-col min-h-screen">
//             {/* Header */}
//             <header className="bg-[#191f5d] text-white py-3 px-4 md:px-8 h-auto md:h-[15vh] flex">
//                 <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//                     {/* Logo and Title */}
//                     <div className="flex items-center space-x-3 w-full md:w-auto justify-between">
//                         <div className="flex items-center space-x-3">
//                             <img src='/Images/Media.jpg' alt="School Logo" className="w-12 h-12 md:w-15 md:h-full rounded-full bg-white" />
//                             <div className="hidden md:block">
//                                 <h1 className="text-2xl md:text-4xl font-serif">Admin Dashboard</h1>
//                             </div>
//                         </div>
                        
//                         {/* Mobile Logout and Menu Toggle */}
//                         <div className="flex items-center space-x-4 md:hidden">
//                             <div onClick={handlelogout} className="cursor-pointer">
//                                 <LogOut className="h-5 w-5 text-yellow-200" />
//                             </div>
//                             <button 
//                                 onClick={toggleMenu}
//                                 className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-yellow-100 focus:outline-none"
//                             >
//                                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                             </button>
//                         </div>
//                     </div>

//                     {/* Desktop Logout */}
//                     <div className="hidden md:flex items-center space-x-6">
//                         <div onClick={handlelogout} className="cursor-pointer flex items-center flex-col">
//                             <LogOut className="h-5 w-5 text-yellow-200" />
//                             <span className="text-xs text-yellow-200 mt-1">LogOut</span>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* Main Content Area */}
//             <div className="flex flex-col md:flex-row flex-1">
//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <aside className="md:hidden w-full bg-white shadow-lg">
//                         <ul className="space-y-2 p-4">
//                             {menuItems.map((item) => (
//                                 <li
//                                     key={item.name}
//                                     onClick={() => {
//                                         setActiveItem(item.name);
//                                         setIsMenuOpen(false);
//                                     }}
//                                     className={`font-serif cursor-pointer p-2 rounded-md text-center capitalize text-xl text-black flex items-center justify-center gap-2 ${
//                                         activeItem === item.name ? "text-white bg-[#f25811]" : "text-decoration-none"
//                                     }`}
//                                 > 
//                                     <item.icon className={`text-lg text-[#191f5d] ${activeItem === item.name ? "text-white" : ""}`} />
//                                     {item.name}
//                                 </li>
//                             ))}
//                         </ul>
//                     </aside>
//                 )}

//                 {/* Sidebar */}
//                 <aside className="hidden md:block w-[20%] py-4 shadow-2xl">
//                     <ul className="space-y-2">
//                         {menuItems.map((item) => (
//                             <li
//                                 key={item.name}
//                                 onClick={() => setActiveItem(item.name)}
//                                 className={`font-serif cursor-pointer p-2 rounded-md text-center capitalize text-xl text-black flex items-center justify-center gap-2 ${
//                                     activeItem === item.name ? "text-white bg-[#f25811]" : "text-decoration-none"
//                                 }`}
//                             > 
//                                 <item.icon className={`text-lg text-[#191f5d] ${activeItem === item.name ? "text-white" : ""}`} />
//                                 {item.name}
//                             </li>
//                         ))}
//                     </ul>
//                 </aside>

//                 {/* Content Area */}
//                 <div className='w-full md:w-[80%] pt-5 overflow-hidden overflow-y-auto no-scrollbar'>
//                     {activeItem === "events" && <EventForm/>}
//                     {activeItem === "notice" && <NoticeForm/>}
//                     {activeItem === "gallery" && <GalleryForm/>}
//                     {activeItem === "holidays" && <HolidayForm/>}
//                     {activeItem === "Mandatory Disclosure" && <MandatoryDisclosureForm/>}
//                     {activeItem === "candidate list" && <CandidateList/>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AdminDashboard



import React, { useState } from "react";
import { LogOut, Menu, X, User } from "lucide-react";
import { FaCalendarAlt, FaUmbrellaBeach } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdPhotoLibrary, MdNotificationImportant } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import NoticeForm from "./NoticeForm";
import EventForm from "./EventForm";
import GalleryForm from "./GalleryForm";
import HolidayForm from "./HolidayForm";
import MandatoryDisclosureForm from "./MandatoryDisclosureForm";
import CandidateList from "./CandidateList";

function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("events");
  const navigate = useNavigate();

  const menuItems = [
     { name: "candidate list", icon: User },
    { name: "events", icon: FaCalendarAlt },
    { name: "notice", icon: IoMdNotifications },
    { name: "gallery", icon: MdPhotoLibrary },
    { name: "holidays", icon: FaUmbrellaBeach },
    { name: "Mandatory Disclosure", icon: MdNotificationImportant },
   
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* HEADER */}
      <header className="bg-[#191f5d] text-white px-6 py-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <img
            src="/Images/Media.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-full bg-white"
          />
          <h1 className="text-2xl font-semibold tracking-wide hidden md:block">
            Admin Dashboard
          </h1>
        </div>

        {/* Desktop Logout */}
        <div
          onClick={handleLogout}
          className="hidden md:flex items-center gap-2 cursor-pointer text-yellow-300 hover:text-yellow-200"
        >
          <LogOut size={18} />
          <span className="text-sm">Logout</span>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-yellow-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* BODY */}
      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="hidden md:block w-64 bg-white shadow-xl p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-all
                  ${
                    activeItem === item.name
                      ? "bg-[#f25811] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <item.icon size={18} />
                <span className="capitalize text-md font-medium">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50">
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    setActiveItem(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                    ${
                      activeItem === item.name
                        ? "bg-[#f25811] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <item.icon size={18} />
                  <span className="capitalize text-sm font-medium">
                    {item.name}
                  </span>
                </li>
              ))}

              <li
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 text-red-500 cursor-pointer"
              >
                <LogOut size={18} />
                Logout
              </li>
            </ul>
          </div>
        )}

        {/* CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-md p-6 min-h-[80vh]">
             {activeItem === "candidate list" && <CandidateList />}
            {activeItem === "events" && <EventForm />}
            {activeItem === "notice" && <NoticeForm />}
            {activeItem === "gallery" && <GalleryForm />}
            {activeItem === "holidays" && <HolidayForm />}
            {activeItem === "Mandatory Disclosure" && (
              <MandatoryDisclosureForm />
            )}
           
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;

