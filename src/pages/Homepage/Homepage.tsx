import "./Homepage.css";
import play from "/img/play.png";
import logostrangerthings from "/img/logostrangerthings.png";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import {
  loadGenresActionCreator,
  loadTopMoviesActionCreator,
  loadTopTvShowActionCreator,
  loadTrendingMoviesActionCreator,
  loadTrendingTvShowsActionCreator,
  loadUpcomingMoviesActionCreator,
} from "../../store/netflix/netflixSlice";
import { useAppDispatch } from "../../store";
import useNetflixApi from "../../hooks/useNetflixApi";
import Slider from "../../components/Slider/Slider";

const Homepage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const {
    getGenres,
    getTopMovies,
    getTopTv,
    getTrendingMovies,
    getTrendingTv,
    getUpcomingMovies,
  } = useNetflixApi();

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const trendingMovies = await getTrendingMovies();
        const upComingMovies = await getUpcomingMovies();

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadTrendingMoviesActionCreator(trendingMovies!));
        dispatch(loadUpcomingMoviesActionCreator(upComingMovies!));
      })();
    }
  }, [dispatch, user, getTrendingMovies, getGenres, getUpcomingMovies]);

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const trendingTvShows = await getTrendingTv();

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadTrendingTvShowsActionCreator(trendingTvShows!));
      })();
    }
  }, [dispatch, user, getTrendingTv, getGenres]);

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const topMovies = await getTopMovies();

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadTopMoviesActionCreator(topMovies!));
      })();
    }
  }, [dispatch, getGenres, user, getTopMovies]);

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const topTvShows = await getTopTv();

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadTopTvShowActionCreator(topTvShows!));
      })();
    }
  }, [dispatch, getGenres, user, getTopTv]);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      {user && <Navbar isScrolled={isScrolled} />}
      <div className="wrap-home-container">
        <article className="title-wrapper">
          <div className="logo-series">
            <img src={logostrangerthings} alt="logo netflix" />
          </div>
          <div className="button-container">
            <NavLink className="button-flex" to={paths.player}>
              <img src={play} alt="play icon" width="30" height="30" />
              Play
            </NavLink>
          </div>
        </article>
      </div>
      <Slider />
    </>
  );
};

export default Homepage;
