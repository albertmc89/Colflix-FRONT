import play from "/img/play.png";
import info from "/img/info.png";
import logostrangerthings from "/img/logostrangerthings.png";
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

const Tv = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const { getGenres, getTv } = useNetflixApi();

  useEffect(() => {
    if (user) {
      (async () => {
        const genres = await getGenres();
        const tv = await getTv();

        dispatch(loadGenresActionCreator(genres!));
        dispatch(loadMoviesActionCreator(tv!));
      })();
    }
  }, [dispatch, getGenres, user, getTv]);

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
            <NavLink className="button-flex" to={paths.tv}>
              <img src={info} alt="info icon" width="30" height="30" />
              More info
            </NavLink>
          </div>
        </article>
      </div>
      <CardSlider />
    </>
  );
};

export default Tv;
