import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmEmail: React.FC = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/reg/sendcode')
  }
  return (
    <div className='auth'>
      <p className='text_RegBDay'>We`ve sent an sms with an activation code to your phone</p>
      <h2 className='h2_Reg'>Enter code</h2>
      <form className='EnterCode_Form'>
        <label htmlFor="code">
          <input required placeholder='enter code' type='number' />
        </label>
        <button onClick={handleClick} className='EnterCode_button' type="submit">confirm</button>
      </form>
    </div>
  );
};

export default ConfirmEmail;

