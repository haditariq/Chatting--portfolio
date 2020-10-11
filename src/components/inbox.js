import React, { useState } from "react";
import "../assets/css/inbox.css";
import FilterSearchBar from "./filterSearchBar";
import InboxItem from "./inboxItem";
import inboxData from "../redux/inbox";
import InboxFilter from "./inboxFilter";
import user_profile1 from "../assets/images/user_profile1.png";
import closeMenuOverlay from "../assets/icons/add.png";
import ProfileMenuItem from "./profileMenuItem";
function  Inbox({onCreateNewChat}) {
  const [showProfileMenu, setProfileMenu] = useState(true);
  const onClickProfile = () => {
    setProfileMenu(!showProfileMenu)
  };

  const renderInboxItem = () => {
    return inboxData.users.map(item => (
      <InboxItem
        url={item.url}
        username={item.username}
        status={item.status}
        lastMessage={item.lastMessage}
        sent_at={item.sent_at}
        unseen={item.unseen}
        active={item.active}
      />
    ));
  };

  return (
    <div className={"inbox"}>
      <FilterSearchBar onCreateNewChatFromInbox={onCreateNewChat}/>
      <InboxFilter />
      {renderInboxItem()}
      <div className={"inbox__profileMenu"}>
        <button
          className={"inbox__profileMenuBtn"}
          onClick={() => onClickProfile()}
        >
          <img src={user_profile1} alt="" />
            </button>
        {showProfileMenu && (
          <div className="inboxItem__profileMenuDropDown">
            <ProfileMenuItem />
          </div>
        )}
      </div>
    </div>
  );
}

export default Inbox;
