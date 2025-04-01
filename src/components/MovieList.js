import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-2">
      <h1 className="text-2xl pb-2 block w-full text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex items-center">
          {movies !== null ? <p className="text-white">No matching movie found..</p> : movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;