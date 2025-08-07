import React from 'react'
import PostRow from './PostRow'
import { examplePost } from '../../contexts/ExamplePost'

export default function PostTable() {
  return (
     <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
    
            <tbody>
          
             
             {examplePost.map(post => (
              <PostRow post={post} key={post.id}/>
             ))}
             
            </tbody>
          </table>
          </div>
  )
}


//  {AllPlatform.map(platform => (
//             <CardPlatform key={platform.id} platform={platform} />
//           ))};