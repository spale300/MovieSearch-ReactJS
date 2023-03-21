import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((movie) => {
        return <MovieListItem key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
};

export default MovieList;
