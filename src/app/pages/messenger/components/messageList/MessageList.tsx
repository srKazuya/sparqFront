
import React from 'react';
import Header from './components/header';
import MessageCard from './components/messageCard';
import './messageList.css';


// import './U code.css'



const MessageList: React.FC = () => {
  return (
    <div className='messageList-cont'>
      <div>
        <Header />
      </div>
      <div>
        <MessageCard/>
        </div>
    </div>

  );
};

export default MessageList;
