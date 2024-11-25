import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ConfirmCode from './components/ConfirmCode';
import RegName from './components/RegName';
import './Welcome.css'
import RegBDay from './components/RegBDay';
import SendCode from './components/SendCode';
import AddEmail from './components/AddEmail'
import ConfirmEmail from './components/ConfirmEmail'

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCodeSent = (phone: string) => {
    setPhoneNumber(phone);
    navigate('/reg/confirmcode')
  };

  const handleVerificationSuccess = (code: string) => {
    console.log(`Код подтвержден: ${code}`);
    // Здесь можно перенаправить на другую страницу или выполнить другие действия
  };

  return (
    <div className='auth_cont wrapper'>
      <svg className='custom-logo' width="100%" height="100%" viewBox="0 0 357 354" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M135.002 189.004C130.003 161.171 149.503 98.0039 223.502 98.0039C297.502 98.0039 328.003 183.504 318.003 232.004C308.003 280.504 290.003 304.5 260.503 333.504C255.421 338.5 356.503 282 356.503 183.504C356.503 115.568 301.959 64.2257 248.003 51.0039C223.503 45.0002 174.499 45.0001 135.002 81.5002C117.802 97.3953 100.5 155.5 135.002 189.004Z" fill="#191B24" />
        <path d="M135.002 189.004C130.003 161.171 149.503 98.0039 223.502 98.0039C297.502 98.0039 328.003 183.504 318.003 232.004C308.003 280.504 290.003 304.5 260.503 333.504C255.421 338.5 356.503 282 356.503 183.504C356.503 115.568 301.959 64.2257 248.003 51.0039C223.503 45.0002 174.499 45.0001 135.002 81.5002C117.802 97.3953 100.5 155.5 135.002 189.004Z" fill="#191B24" />
        <path d="M135.002 189.004C130.003 161.171 149.503 98.0039 223.502 98.0039C297.502 98.0039 328.003 183.504 318.003 232.004C308.003 280.504 290.003 304.5 260.503 333.504C255.421 338.5 356.503 282 356.503 183.504C356.503 115.568 301.959 64.2257 248.003 51.0039C223.503 45.0002 174.499 45.0001 135.002 81.5002C117.802 97.3953 100.5 155.5 135.002 189.004Z" stroke="#191B24" />
        <path d="M135.002 189.004C130.003 161.171 149.503 98.0039 223.502 98.0039C297.502 98.0039 328.003 183.504 318.003 232.004C308.003 280.504 290.003 304.5 260.503 333.504C255.421 338.5 356.503 282 356.503 183.504C356.503 115.568 301.959 64.2257 248.003 51.0039C223.503 45.0002 174.499 45.0001 135.002 81.5002C117.802 97.3953 100.5 155.5 135.002 189.004Z" stroke="#191B24" />
        <path d="M166.13 129.361C193.872 123.877 257.37 142.271 258.661 216.26C259.953 290.249 174.998 322.236 126.331 313.084C77.6633 303.932 53.3567 286.354 23.8428 257.364C18.7584 252.37 77.0139 352.451 175.495 350.732C243.421 349.546 293.803 294.115 306.081 239.936C311.657 215.335 310.801 166.339 273.618 127.485C257.425 110.565 199.027 94.2793 166.13 129.361Z" fill="#191B24" />
        <path d="M166.13 129.361C193.872 123.877 257.37 142.271 258.661 216.26C259.953 290.249 174.998 322.236 126.331 313.084C77.6633 303.932 53.3567 286.354 23.8428 257.364C18.7584 252.37 77.0139 352.451 175.495 350.732C243.421 349.546 293.803 294.115 306.081 239.936C311.657 215.335 310.801 166.339 273.618 127.485C257.425 110.565 199.027 94.2793 166.13 129.361Z" fill="#191B24" />
        <path d="M166.13 129.361C193.872 123.877 257.37 142.271 258.661 216.26C259.953 290.249 174.998 322.236 126.331 313.084C77.6633 303.932 53.3567 286.354 23.8428 257.364C18.7584 252.37 77.0139 352.451 175.495 350.732C243.421 349.546 293.803 294.115 306.081 239.936C311.657 215.335 310.801 166.339 273.618 127.485C257.425 110.565 199.027 94.2793 166.13 129.361Z" stroke="#191B24" />
        <path d="M166.13 129.361C193.872 123.877 257.37 142.271 258.661 216.26C259.953 290.249 174.998 322.236 126.331 313.084C77.6633 303.932 53.3567 286.354 23.8428 257.364C18.7584 252.37 77.0139 352.451 175.495 350.732C243.421 349.546 293.803 294.115 306.081 239.936C311.657 215.335 310.801 166.339 273.618 127.485C257.425 110.565 199.027 94.2793 166.13 129.361Z" stroke="#191B24" />
        <path d="M228.775 160.649C235.225 188.182 219.058 252.283 145.159 256.156C71.2605 260.029 36.3272 176.242 43.7752 127.285C51.2231 78.3283 67.9428 53.423 95.8845 22.9153C100.698 17.6597 2.71131 79.3726 7.86621 177.734C11.4217 245.577 68.5779 293.994 123.152 304.374C147.933 309.087 196.869 306.523 234.402 268.005C250.746 251.232 264.984 192.301 228.775 160.649Z" fill="#191B24" />
        <path d="M228.775 160.649C235.225 188.182 219.058 252.283 145.159 256.156C71.2605 260.029 36.3272 176.242 43.7752 127.285C51.2231 78.3283 67.9428 53.423 95.8845 22.9153C100.698 17.6597 2.71131 79.3726 7.86621 177.734C11.4217 245.577 68.5779 293.994 123.152 304.374C147.933 309.087 196.869 306.523 234.402 268.005C250.746 251.232 264.984 192.301 228.775 160.649Z" fill="#191B24" />
        <path d="M228.775 160.649C235.225 188.182 219.058 252.283 145.159 256.156C71.2605 260.029 36.3272 176.242 43.7752 127.285C51.2231 78.3283 67.9428 53.423 95.8845 22.9153C100.698 17.6597 2.71131 79.3726 7.86621 177.734C11.4217 245.577 68.5779 293.994 123.152 304.374C147.933 309.087 196.869 306.523 234.402 268.005C250.746 251.232 264.984 192.301 228.775 160.649Z" stroke="#191B24" />
        <path d="M228.775 160.649C235.225 188.182 219.058 252.283 145.159 256.156C71.2605 260.029 36.3272 176.242 43.7752 127.285C51.2231 78.3283 67.9428 53.423 95.8845 22.9153C100.698 17.6597 2.71131 79.3726 7.86621 177.734C11.4217 245.577 68.5779 293.994 123.152 304.374C147.933 309.087 196.869 306.523 234.402 268.005C250.746 251.232 264.984 192.301 228.775 160.649Z" stroke="#191B24" />
      </svg>
      <Routes>
        <Route path="/" element={<RegName />} />
        <Route path="/reg/regbday" element={<RegBDay />} />
        <Route path="/reg/enteremail" element={<AddEmail />} />
        <Route path="/reg/confirmemail" element={<ConfirmEmail />} />
        <Route path="/reg/sendcode" element={<SendCode onCodeSent={handleCodeSent} />} />
        <Route path="/reg/confirmcode" element={<ConfirmCode onVerify={handleVerificationSuccess} />} />
      </Routes>

    </div>
  );
};

export default Welcome;
