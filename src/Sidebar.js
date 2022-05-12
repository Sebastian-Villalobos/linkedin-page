import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {

  const recentItem = (topic) => {
    <div className='sidebar__recentItem'>

    </div>
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='/images/background.jpg' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Sebastián Villalobos</h2>
        <h4>sebastian.villalob@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Quien ha visto tu perfil</p>
          <p className='sidebar__statNumber'>61</p>
        </div>
        <div className='sidebar__stat'>
          <p>Impresiones de tu publicación</p>
          <p className='sidebar__statNumber'>70</p>
        </div>

        <div className='sidebar__button'>
          <p>Recientes</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;