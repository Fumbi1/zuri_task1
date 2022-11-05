import React from 'react';
import'./links.css';
import slack from '../../assets/slack.png'
import git from '../../assets/Icon.png'
import Footer from '../footer/footer';
import Contact from '../contactlink/contactlink';


const Links = () => {
  return (
    <div id='main'>

      <a href='https://twitter.com' target="_blank" id='twitter__link'rel="noreferrer">Twitter Link</a>
      <a href='https://training.zuri.team/' target="_blank" id='btn__zuri' rel="noreferrer">Zuri Team</a>
      <a href='https://books.zuri.team' target="_blank" id='books' rel="noreferrer" title='You can find books that helps in coding and design here'>Zuri Books</a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=<Muyiwa>' target="_blank" id='book__python' rel="noreferrer" title='The HNG handbook helps to progress further in your tech-based career'>Python Books</a>
      <a href='https://background.zuri.team' target="_blank" id='pitch' rel="noreferrer" title='We help you to find the right person for your specific jobs by running background checks'>Background Check for Coders</a>
      <a href='https://books.zuri.team/design-rules' target="_blank" id='book__design' rel="noreferrer" title='The HNG Design Rules Books gives helpful information on becoming the best designer you wish to be!'>Design Books</a>
      <Contact />

      <div id='icons'>
      <a href='https://slack.com' target="_blank" rel="noreferrer"><img src={slack} alt='' /></a>
      <a href='https://github.com/' target="_blank" id='git' rel="noreferrer"><img src={git} alt='' /></a>
      </div>

      <Footer />
    </div>
  )
}

export default Links;