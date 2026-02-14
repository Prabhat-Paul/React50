import React, { useState } from "react";

const UserAdd = () => {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [email,setEmail]=useState('')
  
  const createUser = async()=>{
    
    // console.log(name,age,email)
    const url="http://localhost:3000/users"
    if(name && age && email){
      let res = await fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name,age,email})
      })
      res = await res.json();
      if(res){
        alert("User Added")
        setName('')
        setAge('')
        setEmail('')
      } else{
        alert("Error adding user")
      }
    }
      
  }

  return (
    <div>
      <h1>Add New User</h1>
      <div>
        <input
          style={{
            marginRight: "10px",
            padding: "9px",
          }}
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          style={{
            marginRight: "10px",
            padding: "9px",
          }}
          placeholder="Enter Age"
          value={age}
          onChange={(e)=>setAge(e.target.value)}
        />
        <input
          style={{
            marginRight: "10px",
            padding: "9px",
          }}
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button style={{
          padding:'9px'
        }} onClick={createUser}>Add User</button>
      </div>
    </div>
  );
};

export default UserAdd;
