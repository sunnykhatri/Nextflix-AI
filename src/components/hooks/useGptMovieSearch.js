import Together from "together-ai";
import { API_OPTIONS, TOGATHER_AI_KEY } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../../utils/gptSlice";
import { useState } from "react";

const useGptMovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const together = new Together({ apiKey: TOGATHER_AI_KEY });
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();

      return json.results;
    } catch (error) {
      setErrorMessage("Error during search movie from tmdb:", error);
      console.log("Error during search movie from tmdb:" + error);
    }
  };

  const searchMovies = async (query) => {
    if (isLoading) return;
    setIsLoading(true);

    const gptQuery = `Act as a movie recommendation system and suggest some movies for query : ${query}. Only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Sikandar, Sholay, Dhoom, Don, Gadar`;

    try {
      const response = await together.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
      });

      const gptMovies = response?.choices[0]?.message?.content.split(",");
      const promisedArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promisedArray);

      dispatch(
        addGptMovies({ movieNames: gptMovies, movieResults: tmdbResults })
      );
      return tmdbResults;
    } catch (error) {
      console.log("Error during GPT search:", error);
      setErrorMessage("Error during GPT search:" + error);
    } finally {
      setIsLoading(false);
    }
  };

  return { searchMovies, isLoading, errorMessage };
};

export default useGptMovieSearch;
