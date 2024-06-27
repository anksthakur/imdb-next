import Link from 'next/link'
import React from 'react'
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <>
    <div className='bg-gray-300 min-h-96'>
      <div className='bg-white w-4/5 mx-auto my-0 flex gap-24 px-9 h-96'>
        <div className='flex flex-col mt-8'>
      <h1 className=' font-bold text-center '>Sign in</h1>
      
      <Link href="/api/auth/signin" className='flex justify-evenly border-solid border-2 border-black-500 px-2 rounded-md text-center mt-3'><span className='mt-1'><FaGithub color="black"/></span>Sign in with GitHub</Link>
      <Link href="/api/auth/signin" className='flex justify-evenly border-solid border-2 border-black-500 px-2 rounded-md text-center mt-3'><span className='mt-1'><FaGoogle color="blue" /></span>Sign in with Google</Link>
      <p className='text-center mt-3'>--------- or ---------</p>
      <Link href="/register" className='border-solid border-2 border-black-500 px-2 rounded-md bg-yellow-500 text-center mt-3'>Create a New Account</Link>
      <p className='font-light text-slate-500 text-xs mt-3'>By signing in, you agree to IMDbs Conditions of Use and Privacy Policy.</p>
    </div>
    <div className='flex flex-col mt-8 mb-8'>
      <h1 className=' font-extrabold text-center '>Benefits of your free IMDb account</h1>
      <h4 className='font-bold pt-4'>Personalized Recommendations</h4>
      <p className='text-sm'>Discover shows you will love.</p>
      <h4 className='font-bold pt-4'>Your Watchlist</h4>
      <p className='text-sm'>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
      <h4 className='font-bold pt-4'>Your Ratings</h4>
      <p className='text-sm'>Rate and remember everything you have seen.</p>
      <h4 className='font-bold pt-4'>Contribute to IMDb</h4>
      <p className='text-sm'>Add data that will be seen by millions of people and get cool badges.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default page
