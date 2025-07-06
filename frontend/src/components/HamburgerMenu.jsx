import React, { useState } from "react";

export default function HamburgerMenu() {
const [isOpen , setIsOpen] = useState(false);

  return (
    <div className="md:hidden z-50  ">
      {/* Hamburger Button */}
      <button
        id="toggleMenu"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="grid place-content-center w-12 h-12 relative focus:outline-none   "
      >
        <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-white mt-2 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-8 h-0.5 bg-white mt-2 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div className={`
        absolute right-0 left-0 w-full h-full mt-2  bg-white rounded-md shadow-lg py-2 
        transition-all duration-300 
        ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
      `}>
        <a href="/" className="block px-4 py-3 hover:bg-gray-800">News</a>
        <a href="/" className="block px-4 py-3 hover:bg-gray-800">Reviews</a>
        <a href="/" className="block px-4 py-3 hover:bg-gray-800">Guides</a>
      </div>
    </div>
  );
}
