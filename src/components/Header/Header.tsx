import logo from "/img/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import paths from "../../paths/paths";

const Header = (): React.ReactElement => {
  // const logout = async () => {
  //   await signOut(auth);
  //   navigate("/home");
  // };

  return (
    <header className="header">
      <div className="title-container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo netflix" />
        </div>
        <div className="sign-container">
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
