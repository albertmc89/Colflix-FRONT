import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { NavLink, useParams } from "react-router-dom";
import useNetflixApi from "../../hooks/useNetflixApi";
import { loadSelectedMovieActionCreator } from "../../store/netflix/netflixSlice";
import "./DetailPage.css";
import back from "/img/back.png";
import hd from "/img/hd.png";
import audiodesc from "/img/audiodesc.png";
import subtitulos from "/img/subtitulos.png";
import play from "/img/play.png";
import download from "/img/download.png";
import paths from "../../paths/paths";
import favoriteEmptyIcon from "/img/favoriteEmptyIcon.png";
import plus from "/img/plus.png";

const DetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const selectedMovie = useAppSelector(
    (state) => state.netflixState.selectedMovie,
  );
  const { loadSelectedMovieApi } = useNetflixApi();
  const [user] = useAuthState(auth);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      if (user && id) {
        const selectedMovieApi = await loadSelectedMovieApi(id);

        dispatch(loadSelectedMovieActionCreator(selectedMovieApi));
      }
    })();
  }, [dispatch, loadSelectedMovieApi, user, id]);

  return (
    <div className="detail-page">
      <div className="detail-page__bar">
        <NavLink to={paths.home}>
          <img src={back} alt="back icon" width="24" height="24" />
        </NavLink>
      </div>
      <article className="movie-detail">
        <img
          className="movie-detail__pic"
          src={`https://image.tmdb.org/t/p/w500${selectedMovie?.backdrop_path}`}
          alt={`Poster piscture of ${selectedMovie?.title}`}
        />
        <div className="movie-detail__content">
          <h1 className="movie-detail__title">{selectedMovie?.title}</h1>
          <div className="movie-detail__ref">
            <span>{selectedMovie?.release_date}</span>
            <span>{selectedMovie?.runtime} min</span>
            <img src={hd} alt="HD icon" />
            <img src={audiodesc} alt="Reference to audiosecription available" />
            <img
              className="ref__subtitles"
              src={subtitulos}
              alt="Icon subtitles available"
            />
          </div>
          <div className="movie-detail__button-container">
            <NavLink className="button-solid-white" to={paths.player}>
              <img src={play} alt="play icon" width="20" height="20" />
              Play
            </NavLink>
            <NavLink className="button-opacity" to={paths.home}>
              <img src={download} alt="download icon" width="20" height="20" />
              Download
            </NavLink>
          </div>
          <p className="movie-detail__description">{selectedMovie?.overview}</p>
          <NavLink to={`${selectedMovie?.homepage}`}>
            {selectedMovie?.homepage}
          </NavLink>
          <div className="movie__icons">
            <img
              className={"favorite-icon"}
              src={favoriteEmptyIcon}
              alt={"favorite"}
              width="30"
              height="30"
            />
            <img
              className={"plus-icon"}
              src={plus}
              alt={"add to list"}
              width="30"
              height="30"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default DetailPage;
