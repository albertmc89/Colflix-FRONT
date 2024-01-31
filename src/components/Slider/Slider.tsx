/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.css";

const Slider = (): React.ReactElement => {
  const movies = useAppSelector((state) => state.netflixState.movies);
  const tvshows = useAppSelector((state) => state.netflixState.tvshows);

  return (
    <>
      <h2 className="section__title">MOVIES</h2>
      <ul className="movies-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
      <h2 className="section__title">TV SHOWS</h2>
      <ul className="tv-list">
        {tvshows.map((tvshow) => (
          <li key={tvshow.id}>
            <MovieCard movie={tvshow} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Slider;
