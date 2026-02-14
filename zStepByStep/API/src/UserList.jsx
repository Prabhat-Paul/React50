import React from "react";
import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import './index.css'

const UserList = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const url = "http://localhost:3000/users";

  useEffect(() => {
    getUserData();
    setLoader(true);
  }, []);

  async function getUserData() {
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);
    setUser(res);
    setLoader(false);
  }

  const deleteUser = async (id) => {
    // console.log(id)
    let res = await fetch(url+'/'+id,{
      method:'DELETE',
    });
    res = await res.json();
    if(res){
      alert("User Deleted")
    }
    getUserData();
  }

  const editUser = (id) => {
    navigate('/edit/'+id)
  }

  return (
    <>
      {!loader ? (
        user.map(({ name, id, age, email }) => (
          <div key={id}>
            <ul  className="userList">
              Name: {name} &nbsp; Age:{age} &nbsp; Email:{email}
              <li>
                <button className="delete-btn"
                onClick={()=>deleteUser(id)}>Delete</button>
                {/* <Link to={'/edit/'+id}><button className="delete-btn">Edit</button></Link> //Using Link we can add the edit function*/}
                <button className="edit-btn" onClick={()=>editUser(id)}>Edit</button>
              </li>
            </ul>
          </div>
        ))
      ) : <h1>Loading...</h1>}
    </>
  );
};

export default UserList;
