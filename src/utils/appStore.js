import gptReducer from "./gptSlice";
import userReducer from "./userSlice"; 
import moviesReducer from "./moviesSlice";
import configReducer from "./configSlice";
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    gpt: gptReducer,
    user: userReducer,
    movies: moviesReducer,
    config: configReducer
  },
});

export default appStore;