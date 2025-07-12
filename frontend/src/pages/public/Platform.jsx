import React, { useState } from "react";
import CardPlatform from "../../components/CardPlatform";
import { AllPlatform } from "../../contexts/ExamplePost";
import { examplePost } from "../../contexts/ExamplePost";
import BlogCard from "../../components/BlogCard";
import { getFilterPlatform } from "../../utils/platformFilters";
import { useParams,useLocation } from "react-router-dom";

export default function Platform() {
   const { slug } = useParams();
  const location = useLocation();
  // change into fetching for real app
  const selectedPlatform = AllPlatform.find(post => post.slug === slug) || location.state?.platform

  // filtered platform
  const platfromPosts = getFilterPlatform(examplePost,selectedPlatform)

  return (
    <div className="platform-page">
      <h1 className="border-b-2 border-b-black text-xl md:text-2xl lg:text-3xl font-semibold">
        PLATFORM
      </h1>
      {/* platform image card goes here */}

      <div className="py-6 md:py-10 grid gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-4  ">
        {AllPlatform.map(platform => (
          <CardPlatform key={platform.id} 
          platform={platform}
          />
        ))};
        
      </div>
      {/* platform goes here */}
      <div className="py-6 md:py-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 "lg:grid-cols-4 >
        {platfromPosts.map(post => (
            <BlogCard key={post.id} post={post}/>
        ))}
        
      </div>
    </div>
  );
}

// this page will reload a content that related to the console platform (console/mobile/etc)
