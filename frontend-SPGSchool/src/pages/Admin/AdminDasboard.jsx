import React, { useState } from 'react'
import Logo from '../../assets/Media.jpg';
import {  Calendar, Bell, User } from 'lucide-react';
import { LogOut, Menu, X } from "lucide-react"
// import Logo from '../../assets/logo.jpg';
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdNotificationImportant } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import NoticeForm from './NoticeForm';
import EventForm from './EventForm';
import GalleryForm from './GalleryForm';
import HolidayForm from './HolidayForm';
import MandatoryDisclosureForm from './MandatoryDisclosureForm';

function AdminDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("events");
    const navigate = useNavigate();

    const menuItems = [
        { name: "events", icon: FaCalendarAlt },
        { name: "notice", icon: IoMdNotifications },
        { name: "gallery", icon: MdPhotoLibrary },
        { name: "holidays", icon: FaUmbrellaBeach },
        { name: "Mandatory Disclosure", icon: MdNotificationImportant },
    ];

    const handlelogout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-[#191f5d] text-white py-3 px-4 md:px-8 h-auto md:h-[15vh] flex">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Logo and Title */}
                    <div className="flex items-center space-x-3 w-full md:w-auto justify-between">
                        <div className="flex items-center space-x-3">
                            <img src={Logo} alt="School Logo" className="w-12 h-12 md:w-15 md:h-full rounded-full bg-white" />
                            <div className="hidden md:block">
                                <h1 className="text-2xl md:text-4xl font-serif">Admin Dashboard</h1>
                            </div>
                        </div>
                        
                        {/* Mobile Logout and Menu Toggle */}
                        <div className="flex items-center space-x-4 md:hidden">
                            <div onClick={handlelogout} className="cursor-pointer">
                                <LogOut className="h-5 w-5 text-yellow-200" />
                            </div>
                            <button 
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-yellow-200 hover:text-yellow-100 focus:outline-none"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Desktop Logout */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div onClick={handlelogout} className="cursor-pointer flex items-center flex-col">
                            <LogOut className="h-5 w-5 text-yellow-200" />
                            <span className="text-xs text-yellow-200 mt-1">LogOut</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row flex-1">
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <aside className="md:hidden w-full bg-white shadow-lg">
                        <ul className="space-y-2 p-4">
                            {menuItems.map((item) => (
                                <li
                                    key={item.name}
                                    onClick={() => {
                                        setActiveItem(item.name);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`font-serif cursor-pointer p-2 rounded-md text-center capitalize text-xl text-black flex items-center justify-center gap-2 ${
                                        activeItem === item.name ? "text-white bg-[#f25811]" : "text-decoration-none"
                                    }`}
                                > 
                                    <item.icon className={`text-lg text-[#191f5d] ${activeItem === item.name ? "text-white" : ""}`} />
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </aside>
                )}

                {/* Sidebar */}
                <aside className="hidden md:block w-[20%] py-4 shadow-2xl">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                onClick={() => setActiveItem(item.name)}
                                className={`font-serif cursor-pointer p-2 rounded-md text-center capitalize text-xl text-black flex items-center justify-center gap-2 ${
                                    activeItem === item.name ? "text-white bg-[#f25811]" : "text-decoration-none"
                                }`}
                            > 
                                <item.icon className={`text-lg text-[#191f5d] ${activeItem === item.name ? "text-white" : ""}`} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Content Area */}
                <div className='w-full md:w-[80%] pt-5 overflow-hidden overflow-y-auto no-scrollbar'>
                    {activeItem === "events" && <EventForm/>}
                    {activeItem === "notice" && <NoticeForm/>}
                    {activeItem === "gallery" && <GalleryForm/>}
                    {activeItem === "holidays" && <HolidayForm/>}
                    {activeItem === "Mandatory Disclosure" && <MandatoryDisclosureForm/>}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard