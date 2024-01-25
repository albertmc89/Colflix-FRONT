import { NavLink, useNavigate } from "react-router-dom";
import paths from "../../paths/paths";
import "./Moviecard.css";
import { Movie } from "../../types";
import { useState } from "react";
import favoriteEmptyIcon from "/img/favoriteEmptyIcon.png";
import play2 from "/img/play2.png";
import strangerthingsVideo from "/video/strangerthingsVideo.mp4";
import info from "/img/info.png";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({
  movie: { title, poster_path },
}: MovieCardProps): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <article
      className="movie"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="movie__picture"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={`${title}`}
      />
      {isHovered && (
        <div className="hover">
          <NavLink className="button-movie" to={paths.player}>
            <div className="image-video-container">
              <img
                className="movie__picture"
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`Moment of a fooball game in which ${title} plays with his team`}
              />
              <video
                className="movie__video-display"
                src={strangerthingsVideo}
                autoPlay
                loop
                muted
                onClick={() => navigate(paths.player)}
              />
            </div>
          </NavLink>
          <div className="movie__content">
            <div className="movie__data-container">
              <NavLink to={paths.player}>
                <h2 className="movie__name">{title}</h2>
              </NavLink>
              <div className="movie__icons">
                <NavLink className="button-hover" to={paths.player}>
                  <img src={play2} alt="play icon" width="30" height="30" />
                </NavLink>
                <img
                  className={"favorite-icon"}
                  src={favoriteEmptyIcon}
                  alt={"favorite"}
                  width="30"
                  height="30"
                />
                <NavLink className="button-hover" to={paths.player}>
                  <img src={info} alt="play icon" width="30" height="30" />
                </NavLink>
              </div>

              {/* <ul className="player__data-list">
                <li className="player__data-detail">
                  <span className="player__data-label"></span>
                  {title}
                </li>
                <li className="player__data">
                  <span className="player__data-label"></span>
                  {title}
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default MovieCard;
