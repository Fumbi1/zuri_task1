import React from 'react'
import './contactpage.css'

const Contactpage = () => {
  return (
    <form>
    <p>Contact Me</p>
    <p>Hi there, contact me to ask me about anything you have in mind.</p>

    <div>
      <label for='first_name'>First name</label>
      <input type='text' placeholder='Enter your first name' id='first_name' />
      <label for='last_name'>Last name</label>
      <input type='text' placeholder='Enter your last name' id='last_name' />
    </div>

    <label for='email'>Email</label>
    <input type='email' placeholder='yourname@email.com' id='email' />
    <label for=''>Email</label>
    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message' />

    <input type='radio' id='radio'name='toggle' />
    <label for='radio'>You agree to providing your data to Olumuyiwa Famuagun who may contact you.</label>

    <button id='btn__submit'></button>
  </form>
  )
}

export default Contactpage;