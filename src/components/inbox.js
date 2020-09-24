import React from "react";
import "../assets/css/inbox.css";
import FilterSearchBar from "./filterSearchBar";
import InboxItem from "./inboxItem";
import inboxData from "../datalayer/inbox";

function Inbox(props) {
  const renderInboxItem = () => {
    return inboxData.users.map((item) => <InboxItem
      url={item.url}
      username={item.username}
      status={item.status}
      lastMessage={item.lastMessage}
      sent_at={item.sent_at}
      unseen={item.unseen}
    />);
  };

  return (
    <div className={"inbox"}>
      <FilterSearchBar />
      {/*switchers*/}
      {renderInboxItem()}
    </div>
  );
}

export default Inbox;
