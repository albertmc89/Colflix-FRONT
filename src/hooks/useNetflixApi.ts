import { useCallback } from "react";
import { auth } from "../firebase";
import { useIdToken } from "react-firebase-hooks/auth";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";
import { ApiMovies, ApiTv } from "../types";

const useNetflixApi = () => {
  const [user] = useIdToken(auth);

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

  return {
    getGenres,
    getMovies,
    getTv,
  };
};

export default useNetflixApi;
