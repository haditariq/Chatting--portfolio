import React from "react";
import "../assets/css/conversationItem.css";
import user_profile1 from "../assets/images/user_profile1.png";
function ConversationItem({payload, username, sent_at, sent_by}) {
  return (
    <div className={`conversationItem ${sent_by !== "A" ? "conversationItem__directionStart" : "conversationItem__directionEnd"}`}>
      <img src={user_profile1} alt="" className={"conversationItem__photo"} />
      <div className={"conversationItem__payloadContainer"}>
        <p className={"conversationItem__info"}>{username}, {sent_at}</p>
        <p className={`conversationItem__payload ${sent_by !== "A" ? "conversationItem__payloadDirectionStart" : "conversationItem__payloadDirectionEnd"}`}>
          {payload}
        </p>
      </div>
    </div>
  );
}

export default ConversationItem;
