import React, { useEffect, useState } from "react";
import "../assets/css/newCreateChatModal.css";
import avatarIcon from "../assets/images/user_profile1.png";
import closeIcon from "../assets/icons/cross.png";
import FilterSearchBar from "./filterSearchBar";

function CreateChatModal({ createNewChatModal, registeredUsers }) {
  const [userQuery, setUserQuery] = useState("");
  const [results, setResults] = useState(registeredUsers);

  useEffect(() => {
    const matchedSites = registeredUsers.filter(({ name }) => name.includes(userQuery));
    console.log(matchedSites.length)
    setResults(matchedSites);
  }, [userQuery]);

  return (
    <div className={"newCreateChatModal"}>
      <div className={"newCreateChatModal__searchCloseContainer"}>
        <FilterSearchBar
          hideAdd={true}
          placeholder={"Find people to talk!"}
          style={{
            width: "100%",
            marginRight: 8
          }}
          onChange={e => setUserQuery(e)}
        />
        <button
          className={"newCreateChatModal__searchModal--close"}
          onClick={() => createNewChatModal()}
        >
          <img src={closeIcon} alt="" height={30} width={30} />
        </button>
      </div>
      <div className="newCreateChatModal__filterDrop">
        <ul>
          {results.map((item, idx) => (
            <li key={idx}>
              <img src={avatarIcon} alt="" />
              <div className={"inboxItem__username"}>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreateChatModal;
