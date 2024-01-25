/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from "../../store";
import MovieCard from "../MovieCard/MovieCard";
import "./CardSlider.css";

const CardSlider = (): React.ReactElement => {
  const movies = useAppSelector((state) => state.netflixState.movies);

  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default CardSlider;
