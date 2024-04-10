import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Validation functions
  const validateEmail = () => {
    return email.trim() !== '';
  };

  const validatePassword = () => {
    return password.trim() !== '';
  };

  const validateFullName = (prop) => {
    return fullName.trim() !== '';

  };

  const validatePhoneNumber = () => {
    return phoneNumber.trim() !== '';
  };


  return (
    <div>
      <div className='main2'>
        <h1>Create your PopX account</h1>
        <div className='form'>
          <input className='texbox' type='text' placeholder=' ' value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className='form-label'>Full Name{!validateFullName() && <span style={{ color: 'red' }}>*</span>}
          </label>
        </div>
        <div className='form1'>
          <input className='texbox1' type='Number' placeholder=' ' value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label className='form-label1'>Phone Number{!validatePhoneNumber() && <span style={{ color: 'red' }}>*</span>}
          </label>
        </div>
        <div className='form2'>
          <input className='texbox2' type='email' placeholder=' ' value={email}
            onChange={(e) => setEmail(e.target.value)} />


          <label className='form-label2'>Email-Address{!validateEmail() && <span style={{ color: 'red' }}>*</span>}
          </label>

        </div><div className='form3'>
          <input className='texbox3' type='password' placeholder=' ' value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='form-label3'>Password{!validatePassword() && <span style={{ color: 'red' }}>*</span>}
          </label>
        </div><div className='form4'>
          <input className='texbox4' type='text' placeholder=' ' />
          <label className='form-label4'>Company Name</label>
        </div>


        <form><div>Are you an Agency?</div>
          <div style={{ display: 'flex', alignItems: 'start' }}>
            <input className='wraper' type="radio" id="option1" name="options" value="option1" />
            <label>Yes</label>
            <input className='wraper' type="radio" id="option2" name="options" value="option2" />
            <label>No</label>
          </div>
        </form>
        <div className='end'>
          <button className='btn1'><Link className='link' to='/Profile'>Create Account</Link></button>

        </div>
      </div>
    </div>
  )
}

export default Account