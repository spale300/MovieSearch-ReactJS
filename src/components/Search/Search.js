import React, { useState } from "react";
import "./style.css";

const Search = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleReset = () => {
    setName("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(name);
    handleReset();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          placeholder="search for favorite movie"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="search-btn"
          type="submit"
          value="SEARCH"
          onClick={handleSearch}
        >
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
