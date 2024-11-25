
import React from 'react';


import './userCard.css';

import avatar from '@assets/icons/logo.svg';

const UserCard: React.FC = () => {
  return (
<div className='userCard-container'>
    <img src={avatar} alt=""  className='avatar'/>
    <a href="" className='username userCard-username'>Майк Тайсон</a> 
</div>  

);
};

export default UserCard;
