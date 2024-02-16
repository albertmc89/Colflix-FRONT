import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NetflixState } from "../types";
import { ApiMovieType, ApiTrailersType, Genre, Movie, Tv } from "../../types";

const initialNetflixState: NetflixState = {
  movies: [],
  genresLoaded: false,
  genres: [],
  tvshows: [],
  trendingMovies: [],
  trendingTvShows: [],
  topMovies: [],
  upcomingMovies: [],
  topTvShows: [],
  searchTerm: "",
};

const netflixSlice = createSlice({
  name: "netflix",
  initialState: initialNetflixState,
  reducers: {
    loadGenres: (
      currentGenresState,
      action: PayloadAction<Genre[]>,
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
    loadTrendingMovies: (
      currentMoviesState,
      action: PayloadAction<Movie[]>,
    ): NetflixState => ({
      ...currentMoviesState,
      trendingMovies: action.payload,
    }),
    loadTopMovies: (
      currentMoviesState,
      action: PayloadAction<Movie[]>,
    ): NetflixState => ({
      ...currentMoviesState,
      topMovies: action.payload,
    }),
    loadUpcomingMovies: (
      currentMoviesState,
      action: PayloadAction<Movie[]>,
    ): NetflixState => ({
      ...currentMoviesState,
      upcomingMovies: action.payload,
    }),
    loadTvShows: (
      currentTvState,
      action: PayloadAction<Tv[]>,
    ): NetflixState => ({
      ...currentTvState,
      tvshows: action.payload,
    }),
    loadTrendingTvShows: (
      currentTvState,
      action: PayloadAction<Tv[]>,
    ): NetflixState => ({
      ...currentTvState,
      trendingTvShows: action.payload,
    }),
    loadTopTvShows: (
      currentTvState,
      action: PayloadAction<Tv[]>,
    ): NetflixState => ({
      ...currentTvState,
      topTvShows: action.payload,
    }),
    loadSelectedMovie: (
      currentMoviesState: NetflixState,
      action: PayloadAction<ApiMovieType>,
    ): NetflixState => ({
      ...currentMoviesState,
      selectedMovie: action.payload,
    }),
    toggleMovie: (
      currentMoviesState,
      action: PayloadAction<ApiMovieType>,
    ): NetflixState => ({
      ...currentMoviesState,
      selectedMovie: action.payload,
      movies: currentMoviesState.movies.map((movie) =>
        movie.id === action.payload.id ? action.payload : movie,
      ),
    }),
    loadTrailerMovie: (
      currentMoviesState: NetflixState,
      action: PayloadAction<ApiTrailersType>,
    ): NetflixState => ({
      ...currentMoviesState,
      trailerMovie: action.payload,
    }),
    changeSearchTerm: (
      currentMoviesState: NetflixState,
      action: PayloadAction<string>,
    ): NetflixState => ({
      ...currentMoviesState,
      searchTerm: action.payload,
    }),
  },
});

export const netflixReducer = netflixSlice.reducer;
export const {
  loadGenres: loadGenresActionCreator,
  loadMovies: loadMoviesActionCreator,
  loadTvShows: loadloadTvShowsActionCreator,
  loadSelectedMovie: loadSelectedMovieActionCreator,
  loadTrendingMovies: loadTrendingMoviesActionCreator,
  loadTrendingTvShows: loadTrendingTvShowsActionCreator,
  loadTopMovies: loadTopMoviesActionCreator,
  loadUpcomingMovies: loadUpcomingMoviesActionCreator,
  loadTopTvShows: loadTopTvShowActionCreator,
  toggleMovie: loadToggleMovieActionCreator,
  loadTrailerMovie: loadTrailerMovieActionCreator,
  changeSearchTerm: loadchangeSearchTermActionCreator,
} = netflixSlice.actions;
