import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";




export default function MainLayout() {
   
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      {/* header goes here */}
         <Navbar/> 
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the current page content */}
      </main>
      {/* footer goes here */}
      <Footer/>
    </div>
  );
}

// adding header/footer for the mainlayout will stay for other pages
