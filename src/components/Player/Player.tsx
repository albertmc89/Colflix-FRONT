import { NavLink } from "react-router-dom";
import back from "/img/back.png";
import paths from "../../paths/paths";
import "./Player.css";

const Player = (): React.ReactElement => {
  return (
    <div className="player">
      <div className="backpage">
        <NavLink to={paths.home}>
          <img src={back} alt="back icon" width={25} height={25} />
        </NavLink>
      </div>
      <video
        src={`https://www.youtube.com/watch?v=`}
        autoPlay
        loop
        controls
        muted
      ></video>
    </div>
  );
};

export default Player;
