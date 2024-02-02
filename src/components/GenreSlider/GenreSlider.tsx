import { useAppSelector } from "../../store";
import "./GenreSlider.css";

const SelectGenre = (): React.ReactElement => {
  const genres = useAppSelector((state) => state.netflixState.genres);

  return (
    <div className="genres">
      <select className="genres__list">
        {genres.map((genre) => (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGenre;
