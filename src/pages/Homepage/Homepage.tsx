import "./Homepage.css";
import logo from "/img/logo.png";
import Navbar from "../../components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Homepage = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <div className="wrap-home-container">
      <div className="nav-container">
        {user && <Navbar />}
        <img className="logo" src={logo} alt="logo netflix" />
      </div>
    </div>
  );
};

export default Homepage;
