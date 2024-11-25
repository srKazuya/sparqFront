
import React from 'react';


import './messageArea.css'
import Header from './components/header';
import ChatSpace from './components/chatSpace';



const MessageArea: React.FC = () => {
    return (

        <div className='messageArea_container'>
            <Header/>
            <ChatSpace/>
        </div>
    );
};

export default MessageArea;
