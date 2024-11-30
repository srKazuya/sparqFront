import classNames from 'classnames'
import React, { useState } from 'react';
import styles from './ChatSpase.module.scss';
import avatar from '../../../../../../../assets/avatar.png'



// import './U code.css'



const ChatSpace: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

   // Функция для обработки отправки сообщения
   const handleSendMessage = () => {
    if (value.trim()) {
      const newMessages = [value, ...messages]; // Добавляем новое сообщение в конец массива
      setMessages(newMessages); // Обновляем список сообщений
      setValue(''); // Очищаем input
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatContainer}>
    <div className={styles.messagesContainer}>
        {/* Отображение списка сообщений */}
        {messages.map((message, index) => (
          <div key={index} className={styles.message}>
            <div className={styles.avatar__container}>
              <img src={avatar} className={styles.avatar}/>
            </div>
            <div className={styles.message__content}>
              <div className={styles.message__info}>
                <p className={styles.message__info__user}>Салим Шагаев</p>
                <p className={styles.message__info__time}>2:37</p>
              </div>
              <div>
                {message}
              </div>
            </div>
          </div>
        ))}
    </div>
    <div className={classNames(styles.customInputContainer, isFocused && styles.focus)}>
      <div className={styles.attach_icon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_147_1766)">
          <path d="M12 21.6C15.36 21.6 18 18.96 18 15.6V6.00002C18 5.28002 17.52 4.80002 16.8 4.80002C16.08 4.80002 15.6 5.28002 15.6 6.00002V15.6C15.6 17.64 14.04 19.2 12 19.2C9.96 19.2 8.4 17.64 8.4 15.6V6.00002C8.4 5.28002 8.88 4.80002 9.6 4.80002C10.32 4.80002 10.8 5.28002 10.8 6.00002V14.4C10.8 15.12 11.28 15.6 12 15.6C12.72 15.6 13.2 15.12 13.2 14.4V6.00002C13.2 3.96002 11.64 2.40002 9.6 2.40002C7.56 2.40002 6 3.96002 6 6.00002V15.6C6 18.96 8.64 21.6 12 21.6Z" fill="#324152"/>
          </g>
          <defs>
          <clipPath id="clip0_147_1766">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      <input
        type="text"
        value={value}
        placeholder="Начните печатать..."
        className={styles.customInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.send_icon} onClick={handleSendMessage}>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.4 17.4L18.85 9.92002C19.66 9.57002 19.66 8.43002 18.85 8.08002L1.4 0.600017C0.74 0.310017 0.00999999 0.800017 0.00999999 1.51002L0 6.12002C0 6.62002 0.37 7.05002 0.87 7.11002L15 9.00002L0.87 10.88C0.37 10.95 0 11.38 0 11.88L0.00999999 16.49C0.00999999 17.2 0.74 17.69 1.4 17.4Z" fill="#324152"/>
        </svg>
      </div>
    </div>
    </div>
  );
};

export default ChatSpace;
