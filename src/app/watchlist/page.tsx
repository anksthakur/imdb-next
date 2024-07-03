"use client"
import React, { useEffect, useState } from 'react'
import { BsFilterCircleFill } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const Page = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isError, setIsError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const existingWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (existingWatchlist.length > 0) {
      setWatchlist(existingWatchlist);
      console.log("stored item",existingWatchlist);
      
    } else {
      setIsError("No movie in watchlist");
    }
  }, []);

  return (
    <>
      <div className='bg-white'>
        <div className='wrapper'>
          <div>
          <div>
          <div>
            <p> titles</p>
          </div>
          <div>
            <h1><BsFilterCircleFill color='blue'/>
            Sort by</h1>
            <select>
            <option>List order</option>
            <option>Number of ratings</option>
            <option>Number of Vote</option>
            <option>Popularity</option>
          </select>
          <FcViewDetails color='white' />
          <RiLayoutGrid2Fill />
          <CgDetailsMore />
          </div>
          </div>
        
        </div>
        </div>
      </div>

    </>
  )
}

export default Page
