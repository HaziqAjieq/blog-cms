import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      {/* header goes here */}
      <Header/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet /> {/* This renders the current page content */}
      </main>
      {/* footer goes here */}
      <Footer/>
    </div>
  );
}

// adding header/footer for the mainlayout will stay for other pages
