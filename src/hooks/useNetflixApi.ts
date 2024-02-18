import { useCallback } from "react";
import { auth } from "../firebase";
import { useIdToken } from "react-firebase-hooks/auth";
import axios from "axios";
import { API_KEY, TMBD_BASE_URL } from "../utils/constants";
import { ApiGenres, ApiMovieType, ApiMovies, ApiTv } from "../types";
import paths from "../paths/paths";
import { useNavigate } from "react-router-dom";

const useNetflixApi = () => {
  const [user] = useIdToken(auth);
  const navigate = useNavigate();

  const getGenres = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiGenres>(
          `${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const genresList = data.genres;

        return genresList;
      }
    } catch {
      throw new Error("Can't get any genre");
    }
  }, [user]);

  const getTrendingMovies = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiMovies>(
          `${TMBD_BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=1`,
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

  const getMovies = useCallback(
    async (currentPage: number, filterMovies: string) => {
      try {
        if (user && filterMovies !== null && filterMovies !== "") {
          const token = await user.getIdToken();

          const { data } = await axios.get<ApiMovies>(
            `${TMBD_BASE_URL}/search/movie?query=${filterMovies}&api_key=${API_KEY}&page=${currentPage}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );
          const movieList = data.results;

          return movieList;
        } else {
          const token = await user!.getIdToken();

          const { data } = await axios.get<ApiMovies>(
            `${TMBD_BASE_URL}/discover/movie?&api_key=${API_KEY}&page=${currentPage}`,
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
    },
    [user],
  );

  const getTopMovies = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiMovies>(
          `${TMBD_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`,
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

  const getUpcomingMovies = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiMovies>(
          `${TMBD_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=1`,
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

  const getTrendingTv = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiTv>(
          `${TMBD_BASE_URL}/trending/tv/day?api_key=${API_KEY}&page=1`,
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

  const getTv = useCallback(
    async (currentPage: number, filterMovies: string) => {
      try {
        if (user && filterMovies !== null && filterMovies !== "") {
          const token = await user.getIdToken();

          const { data } = await axios.get<ApiTv>(
            `${TMBD_BASE_URL}/search/tv?query=${filterMovies}&api_key=${API_KEY}&page=${currentPage}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            },
          );

          const tvList = data.results;

          return tvList;
        } else {
          const token = await user!.getIdToken();

          const { data } = await axios.get<ApiTv>(
            `${TMBD_BASE_URL}/discover/tv?&api_key=${API_KEY}&page=${currentPage}`,
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
    },
    [user],
  );

  const getTopTv = useCallback(async () => {
    try {
      if (user) {
        const token = await user.getIdToken();

        const { data } = await axios.get<ApiTv>(
          `${TMBD_BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=1`,
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

  const modifyMovieApi = useCallback(
    async (id: string, isFavourite: boolean) => {
      try {
        if (!user) {
          throw Error();
        }

        const token = await user.getIdToken();
        const newId = Number(id);
        const { data } = await axios.patch<ApiMovieType>(
          `${TMBD_BASE_URL}/movie/${newId}?api_key=${API_KEY}`,
          { isFavourite },
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        return data;
      } catch (error: unknown) {
        throw new Error("Couldn't modify the player");
      }
    },
    [user],
  );

  return {
    getGenres,
    getMovies,
    getTv,
    loadSelectedMovieApi,
    getTrendingMovies,
    getTrendingTv,
    getTopMovies,
    getUpcomingMovies,
    getTopTv,
    modifyMovieApi,
  };
};

export default useNetflixApi;
