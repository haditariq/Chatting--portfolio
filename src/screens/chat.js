import React, { useEffect, useState } from "react";
import Inbox from "../components/inbox";
import socketIOClient from "socket.io-client";
import KEYS from '../configs/KEYS';

// assets
import "../assets/css/chat.css";
import Conversation from "../components/conversation";

function Chat(props) {

  const [inboxToggle, setInboxToggle] = useState(true);
  const [socket, setSocket] = useState();

  useEffect(() => {
    const socket = socketIOClient(KEYS.SOCKET_URL);
    setSocket(socket);
    socket.emit("register", {USER_ID:"Asfdasf"});
  }, []);

  const onClickToggle = () => {
    setInboxToggle(!inboxToggle);
  };

  return (
    <div className={"chat"}>
      {inboxToggle && <Inbox />}
      <Conversation
        toggleInbox={onClickToggle}
        status={inboxToggle}
        inboxToggle={inboxToggle}
      />
    </div>
  );
}

export default Chat;
