import React from "react";
import "./style.css";

const MovieListItem = ({ movie }) => {
  const poster =
    movie.Poster === "N/A"
      ? "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg"
      : movie.Poster;
  return (
    <div className="list-item">
      <h2 className="text-wrap">{movie.Title}</h2>
      <img src={poster} alt={`Movies title is ${movie.Title}`} />
    </div>
  );
};

export default MovieListItem;
