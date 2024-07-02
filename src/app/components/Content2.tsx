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

// Define the Movie interface for better type safety
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const MovieComponent: React.FC = () => {
 
  const { data, fetchMovies } = useGlobalContext();
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
    setRatedMovies(prevRatedMovies => [...prevRatedMovies, movieId]);

    // Update the vote count in the local data
    const updatedData = localData.map(movie => {
      if (movie.id === movieId) {
        return {
          ...movie,
          vote_count: movie.vote_count + 1
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
    setLocalData(data);
  }, [data]);

  // Create an array with repeated data for carousel items
  const repeatedData = Array(5).fill(localData.slice(0, 5)).flat();

  return (
    <div className="wrapper">
      <h1 className="text-yellow-500 text-3xl font-extrabold">What to watch</h1>

      <div className="my-4 p-4">
        <h2 className="text-white flex items-center gap-2 font-extrabold text-xl">
          <span className="text-yellow-500 font-extrabold text-xl">|</span>Top picks
          <Link href="/">
            <span>
              <IoIosArrowForward color="white" fontSize="1.5rem" />
            </span>
          </Link>
        </h2>
        <h3 className="text-white my-2">TV shows and movies just for you</h3>
        <div className="flex justify-between">
          <Carousel showArrows={true} showThumbs={false} showIndicators={false} className="w-full">
            {/* Render the carousel groups */}
            {[...Array(20)].map((_, i) => (
              <div className="bg-black flex" key={`carousel-group-${i}`}>
                {/* Render the repeated movie data */}
                {repeatedData.map((movie, index) => (
                  <div key={`${movie.id}-${i}-${index}`} className="carousel-item relative flex flex-col items-center p-4 w-2/5">
                    <Image
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="w-48 h-64"
                    />
                    <div className="flex flex-col w-full bg-slate-900">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <FaStar color="yellow" fontSize="1.5rem" />
                          <span className="text-white">{movie.vote_average.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center ml-2">
                          <Rating onClick={(rate: number) => handleRating(rate, movie.id)} initialValue={0} iconsCount={1} />
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
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
