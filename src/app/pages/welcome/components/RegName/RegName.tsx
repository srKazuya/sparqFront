import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegName: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/reg/regbday')
  } 
  return (
    <div className=''>
    <h2 className='h2_Reg'>Create your account!</h2>
      <form className='Form_RegName' method='POST'>
        <label htmlFor="first-name">
          <span className='span_RegName'>Enter your first and last name to continue!</span>
          <input name='first-name' className='input_RegName' type="text" placeholder='Name' required />
        </label>
        <label htmlFor="second-name">
          <input name='second-name' className='input_RegName' type="text" placeholder='Surname' required />
        </label>
        <button onClick={handleClick} type="submit">Next</button>
      </form>
    </div>

  );
};

export default RegName;