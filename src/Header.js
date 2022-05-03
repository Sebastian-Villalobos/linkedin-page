import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

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
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
      </div>

    </div>
  )
}

export default Header;