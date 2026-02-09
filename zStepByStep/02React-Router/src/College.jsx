import React from 'react'
import { Link, Outlet } from 'react-router'
import { NavLink } from 'react-router'

const College = () => {
  return (
    <div className='college ' style={{textAlign:'center' }}>
      <h1 style={{marginTop:'0px', paddingTop:'20px'}}>College</h1>
      <h3><Link className='link' to='/'>Go Back To Home</Link></h3>
      <NavLink className='link' to='' end>Student</NavLink>
      <NavLink className='link' to='Departments'>Departments</NavLink>
      <NavLink className='link' to='Details'>College details</NavLink>
      <Outlet/>
    </div>
  )
}

export default College