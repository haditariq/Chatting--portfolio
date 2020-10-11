import React from "react";
// assets
import "../assets/css/filterSearchBar.css";
import searchBarIcon from "../assets/icons/search.png";
import add from "../assets/icons/add.png";
function FilterSearchBar({onCreateNewChatFromInbox}) {
  const onClickNewChat = () => {
    alert("Action: New Chat");
  };

  return (
    <div className={"searchBar"}>
      <input
        className={"searchBar__input"}
        placeholder={"Find people and conversation"}
      />
      <img className="searchBar__icon" src={searchBarIcon} />

      <button className={"searchBar__newChat"} onClick={() => onCreateNewChatFromInbox(true)}>
        <img src={add} alt="" />
      </button>
    </div>
  );
}

export default FilterSearchBar;
