import React from "react";
import { useParams } from "react-router-dom";
import { examplePost } from "../../contexts/ExamplePost";
import NewsCard from "../../components/NewsCard";

export default function PostDetail() {
  const { slug } = useParams();
  const post = examplePost.find((post) => post.slug === slug);

  const formattedDate = new Date(post.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  if (!post) return <div>Post not found</div>;

  return (
    <div key={post.id} className="flex flex-col min-h-full">
      <header className="post-detail-header flex flex-col items-center justify-center gap-4">
        <img
          src={post.featured_image}
          className="max-h-[682px] max-w-[1024px] w-2/3"
        />

        <h1 className="post-detail-title text-2xl md:text-3xl lg:text-4xl font-bold border-b-2 w-full text-center pb-2">
          {post.title}
        </h1>
        <div className="w-full bg-black py-5 md:py-8 lg:py-10 rounded-2xl flex flex-col gap-4">
          <h1 className="w-full text-white text-center text-lg md:text-xl lg:text-2xl">
            "{post.excerpt}"
          </h1>
          <p className="post-detail-author text-white text-center font-semibold ">
            Written By : {post.user.name}
          </p>

          <time
            className="text-white text-center text-sm"
            dateTime={post.published_at}
          >
            Last Updated : {formattedDate}
          </time>
        </div>

        {/* creating underline */}
      </header>

      {/* post content*/}
      <div className="post-detail-content flex flex-col py-10 gap-3">
        <div className="pt-6 pb-15">
          <h1 className="flex gap-4">
            {post.platforms?.map((platform) => (
              <span
                key={`platform-${platform.id}`}
                className="text-black font-semibold underline text-md md:text-lg"
              >
                {platform.name}
              </span>
            ))}
          </h1>
          <p
            style={{ whiteSpace: "pre-line" }}
            className="flex text-lg md:text-xl font-medium text-gray-900"
          >
            {post.content}
          </p>
        </div>
       
      </div>
    </div>
  );
}
