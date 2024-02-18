import play from "/img/play.png";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import {
  loadGenresActionCreator,
  loadMoviesActionCreator,
} from "../../store/netflix/netflixSlice";
import { useAppDispatch } from "../../store";
import CardSlider from "../../components/CardSlider/CardSlider";
import useNetflixApi from "../../hooks/useNetflixApi";
import "./MoviesPage.css";
import Button from "../../components/Button/Button";

const MoviesPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const [filterMovies, setFilterMovies] = useState<string | null>(null);
  const { getGenres, getMovies } = useNetflixApi();

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const movies = await getMovies(currentPage, filterMovies!);

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadMoviesActionCreator(movies!));
      })();
    }
  }, [dispatch, getGenres, user, getMovies, currentPage, filterMovies]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {user && <Navbar isScrolled={isScrolled} />}
      <div className="wrap-movies-container">
        <article className="title-wrapper">
          <div className="button-container__movies">
            <NavLink className="button-flex__movies" to={paths.player}>
              <img src={play} alt="play icon" width="30" height="30" />
              Play
            </NavLink>
          </div>
        </article>
      </div>
      <div className="search-container">
        <form
          onSubmit={handleSearch}
          className={`search ${showSearch ? "show-search" : ""}`}
        >
          <Button
            className="search-button"
            onFocus={() => setShowSearch(true)}
            onMouseLeave={() => {
              if (inputHover) setShowSearch(false);
            }}
          >
            <img src="img/lupa.png" alt="lupa icon" width={24} height={24} />
          </Button>
          <input
            className="search-input"
            type="text"
            placeholder="Search Movie..."
            onChange={(e) => {
              setFilterMovies(e.target.value);
            }}
            onMouseEnter={() => {
              setInputHover(true);
            }}
            onMouseLeave={() => {
              setInputHover(false);
            }}
            onBlur={() => {
              setShowSearch(false);
              setInputHover(false);
            }}
          />
        </form>
      </div>
      <CardSlider />
      <div className="pagination">
        <button
          className="pagination__last"
          onClick={() => {
            setCurrentPage(currentPage - 1), window.scrollTo(0, 500);
          }}
        >
          LAST
        </button>
        <button
          className="pagination__next"
          onClick={() => {
            setCurrentPage(currentPage + 1), window.scrollTo(0, 500);
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
};

export default MoviesPage;
