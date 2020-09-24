import React from "react";
import "../assets/css/inboxItem.css";
import userProfile1 from "../assets/images/user_profile1.png";
import more from "../assets/icons/more.png";

function InboxItem({ url, username, status, lastMessage, sent_at, unseen = null }) {
  return (
    <div className={"inboxItem"}>
      <div className="inboxItem__avatar">
        <img src={userProfile1} alt="" className={"inboxItem__photo"} />
        <div
          className={`inboxItem__status ${
            status ? "inboxItem__status--active" : "inboxItem__status--inActive"
          }`}
        />
      </div>

      <div className={"inboxItem__informationContainer"}>
        <div className="inboxItem__information">
          <div className={"inboxItem__usernameContainer"}>
            <p className={"inboxItem__username"}>{username}</p>
            {unseen != null && unseen != 0 && <span className="inboxItem__unseenBadge">{unseen}</span>}
          </div>
          <p className={"inboxItem__lastMsg"}>{lastMessage}</p>
        </div>

        <div
          className="inboxItem__information"
          style={{ alignItems: "flex-end" }}
        >
          <button
            className={"inboxItem__more"}
            onClick={() => alert("Action: More")}
          >
            <img src={more} alt="" className={"inboxItem__moreImg"} />
          </button>
          <p className={"inboxItem__lastMsg"}>{sent_at}</p>
        </div>
      </div>
    </div>
  );
}

export default InboxItem;
