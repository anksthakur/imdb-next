"use client";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/store";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaStar, FaPlay } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { CiBookmarkPlus } from "react-icons/ci";

// Define the Movie interface for better type safety
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  popularity:number;
}

const Content4: React.FC = () => {
  const { data, fetchMovies } = useGlobalContext();
  const { movie: globalMovies } = useGlobalContext();
  
  const [localData, setLocalData] = useState<Movie[]>([]);
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
    const updatedData = localData.map((movie) => {
      if (movie.id === movieId) {
        return {
          ...movie,
          vote_count: movie.vote_count + 1,
        };
      }
      return movie;
    });
    setLocalData(updatedData);
    console.log(`Rated movie ID ${movieId} with rating ${rate}`);
  };

  // Fetch movies only once when the component mounts
  useEffect(() => {
    if (data.length === 0) {
      fetchMovies();
    }
  }, [fetchMovies, data.length]);

  // Update local data when global data changes
  useEffect(() => {
    setLocalData(globalMovies);
  }, [globalMovies]);

  // Sort movies by vote_average in descending order
  const fanFav = [...localData]
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 10);

  return (
    <>
      <div className="wrapper">
        <div className="my-4 p-4">
          <h2 className="text-white flex items-center gap-2 font-extrabold text-xl">
            <span className="text-yellow-500 font-extrabold text-xl">|</span>Fan favorites
            <Link href="/">
              <span>
                <IoIosArrowForward color="white" fontSize="1.5rem" />
              </span>
            </Link>
          </h2>
          <div className="flex justify-between">
            <Carousel showArrows={true} showThumbs={false} showIndicators={false} className="w-full">
              {/* Render the carousel groups */}
              <div className="bg-black flex">
                {/* Render the top 5 movie data */}
                {fanFav.map((movie) => (
                     
                  <div key={movie.id} className="carousel-item relative flex flex-col items-center p-4 w-2/5">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="w-48 h-64"
                    />
                    <Link href="/watchlist"><CiBookmarkPlus className="absolute left-2 top-2.5" color="white" fontSize="2.5em" /></Link>
                    <div className="flex flex-col w-full bg-slate-900">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <FaStar color="yellow" fontSize="1.5rem" />
                          <span className="text-white">{movie.vote_average.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center ml-2">
                          <Rating onClick={(rate: number) => handleRating(rate, movie.id)} size={27} initialValue={0} iconsCount={1} />
                          <span className="text-white">{movie.vote_count}</span>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold text-white">{movie.title}</h2>
                      <button className="bg-slate-800 text-blue-700 font-bold px-4 py-2 rounded-md mt-2 w-full md:w-auto">Watch options</button>
                      <Link href="/">
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center cursor-pointer">
                            <FaPlay color="white" />
                            <span className="text-white ml-2 font-bold">Trailer</span>
                          </div>
                          <MdReadMore color="white" fontSize="2rem" />
                        </div>
                      </Link>
                    </div>
                  </div>
                   ))}
                  </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content4;
