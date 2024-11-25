import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddEmail: React.FC = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/reg/confirmemail')
  }
  return (
    <div className=''>
      <h2 className='h2_Reg'>Create your account!</h2>
      <p className='text_RegBDay'>Enter your phone number to get started</p>
      <form className='Form__Email'>
        <label htmlFor="phone-number">
          <input type="email" required placeholder='Email' />
        </label>
        <button onClick={handleClick} type="submit" className='Add_Email_button'>Next</button>
      </form>
    </div>
  );
};

export default AddEmail;
