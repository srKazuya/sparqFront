
import React from 'react';

import './messageCard.css'
import avatar from '@assets/icons/logo.svg';




const MessageCard: React.FC = () => {
  return (
    <div className="message-item">
      <img className="avatar" src={avatar} alt="Avatar" />
      <div className="message-content">
        <div className="message-header">
          <span className="username">Фомин Владимир</span>
          <div className="timestamp">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7" stroke="#AAB2C0" stroke-width="1.5" />
              <path
                d="M8 3.5V8L11 10"
                stroke="#AAB2C0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>22:07</span>
          </div>
        </div>
        <div className="message-text">Равными схемами, обмануть эт...</div>
      </div>
    </div>

  );
};

export default MessageCard;
