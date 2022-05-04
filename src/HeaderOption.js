import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className='header__option'>
      {Icon && <Icon className='header__option-icon' />}
      {avatar && <Avatar className='header__option-icon' src={avatar} />}
      <h3 className='header__option-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;