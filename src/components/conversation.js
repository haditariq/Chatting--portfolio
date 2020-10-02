import React, { useEffect, useState } from "react";
import "../assets/css/conversation.css";
import ConversationItem from "./conversationItem";
import conversationData from "../redux/conversation";
import emojiIcon from "../assets/icons/emojis.png";
import sendIcon from "../assets/icons/send.png";
import menuIcon from "../assets/icons/menu.png";
import crossIcon from "../assets/icons/cross.png";

function Conversation({ toggleInbox, status, inboxToggle }) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const conversation = document.getElementById("conversation");
    conversation.style.maxHeight = window.innerHeight + "px";
  }, []);

  const renderConversation = () => {
    return conversationData.conversation.map(item => (
      <ConversationItem
        payload={item.payload}
        username={item.username}
        sent_by={item.sent_by}
        sent_at={item.sent_at}
      />
    ));
  };
  return (
    <div className={"conversation"} id={"conversation"}>
      <div className="conversation__TopBar">
        <button onClick={toggleInbox} className={"conversationT__inboxToggle"}>
          {!status ? (
            <img src={menuIcon} alt="" />
          ) : (
            <img src={crossIcon} alt="" />
          )}
        </button>
        <p className={"conversation__username"}>Micheal Wong</p>
        <div
          className={`conversation__status ${
            true
              ? "conversation__status--active"
              : "conversation__status--inActive"
          }`}
        />
      </div>
      <div className="conversationBlock">{renderConversation()}</div>

      <div className="conversationBreak" />
      <div className="conversation__payloadFieldContainer">
        <input
          type="text"
          className="conversation__payloadField"
          placeholder={`Message Micheal ....`}
        />
        <button className={"conversation__payloadBtn"}>
          <img src={sendIcon} alt="" className={"conversation__payloadIcons"} />
        </button>
        <div className="conversationIconDivider" />
        <button className={"conversation__payloadBtn"}>
          <img
            src={emojiIcon}
            alt=""
            className={"conversation__payloadIcons"}
          />
        </button>
      </div>
    </div>
  );
}

export default Conversation;
