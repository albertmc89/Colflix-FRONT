import { useCallback } from "react";
import { auth } from "../firebase";
import { useIdToken } from "react-firebase-hooks/auth";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";
import { ApiMovieType, ApiMovies, ApiTv } from "../types";
import paths from "../paths/paths";
import { useNavigate } from "react-router-dom";

const useNetflixApi = () => {
  const [user] = useIdToken(auth);
  const navigate = useNavigate();

  const getGenres = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<[]>(
          `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        return data;
      }
    } catch {
      throw new Error("Can't get any genre");
    }
  }, [user]);

  const getMovies = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiMovies>(
          `${TMBD_BASE_URL}/discover/movie?api_key=${API_KEY}&page=1`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const movieList = data.results;

        return movieList;
      }
    } catch {
      throw new Error("Can't get any movie");
    }
  }, [user]);

  const getTv = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiTv>(
          `${TMBD_BASE_URL}/discover/tv?api_key=${API_KEY}&page=1`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const tvList = data.results;

        return tvList;
      }
    } catch {
      throw new Error("Can't get any movie");
    }
  }, [user]);

  const loadSelectedMovieApi = useCallback(
    async (id: string) => {
      try {
        if (!user) {
          throw Error();
        }

        const newId = Number(id);
        const token = await user.getIdToken();
        const { data } = await axios.get<ApiMovieType>(
          `${TMBD_BASE_URL}/movie/${newId}?api_key=${API_KEY}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        return data;
      } catch (error: unknown) {
        navigate(paths.home);
        throw new Error("Couldn't load the movie");
      }
    },
    [user, navigate],
  );

  return {
    getGenres,
    getMovies,
    getTv,
    loadSelectedMovieApi,
  };
};

export default useNetflixApi;
