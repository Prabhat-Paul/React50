import React from 'react'
import { Link, Outlet } from 'react-router'
import './Navbar.css'
const NavBar = () => {
  return (
    <>
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
              <Link className='link' to='user/Contact'>Contact</Link>
            </li>
            <li>
              <Link className='link' to='user/About'>About</Link>
            </li>
            <li>
              <Link className='link' to='/College'>College</Link>
            </li>
            <li>
              <Link className='link' to='/UsersList'>Users</Link>
            </li>
          </ul>
        </div>       
      </div>
      <Outlet/>
    </>
    
  )
}

export default NavBar