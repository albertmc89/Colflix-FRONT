/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./CardSlider.css";
import { useState } from "react";

const CardSlider = (): React.ReactElement => {
  const { pathname } = useLocation();
  const movies = useAppSelector((state) => state.netflixState.movies);
  const tvshows = useAppSelector((state) => state.netflixState.tvshows);
  const [filterMovies, setFilterMovies] = useState<string | null>(null);
  const [filterTvShows, setFilterTvShows] = useState<string | null>(null);

  const filteredMovies =
    filterMovies != null && filterMovies.length > 0
      ? movies.filter((movie) => {
          return movie.title.toLowerCase().includes(filterMovies.toLowerCase());
        })
      : movies;

  const filteredTvShows =
    filterTvShows != null && filterTvShows.length > 0
      ? tvshows.filter((movie) => {
          return movie.title
            .toLowerCase()
            .includes(filterTvShows.toLowerCase());
        })
      : tvshows;

  return (
    <>
      {pathname === paths.home ? (
        <section className="list-section">
          {pathname === paths.movies ? (
            <>
              <h2 className="section__title">MOVIES</h2>
              <input
                placeholder="Search Movie..."
                onChange={(e) => {
                  setFilterMovies(e.target.value);
                }}
              />
              <ul className="movies-list">
                {filteredMovies.map((movie) => (
                  <li key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="section__title">TV SHOWS</h2>
              <input
                placeholder="Search Movie..."
                onChange={(e) => {
                  setFilterTvShows(e.target.value);
                }}
              />
              <ul className="movies-list">
                {filteredTvShows.map((tvshow) => (
                  <li key={tvshow.id}>
                    <MovieCard movie={tvshow} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      ) : (
        <section className="list-section">
          {pathname === paths.movies ? (
            <>
              <h2 className="section__title">MOVIES</h2>
              <ul className="page-list">
                {filteredMovies.map((movie) => (
                  <li key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="section__title">TV SHOWS</h2>
              <ul className="page-list">
                {filteredTvShows.map((tvshow) => (
                  <li key={tvshow.id}>
                    <MovieCard movie={tvshow} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}
    </>
  );
};

export default CardSlider;
