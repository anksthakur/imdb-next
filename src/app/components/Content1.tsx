"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || "";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const Content1: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get<{ results: Movie[] }>(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        setData(res.data.results);
      } catch (error: any) {
        setIsError(error.message);
      }
    };

    getApiData();
  }, []);

  // add to watchlist
  const addToWatchlist = (movie: Movie) => {
    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");

    const existingMovieIndex = existingWatchlist.findIndex((item: Movie) => item.id === movie.id);

    // toastify
    if (existingMovieIndex !== -1) {
      toast.warning("Movie already added to the watchlist", { position: "top-center", theme: "colored" });
    } else {
      existingWatchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(existingWatchlist));
      setWatchlist(existingWatchlist);
      console.log("movie added",existingWatchlist)
      toast.success("Movie added to watchlist", { position: "top-center", theme: "colored" });
    }
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="flex gap-7 py-2">
        {isError && <p>{isError}</p>}
        {data.length > 0 && (
          <Carousel
            showArrows={true}
            showThumbs={false}
            showIndicators={false}
            className="w-9/12 h-[472px]"
          >
            {data.map((movie) => (
              <div key={movie.id} className="carousel-item relative">
                
                <Image
                  style={{ height: "472px" }}
                  src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                  alt={movie.title}
                  width={400}
                  height={700}
                />
                
                <div className="p-4 flex items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-black to-transparent w-full">
                  <button onClick={() => addToWatchlist(movie)}>
                    <CiBookmarkPlus color="white" fontSize="2.5em" />
                  </button>
                  <Link href="/">
                    <IoPlayCircleOutline color="white" fontSize="2.5em" />
                  </Link>
                  <Link href={`/movie/${movie.id}`}>
                  <h2 className="text-lg font-bold text-white ml-2">
                    {movie.title}
                  </h2>
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        )}
        {/* Left side */}
        <div className="flex flex-col">
          {data.slice(0, 4).map((movie) => (
            <div key={movie.id} className="flex items-center gap-2 py-1">
              <Image
                className="h-24 w-24"
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                width={200}
                height={100}
                alt={movie.title}
              />
              <Link href="/">
                <IoPlayCircleOutline color="white" fontSize="2.5em" />
              </Link>
              <div className="text-white">{movie.title}</div>
            </div>
          ))}
          <Link href="/">
            <h3 className="text-white flex items-center hover:text-yellow-500">
              Browse trailers{" "}
              <span className="hover:text-yellow-500">
                <MdNavigateNext />
              </span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content1;
//