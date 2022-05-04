import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='/images/linkedin.png' alt='' />

        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Inicio' />
        <HeaderOption Icon={SupervisorAccountIcon} title='Mi Red' />
        <HeaderOption Icon={BusinessCenterIcon} title='Empleos' />
        <HeaderOption Icon={ChatIcon} title='Mensajes' />
        <HeaderOption Icon={NotificationsIcon} title='Notificaciones' />
        <HeaderOption avatar='/images/profile.png' title='Yo' />
      </div>
    </div>
  )
}

export default Header;