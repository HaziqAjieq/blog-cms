import { examplePost } from "../contexts/ExamplePost";
import { Link } from "react-router-dom";

export default function BlogCard({ post = examplePost , searchTerm }) {
  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const highlightMatch = (text) => {
      if (!searchTerm || !text) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, i) =>
      i % 2 === 1 ? <mark key={i}>{part}</mark> : part
  );
  }

  return (
    <div
    key={post.id}
    className={` bg-white w-full  rounded-lg flex flex-col`}>
      {/* featuresImage */}

      <div className="flex items-center justify-center w-full  overflow-hidden">
        <img
          className="object-cover max-h-60 w-full"
          src={post.featured_image}
          alt={highlightMatch(post.title)}
        />
      </div>

      <div className="px-3 py-7">
        {/* getting categories  */}
        <div className="flex justify-between">
          <time className="text-gray-600 text-sm" dateTime={post.published_at}>
            {formattedDate}
          </time>
          <div className="flex gap-2">
            {post.platforms?.map((platform) => (
              <span
                key={`platform-${platform.id}`}
                className="text-gray-600 text-sm"
              >
                {highlightMatch(platform.name)}
              </span>
            ))}
          </div>
        </div>

        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
             {highlightMatch(post.title)}
          </h5>
      
        <p className="mb-3 text-black line-clamp-2 text-lg "> 
          {highlightMatch(post.excerpt)} 
          </p>
        {/* read more link */}
        <Link to={`/posts/${post.slug}`}>
          <button className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-800 rounded-lg hover:cursor-pointer hover:bg-green-950 transition-all duration-300">
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

// purpose if just for the card
