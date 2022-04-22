import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  function beginNewSearch(event) {
    event.preventDefault();
    props.newSearch(searchTerm);
  }

  return (
    <form onSubmit={beginNewSearch} className="form-grid">
      <div className="form-group">
        <label>Search</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <button type="submit" style={{ "margin-top": "1em" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
