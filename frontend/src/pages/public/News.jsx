import { useParams } from "react-router-dom";
import { examplePost } from "../../contexts/ExamplePost";
import BlogCard from "../../components/BlogCard";
import { getLatestPosts, Esport_Tag ,filterEsportPosts} from "../../utils/postFilters";
import { usePagination } from "../../hooks/pagination";

export default function News() {
  const { slug } = useParams();
  const postsPerPage = 10;


  // combine filtering and sorting
  const filterEsport = slug === "esport"
    ? filterEsportPosts(examplePost)
    : examplePost;

  const processedPosts = getLatestPosts(filterEsport);

  const {
    currentPage,
    currentItems,
    totalPages,
    handleNextPage,
    handlePrevPage,
  } = usePagination(processedPosts, postsPerPage);

  return (
    <div className=" ">
      <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
        {slug === "esport" ? "E-SPORT NEWS" : "NEWS"}
      </h1>
      {/* card component goes here */}
      <div className="py-10 grid grid-rows gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
        {currentItems.map((post) => (
          <div key={post.id}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {/* pagination control button */}
      {processedPosts.length > postsPerPage && (
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
