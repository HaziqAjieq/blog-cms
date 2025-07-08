import { useState } from "react";
import BlogCard from "../../components/BlogCard";
import { examplePost } from "../../contexts/ExamplePost";
import { useNavigate } from "react-router-dom";

// post grid limit on homepage

const PostsGrid = ({ posts }) => {
  const [limit] = useState(6); //Initial number of post to show
 
  const navigate = useNavigate();

  // sorted posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
   {const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);
    return dateB - dateA; // Newest first 
   }
  );

  const handleClick = () =>{
    navigate('/news')
  }
 
  return (
    <>
      <div className="py-10 grid grid-rows gap-4 grid-cols-2 lg:grid-cols-3 ">
        {sortedPosts.slice(0, limit).map((post) => (
          <div key={post.id}>
            <BlogCard  post={post} />
          </div>
        ))}
      </div>
      {/* view more button */}
      {posts.length > limit && (
        <div className="py-4 flex justify-end">
          <button
            onClick={handleClick}
            className="text-white bg-black px-3 py-2 rounded-xl"
          >
            View More
          </button>
        </div>
      )
        }
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <div className=" ">
        <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
          NEWS
        </h1>
        {/* card component goes here */}
        <PostsGrid posts={examplePost} />
      </div>
      {/* categories card goes here */}

      <div>
        <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
          PLATFORM
        </h1>
      </div>

      {/* others affiliate carousell card component*/}
      <div></div>
    </div>
  );
};

export default HomePage;

// homepage for viewer/
// -combination off news/platform(all category)/affiliate input/sidebar category
