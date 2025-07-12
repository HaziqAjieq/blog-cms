import { useState } from "react";
import { examplePost } from "../contexts/ExamplePost";
import { useParams } from "react-router-dom";



export const getFilterPlatform = (posts = examplePost ,selectedPlatform = null) => {
  if (!posts || !Array.isArray(posts)) return [];

  // filter by platform if on is selected
  const filteredPost = selectedPlatform ? posts.filter(post => post.platforms?.some(platform => platform.id === selectedPlatform.id)):[...posts];

  return filteredPost.sort((a,b) =>{
    const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);
    return dateB - dateA; //newest first
  })
};

 export const getFilterPlatformPage = (posts = examplePost) => {
  const {platformId} = useParams();

  return examplePost.platforms.find(post => post.id === parseInt(platformId)) || location.state?.platform;
 }
