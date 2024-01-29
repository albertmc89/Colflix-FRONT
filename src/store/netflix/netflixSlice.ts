import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NetflixState } from "../types";
import { Movie } from "../../types";

const initialNetflixState: NetflixState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

const netflixSlice = createSlice({
  name: "netflix",
  initialState: initialNetflixState,
  reducers: {
    loadGenres: (
      currentGenresState,
      action: PayloadAction<[]>,
    ): NetflixState => ({
      ...currentGenresState,
      genresLoaded: true,
      genres: action.payload,
    }),
    loadMovies: (
      currentMoviesState,
      action: PayloadAction<Movie[]>,
    ): NetflixState => ({
      ...currentMoviesState,
      movies: action.payload,
    }),
    loadSelectedMovie: (
      currentMoviesState: NetflixState,
      action: PayloadAction<Movie>,
    ): NetflixState => ({
      ...currentMoviesState,
      selectedPlayer: action.payload,
    }),
  },
});

export const netflixReducer = netflixSlice.reducer;
export const {
  loadGenres: loadGenresActionCreator,
  loadMovies: loadMoviesActionCreator,
  loadSelectedMovie: loadSelectedMovieActionCreator,
} = netflixSlice.actions;
