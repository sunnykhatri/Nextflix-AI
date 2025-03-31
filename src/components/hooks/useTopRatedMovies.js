import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../../utils/moviesSlice";
import { API_OPTIONS, TOP_RATED } from "../../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      //const json = TOP_RATED;
      const movies = json.results;
      dispatch(addTopRatedMovies(movies));
    } catch (error) {
      console.log("We are expieriencing issue while fetching top rated movies, More details: " + error.message);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
