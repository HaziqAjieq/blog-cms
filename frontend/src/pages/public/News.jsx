import { useParams } from "react-router-dom";
import { examplePost } from "../../contexts/ExamplePost";
import BlogCard from "../../components/BlogCard";
import { getLatestPosts } from "../../utils/postFilters";

import { usePagination } from '../../utils/pagination'


export default function News() {
  const postsPerPage = 10;
  const latestNews = getLatestPosts(examplePost);

  const {currentPage,
    currentItems,
    totalPages,
    handleNextPage,
    handlePrevPage, } = usePagination(latestNews,postsPerPage);


  return (
    <div className=" ">
      <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">NEWS</h1>
      {/* card component goes here */}
      <div className="py-10 grid grid-rows gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
      {currentItems.map((post)=> (
          <div key={post.id}>
        <BlogCard post={post}/>
         </div>
      )) 
      }
     </div>

      {/* pagination control button */}
      {latestNews.length > postsPerPage && (
        
        <div className="py-4 flex justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg ${
              currentPage === 1 ? " style-none text-white" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Previos
          </button>
          
          <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
         className={` px-3 py-2 rounded-lg ${
              currentPage === totalPages ? " style-none text-white" : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Next
          </button>
          
        </div>
      )}
    </div>
  );
}

// will have two function one will goes to home another new page
