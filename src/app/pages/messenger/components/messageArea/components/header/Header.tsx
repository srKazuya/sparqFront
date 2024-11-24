
import React from 'react';
import ButtonsGroup from './components/buttonsGroup';
import UserCard from './components/userCard';
import './header.css'

// import './U code.css'



const Header: React.FC = () => {
  return (
<div className='messageArea-header'>
    <UserCard/> 
    <ButtonsGroup/>
</div>

);
};

export default Header;
