"use client";
import {createContext,useContext,Dispatch,SetStateAction,useState,} from "react";

type DataType = {
  id: number;
  title: string;
  poster_path: string;
  vote_count:number;
  vote_average:number;
};

interface ContextProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  movie: DataType[];
  setMovie: Dispatch<SetStateAction<DataType[]>>;
  data:DataType[];
  setData:Dispatch<SetStateAction<DataType[]>>;
  fetchMovies: () => Promise<void>;
}

const GlobalContext = createContext<ContextProps>({
  id: "",
  setId: (): string => "",
  movie: [],
  setMovie: (): DataType[] => [],
  data:[],
  setData:():DataType[] => [],
  fetchMovies: async () => {},
});

const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || "";

export const GlobalContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [movie, setMovie] = useState<[] | DataType[]>([]);
  const [data, setData] = useState<[] | DataType[]>([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data.results);
      setData(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <GlobalContext.Provider value={{ id, setId, movie, setMovie, data,setData , fetchMovies }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
