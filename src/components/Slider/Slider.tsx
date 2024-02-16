/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from "react";
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./Slider.css";

const Slider = (): React.ReactElement => {
  const topMovies = useAppSelector((state) => state.netflixState.topMovies);
  const topTvshows = useAppSelector((state) => state.netflixState.topTvShows);
  const upcomingMovies = useAppSelector(
    (state) => state.netflixState.upcomingMovies,
  );
  const trendingMovies = useAppSelector(
    (state) => state.netflixState.trendingMovies,
  );
  const trendingTvShows = useAppSelector(
    (state) => state.netflixState.trendingTvShows,
  );

  const ref = useRef(null);

  return (
    <>
      <section className="list-section">
        <h2 className="section__title"> TRENDING MOVIES</h2>
        <ul className="movies-list" ref={ref}>
          {trendingMovies.map((trend) => (
            <li key={trend.id}>
              <MovieCard movie={trend} />
            </li>
          ))}
        </ul>
        <h2 className="section__title"> UPCOMING MOVIES</h2>
        <ul className="movies-list" ref={ref}>
          {upcomingMovies.map((trend) => (
            <li key={trend.id}>
              <MovieCard movie={trend} />
            </li>
          ))}
        </ul>
        <h2 className="section__title"> TOP MOVIES</h2>
        <ul className="movies-list">
          {topMovies.map((movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
        <h2 className="section__title">TRENDING TV SHOWS</h2>
        <ul className="tv-list" ref={ref}>
          {trendingTvShows.map((trendtv) => (
            <li key={trendtv.id}>
              <MovieCard movie={trendtv} />
            </li>
          ))}
        </ul>
        <h2 className="section__title">TOP TV SHOWS</h2>
        <ul className="tv-list">
          {topTvshows.map((tvshow) => (
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
