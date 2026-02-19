import React, { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router";

const UserEdit = () => {
  const {id} = useParams();
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [email,setEmail]=useState('')
  const url ="http://localhost:3000/users/"+id;

  const navigate = useNavigate();

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData = async()=>{ 
    let res = await fetch(url);
    res = await res.json();
    // console.log(res)
    setName(res.name)
    setAge(res.age)
    setEmail(res.email)
  }

  const updateUserData = async ()=>{
    // console.log(name,age,email)
    let res= await fetch(url,{
      method:'PUT',
      body:JSON.stringify({name,age,email}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    res = await res.json();
    if(res){
      alert("User Updated Successfully")
      navigate('/')
    } 

  }

  return (
    <div>
      <h1>Edit User Details</h1>
      <input
        style={{
          marginRight: "10px",
          padding: "9px",
        }}
        placeholder="Edit Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        style={{
          marginRight: "10px",
          padding: "9px",
        }}
        placeholder="Edit Age"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
      />

      <input
        style={{
          marginRight: "10px",
          padding: "9px",
        }}
        placeholder="Edit Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button style={{ padding: "10px", marginTop: "10px",backgroundColor:'rgb(77, 133, 57)',color:'white',borderRadius:'5px' }}
      onClick={updateUserData}
      >Update User</button>
    </div>
  );
};

export default UserEdit;
