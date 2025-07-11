import { useState } from "react";
import BlogCard from "../../components/BlogCard";
import { examplePost } from "../../contexts/ExamplePost";
import CardPlatform from "../../components/CardPlatform";
import {AllPlatform} from "../../contexts/ExamplePost";
import { filterEsportPosts, getLatestPosts } from "../../utils/postFilters";
import NewsCard from "../../components/NewsCard";

const HomePage = () => {
  const esportCardPost = getLatestPosts(filterEsportPosts(examplePost));

  const [limit] = useState(6);

  return (
    <div>
      <div className="homepage-news">
        <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
          NEWS
        </h1>
        {/* card component goes here */}
        <NewsCard posts={examplePost} />
      </div>
      {/* platform card goes here */}

      <div className="homepage-platform">
        <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
          PLATFORM
        </h1>
        {/* platform image card goes here */}

        <div className="py-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  ">
          {AllPlatform.map((platform) => (
            <CardPlatform key={platform.id} platform={platform}/>
          ))};
        </div>
      </div>

      {/* others affiliate carousell card component*/}
      <div></div>
      {/* Esport card */}
      <div className="Esport-Platform">
        <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
          E-SPORT
        </h1>
        {/* esport.card component goes here */}
        <div className="py-10 grid grid-rows gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {esportCardPost.slice(0, limit).map((post) => (
            <div key={`esport-${post.id}`}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// homepage for viewer/
// -combination off news/platform(all category)/affiliate input/sidebar category
