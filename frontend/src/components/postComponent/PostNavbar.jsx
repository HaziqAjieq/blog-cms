import React from "react";
import { Link } from "react-router-dom";

export default function PostNavbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex  items-center justify-center mx-auto p-4 bg-black rounded-3xl">
      
          <ul className=" flex gap-10 ">
        
            <Link
              to={{
                pathname:'/post-list'
              }}
              className="text-white"
            >
              Post List
            </Link>

            <Link
              to={{
                pathname:'/post-editor'
              }}
              className="text-white"
            >
             Create Post
            </Link>

            <Link
             to={{
                pathname:'/post-tags-platform'
              }}
             className="text-white"
            >
              Tags and Platforms
            </Link>

          
          
          </ul>
        
      </div>
    </nav>
  );
}

// main post navbar for post page/admin and aditor

