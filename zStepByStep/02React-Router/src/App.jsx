import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavBar from './NavBar'
import Page404 from './Page404'
import College from './College'
import Student from './Student'
import Departments from './Departments'
import CollegeDetails from './CollegeDetails'
import UsersList from './UsersList'
import UserDetails from './UserDetails'

const App = () => {
  return (
    <>
      {/* <NavBar/> */}
      
      <Routes>

        <Route element={<NavBar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/UsersList' element={<UsersList/>}/>
          <Route path='/UsersList/:id' element={<UserDetails/>}/>

          <Route path='user'> 
            <Route path='/user/About' element={<About/>}/>
            <Route path='/user/Contact' element={<Contact/>}/> 
          </Route>         
        </Route>
                
        <Route path='/College' element={<College/>}>
          <Route index element={<Student/>}/>
          <Route path='Departments'element={<Departments/>}/>
          <Route path='Details'element={<CollegeDetails/>}/>
        </Route>
        <Route  path='/*' element={<Page404/>}/>


        {/* <Route path='/*' element={<Navigate to='/'/>}/> 
        -------this is for without 404Page directly redirecting to any page we want through Navigate to='';-----------
        */}

      </Routes>

    </>
  )
}

export default App