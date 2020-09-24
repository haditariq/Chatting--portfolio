import React from 'react';
import '../assets/css/profileMenuItem.css'
import logoutIcon from '../assets/icons/logout.png'
function ProfileMenuItem (props) {
  return (
    <button className={'profileMenuItem'}>
      <img src={logoutIcon} alt=""/>
      {/*<p>Logout</p>*/}
    </button>
  );
}

export default ProfileMenuItem;
