import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Sebastián Villalobos</h2>
        <h4>sebastian.villalob@gmail.com</h4>
      </div>
    </div>
  )
}

export default Sidebar;