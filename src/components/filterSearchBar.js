import React from "react";
// assets
import '../assets/css/filterSearchBar.css';
import searchBarIcon  from '../assets/icons/search.png'
function FilterSearchBar(props) {
  return (
    <div className={"searchBar"}>
      <input
        className={"searchBar__input"}
        placeholder={"Find people and conversation"}
      />
      <img
        className="searchBar__icon"
        src={searchBarIcon}
      />
    </div>
  );
}

export default FilterSearchBar;
