"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiSolidAddToQueue } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaAward } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [fabar, setFabar] = useState(false);

  const hideDiv = () => {
    setFabar(!fabar);
  };

  return (
    <>
      <div className='bg-black py-2'>
        <div className='wrapper'>
          <div className='flex justify-between items-center'>
            <div>
              <Link href="/">
                <Image
                  src="/imdb.png"
                  width={60}
                  height={25}
                  alt="imdb image"
                />
              </Link>
            </div>
            <div onClick={hideDiv} className='flex justify-center cursor-pointer'>
              <FaBars color="white" fontSize="1.5em" />
              <span className='text-cyan-50 pl-2'>Menu</span>
            </div>
            <div className='flex justify-center rounded border border-red-200'>
              <select className='w-10 outline-none'>
                <option>All</option>
                <option>TV Episodes</option>
                <option>Celebs</option>
                <option>Companies</option>
              </select>
              <input className="w-96 outline-none" type='search' placeholder='search IMDb' />
              <span className='bg-white '>
                <CiSearch color="black" fontSize="1.5em" />
              </span>
            </div>
            <div>
              <Link href="/imdbpro">
                <button className='text-white'>
                  IMDb<span className='text-blue-400'>Pro</span>
                </button>
              </Link>
            </div>
            <div className='flex justify-between'>
              <span>
                <BiSolidAddToQueue color='white' fontSize="1.5em" />
              </span>
              <Link href="/watchlist">
                <button className='text-cyan-50 pl-2'>Watchlist</button>
              </Link>
            </div>
            <div>
              <Link href="/signin">
                <button className='text-cyan-50'>Sign In</button>
              </Link>
            </div>
            <div>
              <select className='w-10'>
                <option>Eng</option>
                <option>Hindi</option>
                <option>Punjabi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {fabar && (
        <div id="hide" className="absolute w-full top-0 bg-black min-h-full">
          <div className='wrapper'>
            <div className='flex justify-between'>
              <div>
                <Link href="/">
                  <Image
                    src="/imdb.png"
                    width={80}
                    height={30}
                    alt="imdb image"
                  />
                </Link>
              </div>
              <div onClick={hideDiv} className='cursor-pointer'>
                <IoMdCloseCircle color='yellow' fontSize="2.2em" />
              </div>
            </div>
            <div className='flex justify-between mt-5'>
              <div className='leading-8 text-white'>
                <h1 className='flex gap-2 items-center font-bold text-xl'>
                  <MdLocalMovies fontSize="1.5em" color='yellow' />
                  Movies
                </h1>
                <h2>Release Calender</h2>
                <Link href="/topmovies"><h2>Top 250 Movies</h2></Link>
               <Link href="/popularmovies"><h2>Most Popular Movies</h2></Link>
                <h2>Movies News</h2>
                <h2>ShowTimes & Tickets</h2>
                <h2>India Movie Spotlight</h2>
              </div>
              <div className='leading-8 text-white'>
                <h1 className='flex gap-2 items-center font-bold text-xl'>
                  <PiTelevisionBold fontSize="1.5em" color='yellow' />
                  TV Shows
                </h1>
                <h2>What is on TV & Streaming</h2>
               <Link href="/topshows"> <h2>Top 250 TV Shows</h2></Link>
               <Link href="/popularshows"> <h2>Most Popular TV Shows</h2></Link>
                <h2>TV News</h2>
                <h2>Browse TV Shows by Genre</h2>
              </div>
              <div className='leading-8 text-white'>
                <h1 className='flex gap-2 items-center font-bold text-xl'>
                  <TfiWorld fontSize="1.5em" color='yellow' />
                  Community
                </h1>
                <h2>Help Center</h2>
                <h2>Contributor Zone</h2>
                <h2>Polls</h2>
              </div>
            </div>
            <div className='flex justify-around mt-10'>
              <div className='leading-8 text-white'>
                <h1 className='flex gap-2 items-center font-bold text-xl'>
                  <FaAward fontSize="1.5em" color='yellow' />
                  Awards & Event
                </h1>
                <h2>Oscars</h2>
                <h2>Pride</h2>
                <h2>ABFF</h2>
                <h2>Award Central</h2>
                <h2>Festival</h2>
                <h2>All Events</h2>
              </div>
              <div className='leading-8 text-white'>
                <h1 className='flex gap-2 items-center font-bold text-xl'>
                  <IoIosPeople fontSize="1.5em" color='yellow' />
                  Celebs
                </h1>
                <h2>Born Today</h2>
                <h2>Most Popular Celebs</h2>
                <h2>Celebrity News</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
