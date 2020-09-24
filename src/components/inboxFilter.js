import React from "react";
import "../assets/css/inboxFilter.css";

function InboxFilter(props) {
  return (
    <div className={"inboxFilter"}>
      <div className={"inboxFilter__item"}>
        <div />
        <p className={"inboxFilter__text"}>Recent</p>
        <div className="inboxFilter__border--active" />
      </div>
      <div className={"inboxFilter__item"}>
        <div />
        <p className={"inboxFilter__text"}>Unread</p>
        <div className="inboxFilter__border--inactive" />
      </div>
      <div className={"inboxFilter__item"}>
        <div />
        <p className={"inboxFilter__text"}>Groups</p>
        <div className="inboxFilter__border--inactive" />
      </div>
    </div>
  );
}

export default InboxFilter;
