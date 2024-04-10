import React from 'react'
import { Link } from 'react-router-dom'

function Head() {
  return (
    <div>
        <Link to='/Profile'>Profile</Link>
        <Link to='/Account'>Account</Link>
    </div>
  )
}

export default Head