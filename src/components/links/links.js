import React from 'react';
import'./links.css';
import slack from '../../assets/slack.png'
import git from '../../assets/Icon.png'
import Footer from '../footer/footer';


const Links = () => {
  return (
    <div id='main'>

      <a href='https://twitter.com' target="_blank" id='twitter__link'rel="noreferrer">Twitter Link</a>
      <a href='https://training.zuri.team/' target="_blank" id='btn__zuri' rel="noreferrer">Zuri Team</a>
      <a href='https://books.zuri.team' target="_blank" id='books' rel="noreferrer">Zuri Books</a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' target="_blank" id='book__python' rel="noreferrer">Python Books</a>
      <a href='https://background.zuri.team' target="_blank" id='pitch' rel="noreferrer">Background Check for Coders</a>
      <a href='https://books.zuri.team/design-rules' target="_blank" id='book__design' rel="noreferrer">Design Books</a>

      <div id='icons'>
      <a href='https://slack.com' target="_blank" rel="noreferrer"><img src={slack} alt='' /></a>
      <a href='https://github.com/' target="_blank" id='git' rel="noreferrer"><img src={git} alt='' /></a>
      </div>

      <Footer />
    </div>
  )
}

export default Links