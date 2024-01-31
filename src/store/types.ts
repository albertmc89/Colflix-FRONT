import { ApiMovieType, Movie, Tv } from "../types";

export interface NetflixState {
  movies: Movie[];
  genresLoaded: boolean;
  genres: [];
  selectedMovie?: ApiMovieType;
  tvshows: Tv[];
}
