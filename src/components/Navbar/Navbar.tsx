import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import paths from "../../paths/paths";
import { useState } from "react";
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

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState<boolean>(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <div className="search-logout-container">
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
              placeholder="Search"
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
          <Button actionOnClick={logout} className="logout-button">
            <img
              src="img/logout.png"
              alt="logout icon"
              width={28}
              height={28}
            />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
