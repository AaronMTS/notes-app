import React from "react";
import classes from "./SearchBar.module.css";
import searchIcon from "../assets/search-magnifying-glass.svg";

const SearchBar = () => {
  return (
    <div>
      <span>
        <img src={searchIcon} alt="search" />
      </span>
    </div>
  );
};

export default SearchBar;
