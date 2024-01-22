import "./Header.css";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";
import netflixN from "/img/netflixN.png";

const Header = (): React.ReactElement => {
  // const logout = async () => {
  //   await signOut(auth);
  //   navigate("/home");
  // };

  return (
    <header className="header">
      <div className="title-container">
        <div className="sign-container">
          <img src={netflixN} alt="" />
          <NavLink className="login" title="Log in" to={paths.login}>
            Log In
          </NavLink>
          <select className="form__select" id="language">
            <option value="Español">ES</option>
            <option value="English">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
