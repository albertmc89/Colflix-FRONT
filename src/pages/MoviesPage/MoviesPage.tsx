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

const MoviesPage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { getGenres, getMovies } = useNetflixApi();

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const movies = await getMovies(currentPage);

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadMoviesActionCreator(movies!));
      })();
    }
  }, [dispatch, getGenres, user, getMovies, currentPage]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
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
