import { useParams,useSearchParams } from "react-router-dom";
import { examplePost } from "../../contexts/ExamplePost";
import BlogCard from "../../components/BlogCard";
import { getLatestPosts ,filterEsportPosts} from "../../utils/postFilters";
import { usePagination } from "../../hooks/pagination";

export default function News() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search') || ''; 


  const postsPerPage = 10;


  // combine filtering and sorting
  const filterEsport = slug === "esport"
    ? filterEsportPosts(examplePost)
    : examplePost;

      const displayPosts = searchTerm 
    ? filterEsport.filter(post => {
        const term = searchTerm.toLowerCase();
        return (
          post.title?.toLowerCase().includes(term) ||
          post.slug?.toLowerCase().includes(term) ||
          post.excerpt?.toLowerCase().includes(term) ||
          post.tags?.some(t => t.name.toLowerCase().includes(term)) ||
          post.platforms?.some(p => p.name.toLowerCase().includes(term))
        );
      })
    : getLatestPosts(filterEsport); 

  const processedPosts = getLatestPosts(filterEsport);


  const {
    currentPage,
    currentItems,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(displayPosts, postsPerPage);

  return (
    <div className=" ">
      <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
        {slug === "esport" ? "E-SPORT NEWS" : "NEWS"}
        {searchTerm && (
          <span className="text-sm ml-2 text-gray-600">
            (Search: "{searchTerm}")
          </span>
        )}
      </h1>
      {/* card component goes here */}
      <div className="py-10 grid grid-rows gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
         {currentItems.length > 0 ? (
          currentItems.map((post) => (
            <div key={post.id}>
              <BlogCard post={post} searchTerm={searchTerm} />
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-gray-500">No posts found matching your search</p>
          </div>
        )}
      </div>

      {/* pagination control button */}
      {displayPosts.length > postsPerPage && (
        <div className="py-4 flex justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-lg ${
              currentPage === 1
                ? " style-none text-white"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            Previos
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={` px-3 py-2 rounded-lg ${
              currentPage === totalPages
                ? " style-none text-white"
                : "bg-black text-white hover:bg-gray-800"
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
