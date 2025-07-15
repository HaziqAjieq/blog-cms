import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLatestPosts } from "../utils/postFilters";
import BlogCard from "./BlogCard";
import { examplePost } from "../contexts/ExamplePost";

export default function NewsCard({ posts }) {
  const [limit] = useState(6); //Initial number of post to show

  const navigate = useNavigate();
  // sorted posts by date (newest first)

  const handleClick = (links) => {
    navigate(`/${links}`);
  };
  
  const latestNews = getLatestPosts(examplePost);
  return (
    <>
      <div className="py-10 grid grid-rows gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {latestNews.slice(0, limit).map((post) => (
          <div key={post.id}>
            <BlogCard post={post} />
          </div>
        ))}
      </div>
      {/* view more button */}
      {posts.length > limit && (
        <div className="py-4 flex justify-end">
          <button
            onClick={() => handleClick("news/:slug")}
            className="text-white bg-black px-3 py-2 rounded-xl"
          >
            View More
          </button>
        </div>
      )}
    </>
  );
}
