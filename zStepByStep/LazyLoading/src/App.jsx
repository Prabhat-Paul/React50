import React, { Suspense } from 'react'
import { useState,lazy} from 'react'
// import User from './User'
const User = lazy(()=>import('./User'));

const App = () => {
  const [loadUser, setLoadUser] = useState(false)
  return (
    <div>
      <h1>Lazy Loading</h1>
      <button onClick={()=>setLoadUser((prev)=>!prev)}>{loadUser ? "Hide User" : "Show User"}</button>

      {loadUser && <Suspense fallback={<h2>Loading...</h2>}><User/></Suspense>}

      {/* {loadUser && <User/>} */}
    </div>
  )
}

export default App