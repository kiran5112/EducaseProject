import React from 'react'
import myimg from '../assets/Ellipse 114@2x.png'
import simg from '../assets/Group 1585.jpg'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div>
      <div className='main2'>
         <h2 className='col'>Account Settings</h2>
         <div className='box'>
          <img className='img' src={myimg} alt='profile'/>
          <img className='small' src={simg}/>
         <div className='part'>
           <h5 className='pcolor'>Kiran kunal randhawa</h5><br></br>
          <h6 className='pcolor'>kbijarane@gmail.com</h6>
          </div>
          </div>
          <p className='pg'>Lorem ipsum dolor. Cupiditate exercitationem  maiores adipisci sequi asperiores beatae quaerat, impedit unde nostrum facilis vitae harum, </p>
          <div className='hr'></div>
          <div className='hr1'></div>
          <button><Link to='/'>Back</Link></button>

      </div>
    </div>
  )
}

export default Profile