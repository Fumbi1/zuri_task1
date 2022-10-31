import React from 'react';
import share from '../../assets/share.png'
import menu from '../../assets/menu.png'
import './profile.css';
import selfie from '../../assets/selfie.jpg';

const Profile = () => {
  return (
    <div id='mainn'>
        <div className='main'>
          <div className='profile'>
            <img src={selfie} alt='profile-pics' id='profile__img'/>
            <h1 id='twitter'>Olumuyiwa Fumbi</h1>
            <h1 id='slack'>Muyiwa</h1>

            <div className='share'>
              <img src={share} alt='' />
            </div>
            <div className='ellipsis'>
            <img src={menu} alt='' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile;