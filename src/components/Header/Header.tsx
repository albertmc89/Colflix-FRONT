import logo from "/img/logo.png";
import "./Header.css";
import Button from "../Button/Button";

const Header = (): React.ReactElement => {
  // const logout = async () => {
  //   await signOut(auth);
  //   navigate("/home");
  // };

  return (
    <header className="header">
      <div className="title-container">
        <img className="logo" src={logo} alt="logo netflix" />
        <div className="sign-container">
          <Button className="button--solid">Log In</Button>
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
