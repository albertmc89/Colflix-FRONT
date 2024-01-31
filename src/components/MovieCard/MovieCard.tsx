import { NavLink, useLocation } from "react-router-dom";
import paths from "../../paths/paths";
import "./Moviecard.css";
import { Movie } from "../../types";
import { useState } from "react";
import favoriteEmptyIcon from "/img/favoriteEmptyIcon.png";
import play2 from "/img/play2.png";
import info from "/img/info.png";
import star from "/img/star.png";
import eye from "/img/eye.png";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({
  movie: {
    poster_path,
    vote_average,
    popularity,
    release_date,
    title,
    id,
    name,
  },
}: MovieCardProps): React.ReactElement => {
  const [isHovered, setIsHovered] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
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
                <div className="movie__data">
                  <div className="movie__score">
                    <span>{vote_average}</span>
                    <img
                      src={star}
                      alt="star for qualifications"
                      width="15"
                      height="15"
                    />
                  </div>
                  <div className="movie__views">
                    <span>{popularity}</span>
                    <img
                      src={eye}
                      alt="eye icon for views"
                      width="12"
                      height="12"
                    />
                  </div>
                  <span className="movie__date">{release_date}</span>
                </div>
              </div>
            </NavLink>
            <div className="movie__content">
              <div className="movie__data-container">
                <NavLink to={paths.player}>
                  {pathname === paths.home ? (
                    <h2 className="movie__name">{title}</h2>
                  ) : (
                    <h2 className="movie__name">{name}</h2>
                  )}
                </NavLink>
              </div>
              <div className="movie__icons">
                <NavLink className="button-hover" to={paths.player}>
                  <img src={play2} alt="play icon" width="25" height="25" />
                </NavLink>
                <img
                  className={"favorite-icon"}
                  src={favoriteEmptyIcon}
                  alt={"favorite"}
                  width="25"
                  height="25"
                />
                <NavLink className="button-hover" to={`${paths.home}/${id}`}>
                  <img src={info} alt="play icon" width="25" height="25" />
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export default MovieCard;
