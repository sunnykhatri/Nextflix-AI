import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/moviesSlice";
import { API_OPTIONS, UPCOMING_MOVIES } from "../../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    try {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        //const json = UPCOMING_MOVIES;
        const movies = json.results;
        dispatch(addUpcomingMovies(movies));
    } catch (error) {
      console.log("We are expieriencing issue while fetching upcoming movies, More details: " + error.message);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
