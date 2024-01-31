import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NetflixState } from "../types";
import { ApiMovieType, Movie, Tv } from "../../types";

const initialNetflixState: NetflixState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  tvshows: [],
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
    loadTvShows: (
      currentTvState,
      action: PayloadAction<Tv[]>,
    ): NetflixState => ({
      ...currentTvState,
      tvshows: action.payload,
    }),
    loadSelectedMovie: (
      currentMoviesState: NetflixState,
      action: PayloadAction<ApiMovieType>,
    ): NetflixState => ({
      ...currentMoviesState,
      selectedMovie: action.payload,
    }),
  },
});

export const netflixReducer = netflixSlice.reducer;
export const {
  loadGenres: loadGenresActionCreator,
  loadMovies: loadMoviesActionCreator,
  loadTvShows: loadloadTvShowsActionCreator,
  loadSelectedMovie: loadSelectedMovieActionCreator,
} = netflixSlice.actions;
