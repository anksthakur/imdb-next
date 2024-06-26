import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1> IMDb Pro</h1>
      <Link href="/"><button className='bg-black text-white'> Go to Home Page</button></Link>
    </div>
  )
}

export default page
