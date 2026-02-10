import React from 'react'
import { Link } from 'react-router'
import './NavBar.css'

const UsersList = () => {
  const userData= [
    {id:1,name:'Prabhat'},
    {id:2,name:'Paul'},
    {id:3,name:'Sonu'},
    {id:4,name:'Sarkar'},
    {id:5,name:'Ali'},
    {id:6,name:'Moti'},
  ]
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        paddingLeft:'25px',
        backgroundColor:'lightgoldenrodyellow'
      }}>
      <h1>Users List Page</h1>
      {
        userData.map(({id,name})=>(
          <div > 
            <h3 ><Link className='link' to={'/UsersList/'+id}>{name}</Link></h3>
          </div>
        ))
      }
    </div>
  )
}

export default UsersList