import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import style from './profile.module.css';
import profile from '../../assets/profile__img.png';

const Profile = () => {
  return (
    <div>
        <div className='profile'>
            <img src={profile} alt='profile-pics' id={style.profile_img}/>
            <h1>Annette Black</h1>
        </div>
        <div>
            <RiShareForwardLine />
        </div>
    </div>
  )
}

export default Profile;