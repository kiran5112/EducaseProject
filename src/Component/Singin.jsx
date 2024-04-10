import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
function Singin() {
  return (
    <div>
      <div className='main2'>
        <h1>Singin to your PopX account</h1>
        <p className='opec'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Possimus earum laboriosam dignis</p>
        <div className='form5'>
          <input className='texbox5' type='text' placeholder=' ' />
          <label className='form-label5'>Email Address</label>
        </div>
        <div className='form6'>
          <input className='texbox6' type='text' placeholder=' ' />
          <label className='form-label6'>Password</label>
        </div>
        <button className='btn3'><Link className='link3' to='/Account'>Login</Link></button>

      </div>
    </div>
  )
}

export default Singin