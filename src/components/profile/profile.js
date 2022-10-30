import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import { CiCircleMore } from 'react-icons/ci'
import style from './profile.module.css';
import selfie from '../../assets/selfie.jpg';

const Profile = () => {
  return (
    <div id={style.mainn}>
        <div className={style.main}>
          <div className={style.profile}>
            <img src={selfie} alt='profile-pics' id={style.profile_img}/>
            <h1 id={style.twitter}>Olumuyiwa Fumbi</h1>
            <h1 id={style.slack}>Muyiwa</h1>

            <div className={style.share}>
              <RiShareForwardLine />
            </div>
            <div className={style.ellipsis}>
              <CiCircleMore />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile;