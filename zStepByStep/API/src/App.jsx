import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { Link,NavLink, Route, Routes } from "react-router";
import UserAdd from "./UserAdd";
import './index.css'
import UserEdit from "./UserEdit";
const App = () => {
  
  return (
    <>
      <h2>Routes for Integrated JSON server API </h2>
      <div style={{
          display:'flex',
          justifyContent:'space-between',
          marginBottom:'10px',
          backgroundColor:'royalblue',
          padding:'10px',
          width:'650px',
          borderRadius:'10px',

        }} className="list-container">
        <NavLink style={{textDecoration:'none',color:'white',cursor:'pointer',textShadow:'2px 2px 2px black',padding:"5px"}} to='/'>List</NavLink>

        <NavLink style={{textDecoration:'none',color:'white',cursor:'pointer',textShadow:'2px 2px 2px black',padding:"5px"}} to='/add'>Add User</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<UserAdd/>}/>
        <Route path="/edit/:id" element={<UserEdit/>}/>
      </Routes>
      {/* <UserList/> */}
      {/* <UserAdd/> */}
    </>
  );
};

export default App;
