"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface MoviePageProps {
  params: {
    id: string;
  };
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MoviePage: React.FC<MoviePageProps> = ({ params }) => {
  const movieId = params.id;
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    if (typeof window !== "undefined") {
      const storedWatchlist = localStorage.getItem('watchlist');
      return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    }
    return [];
  });

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_API_KEY,
        },
      });
      setMovie(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching movie details');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [movieId]);

  const addToWatchlist = (movie: Movie) => {
    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
    const existingMovieIndex = existingWatchlist.findIndex((item: Movie) => item.id === movie.id);

    if (existingMovieIndex !== -1) {
      toast.warning("Movie already added to the watchlist", { position: "top-center", theme: "colored" });
    } else {
      existingWatchlist.push(movie);
      localStorage.setItem("watchlist", JSON.stringify(existingWatchlist));
      setWatchlist(existingWatchlist);
      console.log("movie added", existingWatchlist);
      toast.success("Movie added to watchlist", { position: "top-center", theme: "colored" });
    }
  };

  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movie) {
    return <div className='text-white'>Movie not found</div>;
  }

  return (
    <>
    <div className='bg-white mt-5 py-5 flex justify-center' >
      <div className='wrapper'>
        <div >
          <div>
            <h1 className="font-extrabold text-lg">{movie.title}</h1>
          </div>
          <div className='items-center relative'>
            <Image
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
              className="w-48 h-64"
            />
            <button className='absolute top-0' onClick={() => addToWatchlist(movie)}>
            <CiBookmarkPlus  fontSize="2.5em" />
          </button>
          </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default MoviePage;
