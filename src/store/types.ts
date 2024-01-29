import { ApiMovieType, Movie } from "../types";

export interface NetflixState {
  movies: Movie[];
  genresLoaded: boolean;
  genres: [];
  selectedMovie?: ApiMovieType;
}
