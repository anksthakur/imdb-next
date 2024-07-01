"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY || '';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

const Content1: React.FC = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [isError, setIsError] = useState<string | undefined>("");

  useEffect(() => {
    const getApiData = async () => {
      try {
        const res = await axios.get<{ results: Movie[] }>(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        setData(res.data.results);
      } catch (error: any) {
        setIsError(error.message);
      }
    };
    
    getApiData();
  }, []);

  return (
    <div className='wrapper'>
      <div className='flex gap-7'>
        {isError && <p>{isError}</p>}
        {data.length > 0 && (
          <Carousel showArrows={true} showThumbs={false} className='w-6/12'>
            {data.map((movie) => (
              <div key={movie.id} className='carousel-item min-h-fit'>
                <div className='bg-white shadow-md rounded overflow-hidden'>
                  <Image className='max-h-96'
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                    width={400}
                    height={600}
                    layout="responsive"
                  />
                  <div className='p-4'>
                    <h2 className='text-lg font-bold'>{movie.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      <div className=' flex flex-col '>
        {data.slice(0, 4).map((movie) => (
          <div key={movie.id} className='flex items-center gap-2 py-2'>
            <Image className='h-24 w-24'
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              width={200}
              height={100}
              alt="IMDB Logo"
            />
            <div className='text-white'>{movie.title}</div>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default Content1;
