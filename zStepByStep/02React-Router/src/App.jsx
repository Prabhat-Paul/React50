import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavBar from './NavBar'
import Page404 from './Page404'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route  path='/*' element={<Page404/>}/>
        {/* <Route path='/*' element={<Navigate to='/'/>}/> 
        -------this is for without 404Page directly redirecting-----------
        */}
      </Routes>

    </>
  )
}

export default App