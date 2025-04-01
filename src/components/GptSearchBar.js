import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useGptMovieSearch from "./hooks/useGptMovieSearch";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);
  const { searchMovies, isLoading, errorMessage } = useGptMovieSearch();

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;
    if (!query) return;
    await searchMovies(query);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="items-center bg-black justify-center w-1/2 p-3 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-2 py-3 bg-white mr-2 rounded-md col-span-10"
          placeholder={lang[langKey]?.gtpSearchPlaceholder}
        />
        <button
          className="py-3 px-4 bg-red-700 text-white rounded-md col-span-2 cursor-pointer"
          onClick={handleGptSearchClick}
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : lang[langKey]?.search}
        </button>
        {errorMessage && <p className="col-span-12 pt-2 text-red-500">{errorMessage}</p> }
      </form>
    </div>
  );
};

export default GptSearchBar;
