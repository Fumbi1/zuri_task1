import React, { useState } from 'react'
import './contactpage.css'
import Footer from '../../footer/footer';


const Contactpage = () => {
  const [disableState, setDisableState] = useState(true);

  function handleClick(){
      setDisableState(disableState => !disableState);
  }

  const uponClick = (e) => {
    e.preventDefault();
    alert("Message has been delivered");
  }

  let name = "Olumuyiwa Famuagun";

  return (
    <div id='form_section'>
      <form>
        <p id='contact_me'>Contact Me</p>
        <p id='contact_desc'>Hi there, contact me to ask me about anything you have in mind.</p>
        <div id='name_section'>
          <div>
            <label for='first_name' className='name_label'>First name</label><br/>
            <input type='text' placeholder='Enter your first name' id='first_name' required />
          </div>
          <div>
            <label for='last_name' className='name_label'>Last name</label><br/>
            <input type='text' placeholder='Enter your last name' id='last_name' required />
          </div>
        </div>
        <div id='email_section'>
          <label for='email' className='name_label'>Email</label><br/>
          <input type='email' placeholder='yourname@email.com' id='email' required />
        </div>
        <div id='message_section'>
          <label for='message' className='name_label'>Message</label><br/>
          <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message' />
        </div>
        
        <div id='checkbox_section'>
          <input type='checkbox' id='checkbox' onClick={handleClick}  />
          <label for='checkbox' id='checkbox_label'>You agree to providing your data to <span>{name}</span> who may contact you.</label>
        </div>
        <button disabled={disableState} id='btn__submit' onClick={uponClick}>Send message</button>
      </form>

      <Footer />
    </div>
  )
}

export default Contactpage;