import React, { useEffect, useState } from "react";
import Inbox from "../components/inbox";

// assets
import "../assets/css/chat.css";
import Conversation from "../components/conversation";

function Chat(props) {
  const [inboxToggle, setInboxToggle] = useState(true);
  const onClickToggle = ()=>{
    setInboxToggle(!inboxToggle)
  }
  return (
    <div className={"chat"}>
      {inboxToggle && <Inbox />}
      <Conversation toggleInbox={onClickToggle} status={inboxToggle} inboxToggle={inboxToggle} />
    </div>
  );
}

export default Chat;
