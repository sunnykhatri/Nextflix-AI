import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    try {
      //   const data = await fetch(
      //     "https://api.themoviedb.org/3/movie/now_playing?page=1",
      //     API_OPTIONS
      //   );
      //   const json = await data.json();
      //console.log(json.results);
      dispatch(addNowPlayingMovies(NOW_PLAYING_MOVIES));
    } catch (error) {
      console.log("We are expieriencing issue, More details: " + error.message);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
