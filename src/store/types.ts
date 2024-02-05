import { ApiMovieType, Genre, Movie, Tv } from "../types";

export interface NetflixState {
  movies: Movie[];
  genresLoaded: boolean;
  genres: Genre[];
  selectedMovie?: ApiMovieType;
  tvshows: Tv[];
  trendingMovies: Movie[];
  trendingTvShows: Tv[];
  topMovies: Movie[];
  upcomingMovies: Movie[];
}
