import React from 'react'

export default function LoginPage() {
  return (
    <div className='flex  items-center justify-center'>
      <form className='login-container flex flex-col items-center gap-7 bg-black  w-full  md:w-2/3 lg:w-1/2 h-[460px] text-center rounded-xl'>
        <h1 className='mt-10 font-bold text-4xl text-white'>
          Login
        </h1>

        <div className='flex flex-col w-full items-center justify-center gap-3'>
          <input type='text' id='username' name='Username'  placeholder='Username' className='bg-white text-black rounded-lg h-[40px] pl-2  w-3/4'/>
          <input type='password' id='username' name='Username'  placeholder='password' className='bg-white text-black rounded-lg h-[40px] pl-2 w-3/4'/>
         <button 
         type='submit'
        //  value={}
         className='text-white bg-green-800 w-1/2 my-8 py-4 rounded-2xl hover:bg-green-900 cursor-pointer transition-colors'>
          Login
         </button>
        </div>
      </form>
    </div>
  )
}
