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
      <section className="list-section">
        <GenreSlider />
        {pathname === paths.movies ? (
          <ul className="movies-list">
            {movies.map((movie) => (
              <li key={movie.id}>
                <MovieCard movie={movie} />
              </li>
            ))}
          </ul>
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
