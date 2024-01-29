import { Movie } from "../types";

export interface NetflixState {
  movies: Movie[];
  genresLoaded: boolean;
  genres: [];
  selectedPlayer?: Movie;
}
