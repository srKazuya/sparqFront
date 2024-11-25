
import React from 'react';
import Hamburger from './components/hamburger';
import MenuButton from './components/menuButton';
import SettingsButton from './components/settingsButton';
import './Dashboard.css'



const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-container'>
      <Hamburger />
      <div className='dashboard-grp_btn'>
        <MenuButton />
        <SettingsButton />
      </div>

    </div>

  );
};

export default Dashboard;
