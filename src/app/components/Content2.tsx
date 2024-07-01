"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../Context/store";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const MovieComponent = () => {
  const { movie, fetchMovies } = useGlobalContext();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="text-yellow-500 text-3xl font-extrabold">Featured today</h1>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        className="w-9/12 h-[472px]"
      >
        {movie.map((movie) => (
          <div key={movie.id} className="carousel-item relative">
            <Image
              style={{ height: "472px" }}
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              width={400}
              height={700}
            />
            <h2 className="text-lg font-bold text-white ml-2">{movie.title}</h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieComponent;
