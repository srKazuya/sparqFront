import React from 'react';
import { useNavigate } from 'react-router-dom';



const RegBDay: React.FC = () => {
  const navigate = useNavigate()
  const handleClick = () =>
    navigate('/reg/enteremail')
  return (
    <div className=''>
      <h2 className='h2_Reg'>Create your account!</h2>
      <p className='text_RegBDay'>Specify your date of birth and gender to contunue</p>
      <form className='Form_RegBDay' method='POST'>
        <div className='wrapper_RegBDay_Form'>
          <div className='wrapper_RegBDay_Form2'>
            <label htmlFor="BDay_Day" className='BDay_Day'>
              <input name='BDay_Day' className='input_RegBDay' type="number" placeholder='Day' required />
            </label>
            <label htmlFor="BDay_Mounth" className='BDay_Mounth'>
              <input name='BDay_Mounth' className='input_RegBMounth' type="number" placeholder='Mounth' required />
            </label>
          </div>
          <label htmlFor="BDay_Year" className='BDay_Year'>
            <input name='BDay_Year' className='input_RegBDay_Year' type="number" placeholder='Year' required />
          </label>
        </div>
        <label htmlFor="BDay_Gender" className='BDay_Gender_label'>
          <select name="BDay_Gender" className='Select_Gender'>
            <option value="startValue">Gender</option>
            <option value="Male">Мужчина</option>
            <option value="Female">Женщина</option>
          </select>
        </label>
        <button onClick={handleClick} type="submit">Next</button>
      </form>
    </div >

  );
};

export default RegBDay;