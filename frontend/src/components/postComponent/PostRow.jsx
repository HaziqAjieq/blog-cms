import React from "react";
import { examplePost } from "../../contexts/ExamplePost";

// fetching all post with api

export default function PostRow({ post = examplePost }) {


    const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  // Determine status badge styling
  const statusStyles = {
    published: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    draft: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  };
  
  const statusClass = statusStyles[post.status] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";

  return (
    <tr
      key={post.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
    >
      
      <td className="p-2 w-24">
        <div className="flex items-center justify-center overflow-hidden rounded-md aspect-square bg-gray-200 dark:bg-gray-700">
          {post.featured_image ? (
            <img
              className="object-cover w-full h-full"
              src={post.featured_image}
              alt={`Featured: ${post.title}`}
              loading="lazy"
            />
          ) : (
            <div className="flex items-center justify-center text-gray-400 dark:text-gray-500">
              <span className="text-xs">No Image</span>
            </div>
          )}
        </div>
      </td>

      {/* Title column */}
      <td className="px-4 py-3 max-w-xs">
        <h2 className="font-bold line-clamp-2 break-words text-black">{post.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-3">
          {post.excerpt || "No description available"}
        </p>
      </td>

      {/* Author column */}
      <td className="px-4 py-3">
        
        
          <span className="ml-2 font-medium truncate max-w-[120px]">
            {post.user.name || "Unknown"}
          </span>
        
      </td>

      {/* Status column */}
      <td className="px-4 py-3 flex items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center"> 
             <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusClass}`}>
          {post.status?.toUpperCase() || "UNKNOWN"}
        </span>
        
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          {formattedDate}
        </div>
        </div>
       
        <button className="bg-green-700 py-3 px-5 ml-3 rounded-xl hover:bg-green-900 cursor-pointer text-white font-semibold">
          Edit
        </button>
      </td>
    </tr>
  );
}