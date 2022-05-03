import React from 'react';
import './HeaderOption.css';

const HeaderOption = ({ Icon, title }) => {
  return (
    <div className='header__option'>
      {Icon && <Icon className='header__option-icon' />}
      <h3 className='header__option-title'>{title}</h3>
    </div>
  )
}

export default HeaderOption;