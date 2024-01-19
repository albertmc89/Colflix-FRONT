import "./Homepage.css";
import logo from "/img/logo.png";
import play from "/img/play.png";
import info from "/img/info.svg";
import logostrangerthings from "/img/logostrangerthings.png";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import Button from "../../components/Button/Button";

const Homepage = (): React.ReactElement => {
  const [user] = useAuthState(auth);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <div className="wrap-home-container">
        <div className="nav-container">
          {user && <Navbar isScrolled={isScrolled} />}
          <img className="logo" src={logo} alt="logo netflix" />
        </div>
        <article className="title-wrapper">
          <div className="logo-series">
            <img src={logostrangerthings} alt="logo netflix" />
          </div>

          <div className="button-container">
            <Button className="button-flex">
              <img src={play} alt="play icon" />
              Play
            </Button>
            <Button className="button-flex">
              <img src={info} alt="info icon" />
              More info
            </Button>
          </div>
        </article>
      </div>
    </>
  );
};

export default Homepage;
