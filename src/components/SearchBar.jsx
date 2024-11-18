import React from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../assets/search-magnifying-glass.svg";

const SearchBar = () => {
  return (
    <label className={classes.sBarContainer}>
      <span className={classes.sIconContainer}>
        <img src={searchIcon} alt="search" />
      </span>
      <input
        type="text"
        name="searchNotes"
        id=""
        placeholder="type to search..."
        className={classes.input}
      />
    </label>
  );
};

export default SearchBar;
