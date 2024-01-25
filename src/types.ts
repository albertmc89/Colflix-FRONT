export interface ApiMovieType {
  results: [
    id: number,
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

export interface Movie {
  id: number;
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
}

export interface ApiMovies {
  results: Movie[];
}
// export interface Movie extends Omit<ApiMovie, "_id"> {
//   id: number;
// }
