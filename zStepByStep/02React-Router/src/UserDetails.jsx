import React from 'react'
import { useParams,Link } from 'react-router'

const UserDetails = () => {

  const {id}= useParams();

  return (
    <div style={{paddingLeft:'15px'}}>
      <h1>User Details Page</h1>
      <h1>User Id :{id}</h1>
      <h3><Link to='/UsersList'>Back  </Link></h3>
    </div>
  )
}

export default UserDetails