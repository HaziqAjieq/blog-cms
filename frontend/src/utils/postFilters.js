import { useState } from "react";

export const Esport_Tag =[
  'FPS',
  'COMPETITIVE',
  'TOURNAMENT',
  'E-SPORT',
];

export const getLatestPosts = (posts) =>{
 
return [...posts].sort((a,b) =>{
    const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);
    return dateB - dateA; //newest first
  })
};

export const filterEsportPosts = (posts) => {
  if (!posts) return [];

  return posts.filter(post => {
    return post.tags?.some(tag => Esport_Tag.includes(tag?.name?.toUpperCase())
  )
})
}