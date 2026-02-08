/*import React from 'react'
import {BrowserRouter, Routes,Route,Link} from 'react-router'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Link to='/'>Home</Link>
      &nbsp;
      <Link to='/About'>About</Link>
      &nbsp;
      <Link to='/Contact'>Contact</Link>
      &nbsp;

      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/About' element={<h1>About</h1>}/>
        <Route path='/Contact' element={<h1>Contact</h1>}/>

      </Routes>      
      </BrowserRouter>


    </div>
  )
}

export default App ---------Base Syntax in one jsx*/ 
import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'


const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App