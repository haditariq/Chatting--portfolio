import React, { useEffect, useState } from "react";
import Inbox from "../components/inbox";
import socketIOClient from "socket.io-client";
import KEYS from "../configs/KEYS";

// assets
import "../assets/css/chat.css";
import Conversation from "../components/conversation";
import CreateChatModal from "../components/createChatModal";

let users = [
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  },
  {
    name: "James"
  },
  {
    name: "John Doe"
  },

  {
    name: "Micheal"
  }
];

function Chat(props) {
  const [inboxToggle, setInboxToggle] = useState(true);
  const [socket, setSocket] = useState();
  const [createChatModal, setCreateChatModal] = useState(false);

  useEffect(() => {
    const socket = socketIOClient(KEYS.SOCKET_URL);
    setSocket(socket);
    socket.emit("register", { USER_ID: "Asfdasf" });
  }, []);

  const onInboxToggle = () => {
    setInboxToggle(!inboxToggle);
  };

  const onCloseNewChatModal = () => {
    setCreateChatModal(!inboxToggle);
  };

  return (
    <div className={"chat"}>
      {createChatModal && (
        <CreateChatModal
          registeredUsers={users}
          createNewChatModal={() => onCloseNewChatModal()}
        />
      )}
      {inboxToggle && (
        <Inbox onCreateNewChat={() => setCreateChatModal(true)} />
      )}
      <Conversation
        toggleInbox={onInboxToggle}
        status={inboxToggle}
        inboxToggle={inboxToggle}
      />
    </div>
  );
}

export default Chat;
