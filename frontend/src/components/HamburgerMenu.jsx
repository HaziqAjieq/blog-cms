import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    <div className="md:hidden z-50 flex  justify-center ">
      {/* Hamburger Button */}
      <button
        id="toggleMenu"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
        className="grid place-content-center w-12 h-12 relative   "
      >
        <div
          className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-white mt-2 transition-all duration-300 ${isOpen ? "hidden" : ""}`}
        ></div>
        <div
          className={`w-8 h-0.5 bg-white mt-2 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
        ></div>
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
        absolute right-0 left-0 w-full h-full mt-15 pt-8 bg-white rounded-md shadow-lg py-2 
        transition-all duration-300 
        ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
      `}
      >
        <Searchbar />

        <Link
        onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/home",
          }}
        >
          Home
        </Link>

        <Link
        onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/news",
          }}
        >
          News
        </Link>

        <Link
        onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/about",
          }}
        >
          About
        </Link>

        <Link
        onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/platform",
          }}
        >
          Platform
        </Link>
      </div>
    </div>
  );
}
