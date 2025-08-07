import React from 'react'
import { Outlet } from 'react-router-dom'

import PostNavbar from '../../../components/postComponent/PostNavbar'

export default function PostLayout() {
  return (
    <div>
      <PostNavbar/>
       <div className="mt-6">
        <Outlet />
      </div>
    </div>
  )
}


// will handle all related auth post layout excepting outlet wrap with postnavbar