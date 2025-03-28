import React, { useState } from 'react';
import { Calendar, Bell, User, Menu, X,Eye } from 'lucide-react';
import Logo from '../assets/Logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full">
      
      
      {/* Top Navbar - Burgundy Background */}
      <div className="bg-red-900 text-white py-3 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            {/* <div className="h-12 w-12 flex items-center justify-center"> */}
              <img src={Logo} alt="Sidwell Friends Logo" className=" w-15 h-full rounded-full bg-white" />
            {/* </div> */}
            <div className="hidden md:block">
              <h1 className="text-4xl md:text-3xl font-serif">Mount Litera Zee School Bilaspur</h1>
              <p className="text-sm text-gray-200">CBSE Affiliation No :  3330519</p>
            </div>
          </div>
          
          {/* Mobile Title - Shown only on smallest screens */}
          <div className="md:hidden text-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl font-serif">Mount Litera Zee School Bilaspur</h1>
            <p className="text-xs text-gray-200">CBSE Affiliation No :  3330519</p>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Quick Access Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-6">
              {/* News Icon */}
              <div 
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => handleDropdownHover('news')}
                onMouseLeave={handleDropdownLeave}
              >
                <Bell className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">NEWS</span>
                
              
              </div>
              
              {/* Calendar Icon */}
              <div 
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => handleDropdownHover('calendar')}
                onMouseLeave={handleDropdownLeave}
              >
                <Calendar className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">CALENDAR</span>
                
               
              </div>
              
              {/* Directory Icon */}
              <div 
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => handleDropdownHover('directory')}
                onMouseLeave={handleDropdownLeave}
              >
                <User className="h-5 w-5 text-yellow-200" />
                <span className="text-xs text-yellow-200 mt-1">ADMISSION</span>
                
               
              </div>
            </div>
            
           
         
          </div>
        </div>
      </div>

   

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {/* Icons with labels */}
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
            
        
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;