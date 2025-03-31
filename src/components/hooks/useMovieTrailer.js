import React, { useEffect } from "react";
import { API_OPTIONS, GET_MOVIE_DETAILS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    //const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en_US` ,API_OPTIONS);
    //const json = await data.json();
    const json = GET_MOVIE_DETAILS;
    const filterTrailer = json?.filter((video) => video.type === "Trailer");
    //const filterTrailer = json?.results?.filter((video) => video.type === "Trailer" );
    //console.log(json);
    const trailer = filterTrailer.length === 0 ? filterTrailer[0] : json[0]; //json?.results[0]
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
