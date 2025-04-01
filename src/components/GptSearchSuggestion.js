import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const { movies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return;

  return (
    <div className="bg-black opacity-90 h-screen mx-6">
      {movieNames && (
        <p className="text-white px-6 py-5">Search Result: {movieNames}</p>
      )}
      {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movies[index]}
          />
        ))}
    </div>
  );
};

export default GptSearchSuggestion;
