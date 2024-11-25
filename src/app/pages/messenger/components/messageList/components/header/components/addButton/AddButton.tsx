
import React from 'react';

import './addButton.css'



const AddButton: React.FC = () => {
  return (
      <button className='messageLi-button'>
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" width="2" height="21" fill="#324152" />
          <rect y="11.5" width="2" height="22" transform="rotate(-90 0 11.5)" fill="#324152" />
        </svg>
      </button>
  );
};

export default AddButton;
