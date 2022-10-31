import React from 'react';
import { ExternalLink } from 'react-external-link';
import style from './links.module.css';
import slack from '../../assets/slack.png'
import git from '../../assets/Icon.png'
import Footer from '../footer/footer';


const Links = () => {
  return (
    <div id={style.main}>
      <a href=''></a>
      <a href=''></a>
      <a href=''></a>
      <a href=''></a>
      <a href=''></a>
      <a href=''></a>

      <ExternalLink href='https://twitter.com' target="_blank" id={style.twitter_link}>Twitter Link</ExternalLink>
      <ExternalLink href='https://training.zuri.team/' target="_blank" id={style.btn_zuri}>Zuri Team</ExternalLink>
      <ExternalLink href='https://books.zuri.team' target="_blank" id={style.books}>Zuri Books</ExternalLink>
      <ExternalLink href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' target="_blank" id={style.book_python}>Python Books</ExternalLink>
      <ExternalLink href='https://background.zuri.team' target="_blank" id={style.pitch}>Background Check for Coders</ExternalLink>
      <ExternalLink href='https://books.zuri.team/design-rules' target="_blank" id={style.book_design}>Design Books</ExternalLink>

      <div id={style.icons}>
      <ExternalLink href='https://slack.com' target="_blank" id={style.slack2}><img src={slack} alt='' /></ExternalLink>
      <ExternalLink href='https://github.com/' target="_blank" id={style.git}><img src={git} alt='' /></ExternalLink>
      </div>

      <Footer />
    </div>
  )
}

export default Links