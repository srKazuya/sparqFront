import React, { useState, FC } from 'react';
import '../../Welcome.css'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import ConfirmCode from '../ConfirmCode/ConfirmCode.tsx';

interface SendCodeProps {
  onCodeSent: (phoneNumber: string) => void;
}

const SendCode: FC<SendCodeProps> = ({ onCodeSent }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [codeSent, setCodeSent] = useState<boolean>(false);

  const handlePhoneNumberSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      console.log(`Код подтверждения отправлен на: ${phoneNumber}`);
      setCodeSent(true);
      onCodeSent(phoneNumber);
    } catch (error) {
      console.error('Ошибка отправки номера:', error);
    }
  };

  return (
    <div className='auth'>
      <h2>Welcome!</h2>

      {!codeSent ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <label htmlFor="phone-number">
            <span>Enter your phone number to get started</span>
            <InputMask
              id='phone-number'
              className='input-mask_phone'
              mask="+7 (999) 999-99-99"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              required
              type="tel"  // Добавим атрибут type здесь
            />
          </label>
          <button type="submit">Next</button>
        </form>
      ) : (
        <p>Код отправлен на {phoneNumber}</p>
      )}
    </div>
  );
};

export default SendCode;
