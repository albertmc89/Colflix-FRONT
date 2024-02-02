/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.css";

const Slider = (): React.ReactElement => {
  const movies = useAppSelector((state) => state.netflixState.movies);
  const tvshows = useAppSelector((state) => state.netflixState.tvshows);
  const trendingMovies = useAppSelector(
    (state) => state.netflixState.trendingMovies,
  );
  const trendingTvShows = useAppSelector(
    (state) => state.netflixState.trendingTvShows,
  );

  return (
    <>
      <section className="list-section">
        <h2 className="section__title"> TRENDING MOVIES</h2>
        <ul className="movies-list">
          {trendingMovies.map((trend) => (
            <li key={trend.id}>
              <MovieCard movie={trend} />
            </li>
          ))}
        </ul>
        <h2 className="section__title">MOVIES</h2>
        <ul className="movies-list">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
        <h2 className="section__title">TRENDING TV SHOWS</h2>
        <ul className="tv-list">
          {trendingTvShows.map((trendtv) => (
            <li key={trendtv.id}>
              <MovieCard movie={trendtv} />
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
      </section>
    </>
  );
};

export default Slider;
