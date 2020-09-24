import React from "react";
import "../assets/css/conversation.css";
import ConversationItem from "./conversationItem";
import conversationData from "../datalayer/conversation";
function Conversation(props) {
  const renderConversation = () => {
    return conversationData.conversation.map((item) => <ConversationItem
      payload={item.payload}
      username={item.username}
      sent_by={item.sent_by}
      sent_at={item.sent_at}
    />);
  };
  return (
    <div className={"conversation"}>
      <div className="conversation__TopBar">
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
    </div>
  );
}

export default Conversation;
