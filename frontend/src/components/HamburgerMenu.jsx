import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import useAuthState from "../hooks/useAuthState";
import { useAuth } from "../hooks/useAuth";


export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

   const isUser = useAuthState();
  const { logout } = useAuth();
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
      {isUser? (
        <>
         <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>

        <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/news/:slug",
          }}
        >
          News
        </Link>

          <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/news/esport",
          }}
        >
          E-Sport
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
            pathname: "/platform/:slug",
          }}
        >
          Platform
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
           to={{
            pathname: "/user-management",
           }}
        >
          users
        </Link>
        <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          // to={{
          //   pathname: "/platform/:slug",
          // }}
        >
          Post
        </Link>
            <div className="mt-7 w-full">
                 
              <button onClick={logout} className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-green-800 rounded-lg hover:cursor-pointer hover:bg-green-950 transition-all duration-300">
                Logout
              </button>
            </div>
        </>) 
      :
      (
      <> 
      <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>

        <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/news/:slug",
          }}
        >
          News
        </Link>

          <Link
          onClick={() => setIsOpen(!isOpen)}
          className="block px-4 py-3 hover:bg-black hover:text-white"
          to={{
            pathname: "/news/esport",
          }}
        >
          E-Sport
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
            pathname: "/platform/:slug",
          }}
        >
          Platform
        </Link></>)}
       
      </div>
    </div>
  );
}
