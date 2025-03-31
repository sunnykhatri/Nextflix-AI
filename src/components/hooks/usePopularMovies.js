import { useDispatch } from "react-redux";
import { addPopularMovies } from "../../utils/moviesSlice";
import { API_OPTIONS, POPULAR_MOVIES } from "../../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      //const json = POPULAR_MOVIES;
      const movies = json.results;
      dispatch(addPopularMovies(movies));
    } catch (error) {
      console.log("We are expieriencing issue while fetching popular movies, More details: " + error.message);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
