"use client"
import { signIn } from 'next-auth/react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Google = () => {
    const googLe = () => {
        signIn("google",{callbackUrl:"/"})// login hone ke baad kha redrict krna hai
      }
  return (
    <>
      <button onClick={googLe} className='flex justify-evenly border-solid border-2 border-black-500 px-2 rounded-md text-center mt-3'><span className='mt-1'><FaGoogle color="blue" /></span>Sign in with Google</button>
    </>
  )
}

export default Google
