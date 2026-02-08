import React from 'react'
import { Link } from 'react-router'

const Page404 = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop:'20px'
    }}>
      <h1>Page Not Found</h1>
      <Link to='/'><button style={{
        padding:"12px",
        fontSize:'15px',
        fontWeight:"bold",
        borderRadius:"1px",
        border:'none',
        backgroundColor:'rgb(40, 158, 40)',
        color:'rgb(255, 255, 255)',
        cursor:'pointer'
      }}>Go To Home</button></Link>
      <img style={{width:'60%'}} src="https://webartdevelopers.com/blog/wp-content/uploads/2018/10/CodePen-404-Page.gif" alt="404 Not Found" />
    </div>
  )
}

export default Page404