import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const nowPlayingMovies = movies?.nowPlayingMovies;
  const popularMovies = movies?.popularMovies;
  const upcomingMovies = movies?.upcomingMovies;
  const topRatedMovies = movies?.topRatedMovies;

  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="-mt-40 pl-15 relative z-10">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
