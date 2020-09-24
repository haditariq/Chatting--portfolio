import React from "react";
import "../assets/css/conversationItem.css";
import user_profile1 from "../assets/images/user_profile1.png";
function ConversationItem(props) {
  return (
    <div className={"conversationItem"}>
      <img src={user_profile1} alt="" className={"conversationItem__photo"} />
      <div className={"conversationItem__payloadContainer"}>
        <p className={"conversationItem__info"}>username, 7:30 PM</p>
        <p className="conversationItem__payload">
          I agree! It definitely produces a better user experience.
        </p>
      </div>
    </div>
  );
}

export default ConversationItem;
