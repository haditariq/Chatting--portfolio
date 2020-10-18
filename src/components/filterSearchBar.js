import React from "react";
// assets
import "../assets/css/filterSearchBar.css";
import searchBarIcon from "../assets/icons/search.png";
import add from "../assets/icons/add.png";

function FilterSearchBar({
  onCreateNewChatFromInbox,
  hideAdd,
  placeholder,
  style,
  onChange
}) {

  return (
    <div className={"searchBar"} style={style}>
      <input
        className={"searchBar__input"}
        placeholder={placeholder || "Find people and conversation"}
        onChange={e => {
          onChange(e.target.value);
        }}
      />

      <img className="searchBar__icon" src={searchBarIcon} />

      {!hideAdd && (
        <button
          className={"searchBar__newChat"}
          onClick={() => onCreateNewChatFromInbox(true)}
        >
          <img src={add} alt="" />
        </button>
      )}
    </div>
  );
}

export default FilterSearchBar;
