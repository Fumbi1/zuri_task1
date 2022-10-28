import React from 'react';
import { ExternalLink } from 'react-external-link';
import style from './links.module.css';


const Links = () => {
  return (
    <div>
      <div>
        <ExternalLink href='https://twitter.com' target="_blank">Twitter</ExternalLink>
      </div>
      <div>
        <ExternalLink href='https://training.zuri.team/' target="_blank" id={style.btn_zuri}>Zuri Team</ExternalLink>
      </div>
      <div>
        <ExternalLink href='https://books.zuri.team' target="_blank" id={style.books}>Zuri Books</ExternalLink>
      </div>
      <div>
        <ExternalLink href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' target="_blank" id={style.book_python}>Python Books</ExternalLink>
      </div>
      <div>
        <ExternalLink href='https://background.zuri.team' target="_blank" id={style.pitch}>Background Check for Coders</ExternalLink>
      </div>
      <div>
        <ExternalLink href='https://books.zuri.team/design-rules' target="_blank" id={style.book_design}>Design Books</ExternalLink>
      </div>
    </div>
  )
}

export default Links