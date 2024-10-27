import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Welcome.css'
interface ConfirmCodeProps {
  onVerify: (verificationCode: string) => void;
}

const ConfirmCode: FC<ConfirmCodeProps> = ({ onVerify }) => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState<string>('');

  const handleVerificationSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: verificationCode }),
      });

      const data = await response.json();
      console.log(data.message);

      if (response.ok) {
        console.log('Код верный, авторизация успешна!');
        onVerify(verificationCode);
        navigate('/dashboard');
      } else {

        console.log('Неверный код подтверждения.');
      }
    } catch (error) {
      console.error('Ошибка при проверке кода:', error);
    }
  };

  return (
    <div className='auth'>
      <h2>Enter code</h2>
      <form onSubmit={handleVerificationSubmit}>
        <label htmlFor="code">
          <span>We`ve sent an sms with an activation code to your phone</span>
          <input
            className='input-mask_phone'
            id='code'
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Введите код"
            required
          />
        </label>
        <button type="submit">Подтвердить</button>
      </form>
    </div>
  );
};

export default ConfirmCode;
