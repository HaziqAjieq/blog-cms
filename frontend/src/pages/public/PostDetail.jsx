import React from 'react'
import { useParams } from 'react-router-dom'
import { examplePost } from '../../contexts/ExamplePost'

export default function PostDetail() {
  const {slug} = useParams();
  const post = examplePost.find(post => post.slug === slug);

  if(!post) return <div>Post not found</div>;

  return (
    <div>
      Post Detail
    </div>
  )
}
