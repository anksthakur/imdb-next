"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState, useEffect, ReactNode } from "react";
import axios from 'axios';

type DataType = {
  id: number;
  title: string;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  popularity: number;
};

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

interface ContextProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  movie: DataType[];
  setMovie: Dispatch<SetStateAction<DataType[]>>;
  data: DataType[];
  setData: Dispatch<SetStateAction<DataType[]>>;
  fetchMovies: () => Promise<void>;
  watchlist: Movie[];
  addToWatchlist: (movie: Movie) => void;
  removeFromWatchlist: (id: number) => void;
}

const GlobalContext = createContext<ContextProps>({
  id: "",
  setId: () => {},
  movie: [],
  setMovie: () => {},
  data: [],
  setData: () => {},
  fetchMovies: async () => {},
  watchlist: [],
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
});

const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || "";

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [id, setId] = useState<string>("");
  const [movie, setMovie] = useState<DataType[]>([]);
  const [data, setData] = useState<DataType[]>([]);
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    if (typeof window !== "undefined") {
      const storedWatchlist = localStorage.getItem('watchlist');
      return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    }
    return [];
  });

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
        params: {
          api_key: API_KEY,
        }
      });
      setMovie(response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const addToWatchlist = (movie: Movie) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = [...prevWatchlist, movie];
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = prevWatchlist.filter((movie) => movie.id !== id);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      return updatedWatchlist;
    });
  };

  return (
    <GlobalContext.Provider value={{ id, setId, movie, setMovie, data, setData, fetchMovies, watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
