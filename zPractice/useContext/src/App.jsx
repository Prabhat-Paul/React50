import React from 'react'
import { UserProvider } from './UserContext'
import UserProfile from './Component/UserProfile'
import { UpdateUser } from './Component/UpdateUser'

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  )
}

export default App