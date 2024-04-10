import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
function App() {

  return (
    <>
      <div className='main'>
        <h1>Wellcome to PopX</h1>
        <p className='opec'>Lorem ipsum dolor sit amet consectetur adipisicing
          elit consectetur adipisicing.</p>
        <button className='btn1'><Link className='link' to='/Singin'>Create Account</Link></button>
        <button className='btn2'><Link className='link2' to='/Account'>Already Registered? Login</Link></button>
      </div>
    </>
  )
}

export default App;
