import {
  SEARCH_MOVIES_FAILED,
  SEARCH_MOVIES_SUCCES,
  SEARCH_MOVIE_REQUEST,
} from "./types";

export const initialState = {
  loading: true,
  movies: [],
  errorMesssage: null,
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        errorMesssage: null,
      };

    case SEARCH_MOVIES_SUCCES:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case SEARCH_MOVIES_FAILED:
      return {
        ...state,
        loading: false,
        errorMesssage: action.payload,
      };

    default:
      return state;
  }
};
