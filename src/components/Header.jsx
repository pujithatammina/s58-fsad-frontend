import React from 'react'
import logo from '/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <ul>
        <li><Link to="/student">Student</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <img src={logo} alt="Logo" />
      <h3>Website Heading</h3>
    </div>
  )
}

export default Header