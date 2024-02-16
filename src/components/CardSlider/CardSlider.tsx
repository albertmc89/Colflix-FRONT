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

  return (
    <>
      {pathname === paths.home ? (
        <section className="list-section">
          <GenreSlider />
          {pathname === paths.movies ? (
            <>
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
            <>
              <h2 className="section__title"> TV SHOWS</h2>
              <ul className="movies-list">
                {tvshows.map((tvshow) => (
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
          <GenreSlider />
          {pathname === paths.movies ? (
            <>
              <h2 className="section__title"> MOVIES</h2>
              <ul className="page-list">
                {movies.map((movie) => (
                  <li key={movie.id}>
                    <MovieCard movie={movie} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <h2 className="section__title"> TV SHOWS</h2>
              <ul className="page-list">
                {tvshows.map((tvshow) => (
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
