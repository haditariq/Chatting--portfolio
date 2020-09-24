import React from 'react';
import '../assets/css/conversation.css'
import ConversationItem from './conversationItem';

function Conversation (props) {
  return (
    <div className={'conversation'}>
      <div className="conversation__TopBar">
        <p className={"conversation__username"}>
          Micheal Wong
        </p>
        <div
          className={`conversation__status ${
            true ? "conversation__status--active" : "conversation__status--inActive"
          }`}
        />
      </div>
      <div className="conversationBlock">
        <ConversationItem/>
        <ConversationItem/>
        <ConversationItem/>
        <ConversationItem/>
        <ConversationItem/>
      </div>
    </div>
  );
}

export default Conversation;
