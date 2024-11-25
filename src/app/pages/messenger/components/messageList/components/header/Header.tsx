
import React from 'react';
import Input from './components/input';
import AddButton from './components/addButton';
import './header.css'

// import './U code.css'



const Header: React.FC = () => {
  return (
    <div className='messageLi-header_cont'>
        <Input/>
        <AddButton/>
    </div>

  );
};

export default Header;
