import React from 'react'
import { NavLink, Outlet } from 'react-router'
import './Navbar.css'
const NavBar = () => {
  return (
    <>
      <div className='header'>
        <div>
          <NavLink className='link' to='/'><h1>Logo</h1></NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className='link' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='link' to='user/Contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink className='link' to='user/About'>About</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/College'>College</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/Users' end>Users</NavLink>
            </li>
            <li>
              <NavLink className='link' to='/Users/List'>List</NavLink>
            </li>
          </ul>
        </div>       
      </div>
      <Outlet/>
    </>
    
  )
}

export default NavBar