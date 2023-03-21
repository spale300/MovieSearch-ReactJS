import React, { useEffect, useReducer } from "react";

import ErrorMsg from "../components/ErrorMsg/ErrorMsg";
import Loading from "../components/Loading/Loading";
import Search from "../components/Search/Search";
import { MovieReducer, initialState } from "../reducer/MovieReducer";
import API from "../config/api";
import { apiKey } from "../config/apiKey";
import { SEARCH_MOVIES_FAILED, SEARCH_MOVIES_SUCCES } from "../reducer/types";
import MovieList from "../components/Movies/MovieList";

const HomeView = () => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  const { movies, errorMesssage, loading } = state;

  const handleMovieSearch = (movie) => {
    API.get(`?s=${movie}&${apiKey}`).then((res) => {
      console.log(res.data);
      if (res.data.Response === "True") {
        dispatch({
          type: SEARCH_MOVIES_SUCCES,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: SEARCH_MOVIES_FAILED,
          payload: res.data.ErrorMsg,
        });
      }
    });
  };

  useEffect(() => {
    handleMovieSearch("batman");
  }, []);

  return (
    <div>
      <h2>home view</h2>
      <Search onSubmit={handleMovieSearch} />
      <div>
        {loading && !errorMesssage ? (
          <Loading />
        ) : errorMesssage ? (
          <ErrorMsg>{errorMesssage}</ErrorMsg>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </div>
  );
};

export default HomeView;
