import React from 'react'
import Vector from '../../assets/Vector.png'
import I4G from '../../assets/I4G.png'
import'./footer.css'

const Footer = () => {
  return (
    <div>
        <hr />
        <div id='footer'>
            <img src={Vector} alt='' />
            <p id='hng'>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt='' />
        </div>
    </div>
  )
}

export default Footer