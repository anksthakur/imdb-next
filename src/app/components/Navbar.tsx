"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiSolidAddToQueue } from "react-icons/bi";
import { IoMdCloseCircle } from "react-icons/io";
import { PiTelevisionBold } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { FaAward } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link";
import { useGlobalContext } from '../Context/store';
import { signOut } from "next-auth/react";

const Navbar: React.FC = () => {
  // State to manage the visibility of the menu
  const [fabar, setFabar] = useState(false);
  // State to manage the search query input
  const [searchQuery, setSearchQuery] = useState("");
  // Context to get the watchlist and movie data
  const { watchlist, movie } = useGlobalContext();

  // Toggle the menu visibility
  const hideDiv = () => {
    setFabar(!fabar);
  };

  // Handle user logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  // Update the search query state as the user types
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter movies based on the search query
  const filteredMovies = movie.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="bg-black py-2">
        <div className="wrapper">
          <div className="flex justify-between items-center">
            <div>
              {/* Logo Link */}
              <Link href="/">
                <Image src="/imdb.png" width={60} height={25} alt="imdb image" />
              </Link>
            </div>
            {/* Menu Toggle */}
            <div onClick={hideDiv} className="flex justify-center cursor-pointer">
              <FaBars color="white" fontSize="1.5em" />
              <span className="text-cyan-50 pl-2">Menu</span>
            </div>
            {/* Search Bar */}
            <div className="flex justify-center rounded border border-red-200">
              <select className="w-10 outline-none">
                <option>All</option>
                <option>TV Episodes</option>
                <option>Celebs</option>
                <option>Companies</option>
              </select>
              <input
                className="w-96 outline-none"
                type="search"
                placeholder="Search IMDb"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="bg-white ">
                <CiSearch color="black" fontSize="1.5em" />
              </span>
            </div>
            {/* IMDb Pro Link */}
            <div>
              <Link href="/imdbpro">
                <button className="text-white">
                  IMDb<span className="text-blue-400">Pro</span>
                </button>
              </Link>
            </div>
            {/* Watchlist */}
            <div className="flex justify-between">
              <span>
                <BiSolidAddToQueue color="white" fontSize="1.5em" />
              </span>
              <Link href="/watchlist">
                <button className="text-cyan-50 pl-2">
                  Watchlist
                  <span className="ml-1 px-1 bg-yellow-500 rounded-xl text-black">
                    {watchlist.length}
                  </span>
                </button>
              </Link>
            </div>
            {/* Login and Logout Buttons */}
            <div>
              <Link href="/signin">
                <button className="text-cyan-50 hover:text-yellow-500">Login</button>
              </Link>
              <button onClick={handleLogout} className="text-white p-2 hover:text-yellow-500">Logout</button>
            </div>
            {/* Language Selection */}
            <div>
              <select className="w-10">
                <option>Eng</option>
                <option>Hindi</option>
                <option>Punjabi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Overlay */}
      {fabar && (
        <div id="hide" className="absolute w-full top-0 bg-black min-h-full z-10">
          <div className="wrapper">
            <div className="flex justify-between">
              <div>
                <Link href="/">
                  <Image src="/imdb.png" width={80} height={30} alt="imdb image" />
                </Link>
              </div>
              <div onClick={hideDiv} className="cursor-pointer">
                <IoMdCloseCircle color="yellow" fontSize="2.2em" />
              </div>
            </div>
            {/* Menu Links */}
            <div className="flex justify-between mt-5">
              <div className="leading-8 text-white">
                <h1 className="flex gap-2 items-center font-bold text-xl">
                  <MdLocalMovies fontSize="1.5em" color="yellow" />
                  Movies
                </h1>
                <h2>Release Calendar</h2>
                <Link href="/topmovies">
                  <h2>Top 250 Movies</h2>
                </Link>
                <Link href="/popularmovies">
                  <h2>Most Popular Movies</h2>
                </Link>
                <h2>Movies News</h2>
                <h2>Showtimes & Tickets</h2>
                <h2>India Movie Spotlight</h2>
              </div>
              <div className="leading-8 text-white">
                <h1 className="flex gap-2 items-center font-bold text-xl">
                  <PiTelevisionBold fontSize="1.5em" color="yellow" />
                  TV Shows
                </h1>
                <h2>Whats on TV & Streaming</h2>
                <Link href="/topshows">
                  <h2>Top 250 TV Shows</h2>
                </Link>
                <Link href="/popularshows">
                  <h2>Most Popular TV Shows</h2>
                </Link>
                <h2>TV News</h2>
                <h2>Browse TV Shows by Genre</h2>
              </div>
              <div className="leading-8 text-white">
                <h1 className="flex gap-2 items-center font-bold text-xl">
                  <TfiWorld fontSize="1.5em" color="yellow" />
                  Community
                </h1>
                <h2>Help Center</h2>
                <h2>Contributor Zone</h2>
                <h2>Polls</h2>
              </div>
            </div>
            <div className="flex justify-around mt-10">
              <div className="leading-8 text-white">
                <h1 className="flex gap-2 items-center font-bold text-xl">
                  <FaAward fontSize="1.5em" color="yellow" />
                  Awards & Events
                </h1>
                <h2>Oscars</h2>
                <h2>Pride</h2>
                <h2>ABFF</h2>
                <h2>Award Central</h2>
                <h2>Festival</h2>
                <h2>All Events</h2>
              </div>
              <div className="leading-8 text-white">
                <h1 className="flex gap-2 items-center font-bold text-xl">
                  <IoIosPeople fontSize="1.5em" color="yellow" />
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
      {/* Search Results */}
      {searchQuery && (
        <div className="bg-white p-4 absolute w-full top-12 z-20">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="flex items-center p-2 border-b border-gray-200">
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                width={50}
                height={75}
              />
              <span className="ml-4">{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;