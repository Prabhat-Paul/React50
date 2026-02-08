import React from 'react'
import { Link } from 'react-router'
import './Navbar.css'
const NavBar = () => {
  return (
    <div className='header'>
      <div>
        <Link className='link' to='/'><h1>Logo</h1></Link>
      </div>
      <div>
        <ul>
          <li>
            <Link className='link' to='/'>Home</Link>
          </li>
          <li>
            <Link className='link' to='/Contact'>Contact</Link>
            </li>
          <li>
            <Link className='link' to='/About'>About</Link>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar