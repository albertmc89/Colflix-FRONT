import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import paths from "../../paths/paths";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import logonetflix from "/img/logonetflix.svg";

interface NavProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavProps): React.ReactElement => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/signup");
  };

  return (
    <>
      <nav className={`navigation ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <img className="logo" src={logonetflix} alt="logo netflix" />
        </div>
        <ul className="navigation__list">
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.root
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.tv
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/tv"
            >
              TV
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.movies
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                pathname === paths.mylist
                  ? "navigation-list__active"
                  : "navigation-list__inactive"
              }
              to="/mylist"
            >
              My list
            </NavLink>
          </li>
        </ul>
        <Button actionOnClick={logout} className="logout-button">
          <img src="img/logout.png" alt="logout icon" width={28} height={28} />
        </Button>
      </nav>
    </>
  );
};

export default Navigation;
