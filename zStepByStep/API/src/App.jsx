import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserdata();
  }, []);
  async function getUserdata() {
    const url = "https://dummyjson.com/users";
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);
    setUser(res.users);
  }
  return (
    <>
      <h2> User name fetch</h2>
      
        {user &&
          user.map(({ firstName, id, lastName, age }) => (
            <div key={id}>
            <li style={{border:'1px solid',padding:'5px'}} >
            {id} : {firstName} {lastName} &nbsp;   Age:{age}
            </li>
  
            <br/>
            </div>
          ))}
      
    </>
  );
};

export default App;
