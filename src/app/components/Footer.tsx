import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div>
        <div className='wrapper'>
            {/* absolute bottom-0 */}
        <div className='rounded border border-red-200 w-80 my-0 mx-auto'>
            <h1 className='text-white font-bold my-5 text-center'>Follow IMDb on social</h1>
            <div className='flex gap-5 mb-5 justify-center' >
            <Link href="https://www.instagram.com/thakuranks/"><FaInstagram color='white' /></Link>
            <Link href="https://www.facebook.com/anks.thakur.3/"><FaFacebookF  color='white'/></Link>
            <Link href="https://www.youtube.com/channel/UCW7SXQObTPF58bJ9tD9pfHw"><FiYoutube color='white'/></Link>
            <Link href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D"><FaXTwitter color='white'/></Link>
            <Link href="https://www.tiktok.com/login"><FaTiktok color='white' /></Link>
            </div>
        </div>
        <div className='flex gap-5 mb-5 justify-center mt-5'>
            <Link href="/" className='text-white'>Help</Link>
            <Link href="/" className='text-white'>Site Index</Link>
            <Link href="/" className='text-white'>IDMb Pro</Link>
            <Link href="/" className='text-white'>Box Office Mojo</Link>
            <Link href="/" className='text-white'>License IMDb Data</Link>
        </div>
        <div className='flex gap-5 mb-5 justify-center mt-5 items-center' >
        <Link href="/" className='text-white'>Press Room</Link>
        <Link href="/" className='text-white'>Advertising</Link>
        <Link href="/" className='text-white'>Jobs</Link>
        <Link href="/" className='text-white'>Conditions of Use</Link>
        <Link href="/" className='text-white'>Privacy Policy</Link>
        <Link href="/" className='text-white flex items-center'><TiTick color='blue' fontSize="2em" /><ImCross color='red'  fontSize="1em"/><span className='p-2'>Your Ads Privacy Choices</span></Link>
        </div>
        <div className='flex justify-center'>
            <h3 className='text-white'>an <span className='font-bold text-yellow-400'>amazon</span> company</h3>
        </div>
        <div className='flex justify-center mt-4'>
            <p className='text-white font-thin text-sm'>© 1990-2024 by IMDb.com, Inc.</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
