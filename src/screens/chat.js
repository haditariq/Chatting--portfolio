import React from 'react';
import Inbox from '../components/inbox';

// assets
import '../assets/css/chat.css'
import Conversation from '../components/conversation';

function Chat (props) {
  return (
    <div className={'chat'}>
      {/*<Inbox/>*/}
      <Conversation/>
    </div>
  );
}

export default Chat;
