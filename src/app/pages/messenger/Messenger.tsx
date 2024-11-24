
import React from 'react';
import Dashboard from '../../../components/dashboard';
import MessageList from './components/messageList';
import MessageArea from './components/messageArea';

import './Messenger.css'

const Messenger: React.FC = () => {
  return (
    <div className='messenger-container'>

      <Dashboard />
      <MessageList />
      <MessageArea />
      
    
    </div>

  );
};

export default Messenger;
