import "./Homepage.css";
import play from "/img/play.png";
import info from "/img/info.svg";
import logostrangerthings from "/img/logostrangerthings.png";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";

const Homepage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);

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
              <img src={play} alt="play icon" />
              Play
            </NavLink>
            <NavLink className="button-flex" to={paths.home}>
              <img src={info} alt="info icon" />
              More info
            </NavLink>
          </div>
        </article>
      </div>
    </>
  );
};

export default Homepage;
