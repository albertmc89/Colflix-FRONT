export interface ApiMovieType {
  id: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  budget: number;
  homepage: string;
  imdb_id: string;
  runtime: number;
  status: string;
  revenue: number;
}

export interface Movie {
  id: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
}

export interface ApiMovies {
  results: Movie[];
}

export interface ApiTvType {
  results: [
    id: number,
    name: string,
    backdrop_path: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
  ];
}

export interface Tv {
  id: string;
  name: string;
  backdrop_path: string;
  first_air_date: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ApiTv {
  results: Tv[];
}
