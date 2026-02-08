import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
    <div style={{display:'flex',
      justifyContent:'space-between',    
      marginBottom:'0'}}
    > 
      <Link to='/'><h2 > Home</h2></Link>
      
      <Link to='/About'><h2 >About</h2></Link>
      
      <Link to='/Login'><h2 >Login</h2></Link>

    </div>
  )
}

export default NavBar