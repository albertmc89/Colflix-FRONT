/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./CardSlider.css";
import GenreSlider from "../GenreSlider/GenreSlider";

const CardSlider = (): React.ReactElement => {
  const { pathname } = useLocation();
  const movies = useAppSelector((state) => state.netflixState.movies);
  const tvshows = useAppSelector((state) => state.netflixState.tvshows);
  const trendingMovies = useAppSelector(
    (state) => state.netflixState.trendingMovies,
  );
  const topMovies = useAppSelector((state) => state.netflixState.topMovies);
  const upcomingMovies = useAppSelector(
    (state) => state.netflixState.upcomingMovies,
  );

  return (
    <>
      <section className="list-section">
        <GenreSlider />
        {pathname === paths.movies ? (
          <>
            <h2 className="section__title"> TRENDING MOVIES</h2>
            <ul className="movies-list">
              {trendingMovies.map((trend) => (
                <li key={trend.id}>
                  <MovieCard movie={trend} />
                </li>
              ))}
            </ul>
            <h2 className="section__title"> TOP MOVIES</h2>
            <ul className="movies-list">
              {topMovies.map((top) => (
                <li key={top.id}>
                  <MovieCard movie={top} />
                </li>
              ))}
            </ul>
            <h2 className="section__title"> UPCOMING MOVIES</h2>
            <ul className="movies-list">
              {upcomingMovies.map((upcoming) => (
                <li key={upcoming.id}>
                  <MovieCard movie={upcoming} />
                </li>
              ))}
            </ul>
            <h2 className="section__title"> MOVIES</h2>
            <ul className="movies-list">
              {movies.map((movie) => (
                <li key={movie.id}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <ul className="movies-list">
            {tvshows.map((tvshow) => (
              <li key={tvshow.id}>
                <MovieCard movie={tvshow} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default CardSlider;
