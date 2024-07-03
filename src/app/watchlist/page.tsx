"use client"
import React, { useEffect, useState } from 'react';
import { BsFilterCircleFill } from "react-icons/bs";
import { FcViewDetails } from "react-icons/fc";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import Image from 'next/image';
import Link from 'next/link';
import { CiBookmarkPlus } from "react-icons/ci";
import { Rating } from 'react-simple-star-rating';
import { FaStar } from 'react-icons/fa';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const Page = () => {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [ratedMovies, setRatedMovies] = useState<number[]>([]);

  // Function to handle movie rating
  const handleRating = (rate: number, movieId: number) => {
    // Prevent duplicate ratings
    if (ratedMovies.includes(movieId)) {
      alert("You have already rated this movie.");
      return;
    }

    // Add movieId to the ratedMovies array
    setRatedMovies((prevRatedMovies) => [...prevRatedMovies, movieId]);

    // Update the vote count in the local data
    const updatedWatchlist = watchlist.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          vote_count: movie.vote_count + 1,
        };
      }
      return movie;
    });
    setWatchlist(updatedWatchlist);
    console.log(`Rated movie ID ${movieId} with rating ${rate}`);
  };

  useEffect(() => {
    const existingWatchlist: Movie[] = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (existingWatchlist.length > 0) {
      setWatchlist(existingWatchlist);
      console.log("Stored items", existingWatchlist);
    } else {
      setIsError("No movie in watchlist");
    }
  }, []);

  return (
    <>
      <div className='bg-white py-5'>
        <div className='wrapper'>
          <div className='flex items-center justify-between  gap-14'>
            <div>
              <p>Titles</p>
            </div>
            <div className='flex items-center gap-2'>
              <h1 className='flex items-center gap-2'>
                <BsFilterCircleFill fontSize="1.5rem" color='blue' />
                Sort by
              </h1>
              <select className='text-blue-600 w-24'>
                <option className='text-black'>List order</option>
                <option className='text-black'>Number of ratings</option>
                <option className='text-black'>Number of Vote</option>
                <option className='text-black'>Popularity</option>
              </select>
              <FcViewDetails color='white' fontSize="1.5rem" />
              <RiLayoutGrid2Fill fontSize="1.5rem" />
              <CgDetailsMore fontSize="1.5rem" />
            </div>
          </div>
          {/* main div */}
          <div className='border border-gray-500 py-2 px-2 mt-3'>
            {watchlist.length > 0 ? (
              watchlist.map((movie) => (
                <div key={movie.id} className='flex items-center gap-3 border border-gray-400 border-t-0 border-l-0 border-r-0 py-2'>
                  <div className='relative'>
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="w-48 h-64"
                    />
                    <Link href="/watchlist">
                      <CiBookmarkPlus className="absolute left-2 top-2.5" color="white" fontSize="2.5em" />
                    </Link>
                  </div>
                  <div className="flex flex-col">
                  <div>
                    <h1>{movie.title}</h1>
                  </div>
                    <div className="flex items-center gap-2">
                      <FaStar color="yellow" fontSize="1.5rem" />
                      <span>{movie.vote_average.toFixed(1)}</span>
                      <Rating onClick={(rate: number) => handleRating(rate, movie.id)} size={27} initialValue={0} iconsCount={1} />
                      <span>{movie.vote_count}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>{isError}</p>
            )}
          </div>
         </div>
      </div>
    </>
  );
};

export default Page;
